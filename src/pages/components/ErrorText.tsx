import "twin.macro";

/** @jsxImportSource @emotion/react */
import React from "react";
import { Txt } from "./Txt";

interface IErrorTextProps {
  className?: string;
  children?: React.ReactNode;
}

export const ErrorText: React.FC<IErrorTextProps> = (props) => {
  return (
    <Txt {...props} tw="text-error">
      {props.children}
    </Txt>
  );
};
