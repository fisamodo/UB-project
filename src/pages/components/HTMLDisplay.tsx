/** @jsxImportSource @emotion/react */

import React from "react";
import tw from "twin.macro";

interface IHTMLDisplay {
  className?: string;
  context: string;
}

export const HTMLDisplay: React.FC<IHTMLDisplay> = ({ className, context }) => {
  return (
    <div
      tw="font-sans font-normal text-sm"
      className={className}
      dangerouslySetInnerHTML={{ __html: context }}
    ></div>
  );
};
