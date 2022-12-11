import React from "react";
import { useHistory, useLocation } from "react-router";
import tw from "twin.macro";
import { IAnswer, ISurvey } from "../../api-types";
import { Button } from "../components/Button";
import { PageContainer } from "../components/PageContainer";
import { SurveySummary } from "./SurveySummary";
/** @jsxImportSource @emotion/react */

export const SuccessPage = () => {
  const location = useLocation();
  const navigation = useHistory();
  const { answers, survey } = location.state as {
    answers: IAnswer;
    survey: ISurvey;
  };
  console.log(answers, survey);
  return (
    <PageContainer
      containerCss={[tw`h-screen flex items-center justify-center`]}
    >
      <div tw="bg-gray-300 p-12 max-h-full w-max flex flex-col max-w-448">
        <SurveySummary answer={answers} survey={survey} />
        <Button
          text={"Go back"}
          onClick={() => history.back()}
          containerCss={[tw`border-2 border-r-2 border-white py-2 px-2 mt-6`]}
          inputCss={[tw`text-gray-900 font-semibold text-2xl justify-center`]}
        />
      </div>
    </PageContainer>
  );
};
