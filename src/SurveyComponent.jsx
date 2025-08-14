import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";
import "./index.css";
import { json } from "./json";

function SurveyComponent() {
  const survey = new Model(json);
  survey.onComplete.add((sender) => {
    if (sender.data.agreeToParticipate === "yes") {
      const formData = new FormData();
      formData.append("form-name", "survey");
      // Add each survey answer as a separate field
      Object.entries(sender.data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      fetch("/", {
        method: "POST",
        body: formData,
      });
    }
    console.log(JSON.stringify(sender.data, null, 3));
  });
  return <Survey model={survey} />;
}

export default SurveyComponent;
