//@ts-nocheck
import { UseFormReturn } from "react-hook-form";
import { IAttributeValues, ISurvey } from "../api-types";

class SurveyFormUtils {
  getChoiceSpread = (attributes: IAttributeValues) => {
    return attributes?.max - attributes?.min + 1;
  };
  getOptionsFromSpread = (attributes: IAttributeValues) => {
    const spread = this.getChoiceSpread(attributes);
    return [...Array(spread)].map((e, i) => {
      return { label: (i + 1).toString(), value: i + 1 };
    });
  };

  formatAnswers = (
    values: {
      film: string;
      review: {
        value: number;
        label: string;
      };
    },
    survey: ISurvey
  ) => {
    return {
      type: "surveyAnswers",
      attributes: {
        answers: survey.attributes.questions.map((question, i) => {
          console.log(values[survey.attributes.questions[i].questionId].value);
          const answer =
            values[survey.attributes.questions[i].questionId].value ===
            undefined
              ? values[survey.attributes.questions[i].questionId]
              : values[survey.attributes.questions[i].questionId].value;
          return {
            questionId: question.questionId,
            answer: answer,
          };
        }),
      },
    };
  };
}

export const surveryFormUtils = new SurveyFormUtils();
