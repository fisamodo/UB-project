import React from "react";
import { ISurvey } from "../../api-types";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Txt } from "../components/Txt";
import { HTMLDisplay } from "../components/HTMLDisplay";
import { Button } from "../components/Button";

interface ISurveyPrompt {
  survey: ISurvey;
  setSurveyStep(): void;
}
export const SurveyPrompt: React.FC<ISurveyPrompt> = ({
  survey,
  setSurveyStep,
}) => {
  return (
    <div tw="flex flex-col flex-1">
      <Txt css={[tw`text-xl font-bold mb-10`]}>{survey.attributes.title}</Txt>
      <HTMLDisplay
        css={[tw`font-semibold`]}
        context={survey.attributes.description}
      />
      <Button
        text={"Proceed"}
        containerCss={[
          tw`border-2 border-r-2 border-white py-1 my-4 px-2 w-32 self-end`,
        ]}
        inputCss={[tw`text-gray-900 font-semibold text-2xl`]}
        onClick={setSurveyStep}
      />
    </div>
  );
};
