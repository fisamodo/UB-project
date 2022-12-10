import React from "react";
import tw from "twin.macro";
import { PageContainer } from "./components/PageContainer";
import { Txt } from "./components/Txt";
/** @jsxImportSource @emotion/react */

export const IndexPage = () => {
  return (
    <PageContainer
      containerCss={[tw`h-screen flex items-center justify-center`]}
    >
      <Txt>Hello from index page</Txt>
    </PageContainer>
  );
};
