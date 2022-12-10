import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import tw from "twin.macro";
import { SimpleInputField } from "./components/fields/SimpleInputField";
import { TextSectionDropdownInput } from "./components/fields/TextSectionDropdownInput";
import { PageContainer } from "./components/PageContainer";
import { Txt } from "./components/Txt";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

/** @jsxImportSource @emotion/react */

export const IndexPage = () => {
  const schema = yup.object().shape({
    opinion: yup.string().required(),
    rating: yup.number().required(),
  });

  const methods = useForm({
    defaultValues: {
      opinion: "",
      rating: 1,
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  return (
    <PageContainer
      containerCss={[tw`h-screen flex items-center justify-center`]}
    >
      <div tw="w-1/4 h-1/4 bg-gray-300 p-6 flex flex-col justify-between">
        <Txt>Rate this movie!</Txt>
        <FormProvider {...methods}>
          <SimpleInputField name={"opinion"} />
          <TextSectionDropdownInput name={"rating"} options={[]} />
        </FormProvider>
      </div>
    </PageContainer>
  );
};
