import { ArrayInterpolation, Theme } from "@emotion/react";
import { CSSProperties } from "react";

export interface IDropdownOption {
  label: string;
  value: any;
}

export type ICSSProps = {
  className?: string | undefined;
  style?: CSSProperties | undefined;
};
export type TwinStyle = ArrayInterpolation<Theme>;
