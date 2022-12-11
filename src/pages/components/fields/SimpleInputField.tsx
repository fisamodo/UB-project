import { useController, useFormContext } from "react-hook-form";

import { ExclamationCircleIcon } from "@heroicons/react/solid";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { TwinStyle } from "../../../types";

interface ISimpleInputField {
  name: string;
  placeholder?: string;
  rightText?: string;
  autoFocus?: boolean;
  id?: string;
  containerCss?: TwinStyle;
  inputCss?: TwinStyle;
}

export const SimpleInputField: React.FC<ISimpleInputField> = ({
  name,
  placeholder,
  rightText,
  autoFocus,
  id,
  containerCss,
  inputCss,
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return (
    <div css={[tw`relative w-full`, containerCss]}>
      {error ? (
        <ExclamationCircleIcon
          tw="h-5 w-5 absolute right-3 top-2.5"
          color="#EF4444"
        />
      ) : rightText ? (
        <span tw="text-sm text-gray-500 absolute right-3 top-2.5">
          {rightText}
        </span>
      ) : (
        <div />
      )}
      <textarea
        id={id ?? ""}
        value={field.value ?? ""}
        autoFocus={autoFocus ?? false}
        onChange={({ target: { value } }) => field.onChange(value)}
        css={[
          tw`block w-full mb-0 px-2.5 py-2 border placeholder-gray-500 rounded-md focus:outline-none  focus:border-primary-500`,
          inputCss,
        ]}
        placeholder={placeholder}
      />
    </div>
  );
};
