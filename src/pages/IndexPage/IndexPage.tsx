import React, { useState } from "react";
import { useForm } from "react-hook-form";
import tw from "twin.macro";
import { PageContainer } from "../components/PageContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSurveys } from "../../hooks/useSurveys";
import { SurveyForm } from "./SurveyForm";
import { Stepper } from "../components/Stepper";
import { SurveyPrompt } from "./SurveyPrompt";
import { Txt } from "../components/Txt";
import { ISurvey } from "../../api-types";
import { useHistory } from "react-router";
import { surveyRepository } from "../../api/surveyRepository";
import { surveryFormUtils } from "../../utils/survey-form-utils";

/** @jsxImportSource @emotion/react */

enum Survey {
  Intro = 1,
  Survey,
}
export const IndexPage = () => {
  const [surveyStep, setSurveyStep] = useState<Survey>(1);
  const {
    data: surveyData,
    isFetching: isFetchingSurveyData,
    isLoading: isLoadingSurveyData,
  } = useSurveys();
  const navigation = useHistory();
  const schema = yup.object().shape({
    film: yup.string().typeError("An opinion is required"),
    review: yup
      .object()
      .shape({ value: yup.number(), label: yup.string() })
      .typeError("A rating is required"),
  });

  const methods = useForm({
    defaultValues: {
      film: "",
      review: { value: 0, label: "" },
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const numberOfSteps = Object.keys(Survey).length / 2;
  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      console.log(values);
      const answers = surveryFormUtils.formatAnswers(values, lastSurvey);
      surveyRepository.submitAnswer(answers, lastSurvey._id);
      navigation.push("/success");
    } catch (e) {
      console.error(e);
    }
  });

  if (isFetchingSurveyData || isLoadingSurveyData || !surveyData) {
    return <Txt>Loading...</Txt>;
  }

  const fetchLatestSurvey = (surveyData: ISurvey[]): ISurvey => {
    const sortedSurveys = surveyData?.sort((a, b) => {
      return a.createdAt.valueOf() - b.createdAt.valueOf();
    });
    return sortedSurveys[0];
  };
  const lastSurvey = fetchLatestSurvey(surveyData);

  //HANDLE CASE IF WE DON'T FETCH ANY SURVEYS
  return (
    <PageContainer
      containerCss={[tw`h-screen flex items-center justify-center`]}
    >
      <div tw="bg-gray-300 p-12 h-2/5 w-2/3 flex flex-col max-w-448">
        {surveyStep === 1 && (
          <SurveyPrompt
            survey={lastSurvey}
            setSurveyStep={() => setSurveyStep(2)}
          />
        )}
        {surveyStep === 2 && (
          <SurveyForm
            methods={methods}
            onSubmit={onSubmit}
            survey={lastSurvey}
          />
        )}
        <Stepper currentStep={surveyStep} numberOfSteps={numberOfSteps} />
      </div>
    </PageContainer>
  );
};
