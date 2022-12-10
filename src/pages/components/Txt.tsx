/** @jsxImportSource @emotion/react */

import React from "react";
import tw from "twin.macro";

interface ITxtProps {
  className?: string;
}

export const Txt: React.FC<ITxtProps> = (props) => {
  return (
    <div tw="font-sans font-normal text-sm" className={props.className}>
      {props.children}
    </div>
  );
};
