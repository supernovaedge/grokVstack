import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";
import "./index.css";
import { json } from "./json";

function normalizeResponse(data) {
  const out = { ...data };

  // 1) Convert array fields to a pipe-separated string (stable & CSV-safe)
  const arrayFields = [
    "primaryLanguage",
    "aiAssistantsUsed",
    "aiIntegrationEnvironment",
    "grokNonUseReasons",
    "preference_reason",
    "question13",
    "question22",
    "question31",
    "question40",
  ];
  arrayFields.forEach((k) => {
    if (Array.isArray(out[k])) out[k] = out[k].join("|");
  });

  // 2) Coerce Likert answers from strings ("1".."5") to numbers
  const likertFields = Object.keys(out).filter((k) =>
    /^(answer[AB]_(accuracy|clarity|relevance)|question(5|7|8|9|10|11|15|16|17|18|19|20|24|25|26|27|28|29|33|34|35|36|37|38))$/.test(
      k
    )
  );
  likertFields.forEach((k) => (out[k] = Number(out[k])));

  // 3) Normalize “Which answer would you accept?” booleans into "A"/"B"
  //    true == labelTrue ("B") in your survey; false == "A"
  const acceptMap = {
    question3: "reverse_string_python",
    question12: "csharp_singleton",
    question21: "xmltodict_parse",
    question39: "pip_git_install",
  };
  Object.entries(acceptMap).forEach(([k, label]) => {
    if (k in out) {
      out[`accepted_${label}`] = out[k] ? "B" : "A";
      delete out[k]; // drop raw boolean to avoid ambiguity
    }
  });

  // 4) Ensure booleans elsewhere are strings (Netlify CSV-friendly)
  Object.keys(out).forEach((k) => {
    if (typeof out[k] === "boolean") out[k] = out[k] ? "true" : "false";
  });

  // 5) Add a server-friendly timestamp
  out.submittedAt = new Date().toISOString();

  return out;
}

function SurveyComponent() {
  const survey = new Model(json);

  survey.onComplete.add((sender) => {
    if (sender.data.agreeToParticipate === "yes") {
      const normalized = normalizeResponse(sender.data);

      const formData = new FormData();
      formData.append("form-name", "survey");

      // Append each normalized field
      Object.entries(normalized).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      // Also include the full JSON blob (nice for detailed exports)
      formData.append("responses", JSON.stringify(normalized));

      fetch("/", { method: "POST", body: formData });
      console.log(
        "Normalized submission:",
        JSON.stringify(normalized, null, 2)
      );
    } else {
      console.log("User did not consent.");
    }
  });

  return <Survey model={survey} />;
}

export default SurveyComponent;
