import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import tw from "twin.macro";
import { ISurvey } from "../../api-types";
import { Button } from "../components/Button";
import { SimpleInputField } from "../components/fields/SimpleInputField";
import { TextSectionDropdownInput } from "../components/fields/TextSectionDropdownInput";
import { Txt } from "../components/Txt";
/** @jsxImportSource @emotion/react */

interface ISurveyForm {
  methods: UseFormReturn<
    {
      opinion: string;
      rating: number;
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
  const { attributes } = survey;
  return (
    <div tw="flex flex-col justify-between flex-1">
      <Txt>Rate this movie!</Txt>
      <FormProvider {...methods}>
        <SimpleInputField
          name={"opinion"}
          placeholder="Let us know what you tought about the movie!"
          inputCss={[tw`text-sm`]}
        />
        <TextSectionDropdownInput
          name={"rating"}
          options={[{ value: 1, label: "1" }]}
          placeholder="Your rating"
          containerCss={[tw`my-4`]}
          inputCss={[tw`text-white text-sm`]}
        />

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
