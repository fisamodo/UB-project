/** @jsxImportSource @emotion/react */
import { MouseEventHandler } from "react";
import { Txt } from "./Txt";
import tw from "twin.macro";
import { Interpolation } from "@emotion/serialize";
import { ICSSProps } from "../../types";

interface IButtonProps extends ICSSProps {
  type?: any;
  icon?: any;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const Icon = props.icon;
  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      css={[
        tw`border-0 rounded-3xl cursor-pointer flex flex-row items-center px-3 py-2.5 mr-0`,
      ]}
      onClick={props.onClick}
    >
      {Icon && <Icon width={20} color={"#39749B"} tw="mr-3" />}
      <Txt
        css={[tw`flex-grow text-white`]}
        tw="font-weight[300] font-size[0.825rem]"
      >
        {props.text}
      </Txt>
    </button>
  );
};