//@ts-nocheck
import { UseFormReturn } from "react-hook-form";
import { IAnswer, IAttributeValues, ISurvey } from "../api-types";
import { ISurveyForm } from "../types";

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

  formatAnswers = (values: ISurveyForm, survey: ISurvey) => {
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

  joinQuestionsWithAnsers = (answer: IAnswer, survey: ISurvey) => {
    return answer.attributes.answers.map((answer) => {
      const question = survey.attributes.questions.filter(
        (survey) => survey.questionId === answer.questionId
      )[0];
      return { question, answer };
    });
  };
}

export const surveryFormUtils = new SurveyFormUtils();
