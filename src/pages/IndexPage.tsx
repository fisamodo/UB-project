import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import tw from "twin.macro";
import { SimpleInputField } from "./components/fields/SimpleInputField";
import { TextSectionDropdownInput } from "./components/fields/TextSectionDropdownInput";
import { PageContainer } from "./components/PageContainer";
import { Txt } from "./components/Txt";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "./components/Button";
import { useSurveys } from "../hooks/useSurveys";

/** @jsxImportSource @emotion/react */

export const IndexPage = () => {
  const { data: surveyData } = useSurveys();
  const schema = yup.object().shape({
    opinion: yup.string().required(),
    rating: yup
      .object()
      .shape({ value: yup.number(), label: yup.string() })
      .nullable(),
  });

  const methods = useForm({
    defaultValues: {
      opinion: "",
      rating: 1,
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      console.log(values);
    } catch (e) {
      console.error(e);
    }
  });
  console.log(surveyData);
  return (
    <PageContainer
      containerCss={[tw`h-screen flex items-center justify-center`]}
    >
      <div tw="bg-gray-300 p-12 flex flex-col justify-between h-2/5 w-3/5">
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
    </PageContainer>
  );
};
