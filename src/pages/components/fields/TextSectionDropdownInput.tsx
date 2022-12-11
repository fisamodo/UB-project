import "twin.macro";

import { CheckIcon } from "@heroicons/react/solid";
import Select from "react-select";
import { useController, useFormContext } from "react-hook-form";

import { ErrorText } from "../ErrorText";
import React from "react";
import { Txt } from "../Txt";
import { IDropdownOption, TwinStyle } from "../../../types";
import tw from "twin.macro";

/** @jsxImportSource @emotion/react */

interface ITextSectionDropdownInput {
  name: string;
  options: IDropdownOption[];
  placeholder?: string;
  className?: string;
  styles?: any;
  containerCss?: TwinStyle;
  inputCss?: TwinStyle;
}

export const TextSectionDropdownInput: React.FC<ITextSectionDropdownInput> = ({
  name,
  placeholder,
  className,
  options,
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
  const { value, label } = field.value;
  const selectedOption = options.find((o) => o.value === value);
  return (
    <div className={className} css={[tw`w-full`, containerCss]}>
      <Select
        css={[inputCss]}
        defaultValue={value === 0 ? {} : field.value}
        value={value === 0 ? null : field.value}
        onChange={(option: any) => {
          field.onChange(option);
        }}
        placeholder={!(value === 0) ? "" : placeholder}
        options={options}
        formatOptionLabel={(o: any) => (
          <div tw="flex items-center">
            <Txt tw="text-gray-700 flex-grow">{o.label}</Txt>
            {o.value === value && <CheckIcon tw="w-4 h-4 text-primary-600" />}
          </div>
        )}
      />
      {error && error.message && (
        <ErrorText tw="mt-2">{error.message}</ErrorText>
      )}
    </div>
  );
};
