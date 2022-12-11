/** @jsxImportSource @emotion/react */
import { MouseEventHandler } from "react";
import { Txt } from "./Txt";
import tw from "twin.macro";
import { Interpolation } from "@emotion/serialize";
import { ICSSProps, TwinStyle } from "../../types";

interface IButtonProps extends ICSSProps {
  type?: any;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  containerCss?: TwinStyle;
  inputCss?: TwinStyle;
}

export const Button: React.FC<IButtonProps> = ({
  type,
  text,
  onClick,
  disabled,
  containerCss,
  inputCss,
}) => {
  return (
    <button
      type={type ?? "button"}
      disabled={disabled}
      css={[
        tw`border-0 rounded-3xl cursor-pointer flex flex-row items-center px-3 py-2.5 mr-0`,
        containerCss,
      ]}
      onClick={onClick}
    >
      <Txt
        css={[tw`flex-grow text-white`, inputCss]}
        tw="font-weight[300] font-size[0.825rem]"
      >
        {text}
      </Txt>
    </button>
  );
};
