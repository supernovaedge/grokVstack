import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";
import "./index.css";
import { json } from "./json";

function SurveyComponent() {
  const survey = new Model(json);
  survey.onComplete.add((sender) => {
    const formData = new FormData();
    formData.append("form-name", "survey");
    formData.append("responses", JSON.stringify(sender.data));
    fetch("/", {
      method: "POST",
      body: formData,
    });
    console.log(JSON.stringify(sender.data, null, 3));
  });
  return <Survey model={survey} />;
}

export default SurveyComponent;
