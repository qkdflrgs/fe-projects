import { ComponentPropsWithoutRef } from "react";

export type UseSelectProps = {
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
} & Omit<ComponentPropsWithoutRef<"select">, "disabled">;

export type UseSelectResult = {
  selectProps: ComponentPropsWithoutRef<"select"> & {
    "data-disabled": boolean;
    "data-invalid": boolean;
    "aria-invalid": boolean;
    "aria-required": boolean;
  };
};
