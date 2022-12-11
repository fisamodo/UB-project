/** @jsxImportSource @emotion/react */
import { FC, PropsWithChildren } from "react";
import { containerCSS } from "react-select/dist/declarations/src/components/containers";

import tw from "twin.macro";
import { TwinStyle } from "../../types";

interface IPageContainer {
  containerCss?: TwinStyle;
}

export const PageContainer: FC<PropsWithChildren<IPageContainer>> = (props) => {
  return (
    <div
      css={[tw`bg-gray`, tw`w-full h-[calc(100vh-4rem)]`, props.containerCss]}
    >
      {props.children}
    </div>
  );
};
