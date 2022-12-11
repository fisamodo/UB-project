import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

import { TwinStyle } from "../../types";

interface IStepper {
  currentStep: number;
  numberOfSteps: number;
  containerCss?: TwinStyle;
}
export const Stepper: React.FC<IStepper> = ({
  currentStep,
  numberOfSteps,
  containerCss,
}) => {
  return (
    <div css={[tw`w-full`, containerCss]}>
      {currentStep} {numberOfSteps}
    </div>
  );
};
