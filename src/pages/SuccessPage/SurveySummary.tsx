import React from "react";
import { IAnswer, ISurvey } from "../../api-types";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Txt } from "../components/Txt";
import { surveryFormUtils } from "../../utils/survey-form-utils";

interface ISurveySummary {
  answer: IAnswer;
  survey: ISurvey;
}

export const SurveySummary: React.FC<ISurveySummary> = ({ answer, survey }) => {
  const questionWithAnswers = surveryFormUtils.joinQuestionsWithAnsers(
    answer,
    survey
  );
  console.log(questionWithAnswers);
  return (
    <div tw="flex flex-col flex-1">
      <Txt css={[tw`text-xl font-bold mb-10`]}>
        Thank you for submitting the survey
      </Txt>
      {questionWithAnswers.map((qaPair) => {
        return (
          <>
            <Txt css={[tw`my-4`]}>Question: {qaPair.question.label}</Txt>
            <Txt>Answer: {qaPair.answer.answer}</Txt>
          </>
        );
      })}
    </div>
  );
};
