import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import tw from "twin.macro";
import { IAttributeValues, ISurvey } from "../../api-types";
import { surveryFormUtils } from "../../utils/survey-form-utils";
import { Button } from "../components/Button";
import { SimpleInputField } from "../components/fields/SimpleInputField";
import { TextSectionDropdownInput } from "../components/fields/TextSectionDropdownInput";
import { Txt } from "../components/Txt";
/** @jsxImportSource @emotion/react */

interface ISurveyForm {
  methods: UseFormReturn<
    {
      film: string;
      review: {
        value: number;
        label: string;
      };
    },
    any
  >;
  onSubmit(): void;
  survey: ISurvey;
}

export const SurveyForm: React.FC<ISurveyForm> = ({
  methods,
  onSubmit,
  survey,
}) => {
  const {
    attributes: { questions },
  } = survey;

  return (
    <div tw="flex flex-col justify-between flex-1">
      <Txt>Rate this movie!</Txt>
      <FormProvider {...methods}>
        {questions?.map((question) => {
          if (question.questionType === "text") {
            return (
              <SimpleInputField
                key={survey._id + question.questionId}
                name={question.questionId}
                placeholder={question.label}
                inputCss={[tw`text-sm`]}
              />
            );
          } else if (question.questionType === "rating") {
            return (
              <TextSectionDropdownInput
                key={survey._id + question.questionId}
                name={question.questionId}
                options={surveryFormUtils.getOptionsFromSpread(
                  question.attributes!
                )}
                placeholder={question.label}
                containerCss={[tw`my-4`]}
                inputCss={[tw`text-white text-sm`]}
              />
            );
          }
        })}

        <Button
          text={"Submit"}
          containerCss={[tw`border-2 border-r-2 border-white py-2 px-2`]}
          inputCss={[tw`text-gray-900 font-semibold text-2xl`]}
          onClick={onSubmit}
        />
      </FormProvider>
    </div>
  );
};
