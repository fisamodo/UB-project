import { useController, useFormContext } from "react-hook-form";

import { ExclamationCircleIcon } from "@heroicons/react/solid";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

interface ISimpleInputField {
  name: string;
  placeholder?: string;
  type?: string;
  rightText?: string;
  min?: number;
  autoFocus?: boolean;
  id?: string;
}

export const SimpleInputField = (props: ISimpleInputField) => {
  const { name, placeholder, type, rightText, min, autoFocus, id } = props;
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return (
    <div tw="relative w-full">
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
      <input
        id={id ?? ""}
        value={field.value ?? ""}
        type={type}
        autoFocus={autoFocus ?? false}
        tw="block w-full mb-0 px-2.5 py-2 border placeholder-gray-500 rounded-md focus:outline-none  focus:border-primary-500"
        placeholder={placeholder}
        min={min ?? 0}
      />
    </div>
  );
};
