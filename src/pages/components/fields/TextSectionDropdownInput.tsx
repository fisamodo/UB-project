import "twin.macro";

import { CheckIcon } from "@heroicons/react/solid";
import Select from "react-select";
import { useController, useFormContext } from "react-hook-form";

import { ErrorText } from "../ErrorText";
import React from "react";
import { Txt } from "../Txt";
import { IDropdownOption } from "../../../types";

/** @jsxImportSource @emotion/react */

interface ITextSectionDropdownInput<T> {
  name: string;
  options: IDropdownOption[];
  placeholder?: string;
  className?: string;
  styles?: any;
}

export const TextSectionDropdownInput = <T extends Object>(
  props: ITextSectionDropdownInput<T>
) => {
  const { name, placeholder, className } = props;
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const { options } = props;
  const selectedOption = options.find((o) => o.value === field.value);
  return (
    <div className={className} tw="w-full">
      <Select
        defaultValue={Object.keys(field.value).length === 0 ? {} : field.value}
        value={Object.keys(field.value).length === 0 ? null : field.value}
        onChange={(option: any) => {
          field.onChange(option);
        }}
        placeholder={selectedOption ? "" : placeholder}
        options={options}
        formatOptionLabel={(o: any) => (
          <div tw="flex items-center">
            <Txt tw="text-gray-700 flex-grow">{o.label}</Txt>
            {o.value === field.value && (
              <CheckIcon tw="w-4 h-4 text-primary-600" />
            )}
          </div>
        )}
      />
      {error && error.message && (
        <ErrorText tw="mt-2">{error.message}</ErrorText>
      )}
    </div>
  );
};
