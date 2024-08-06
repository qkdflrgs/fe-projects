import { UseInputProps, UseInputResult } from "./types";

export const useInput = (props: UseInputProps): UseInputResult => {
  const {
    isDisabled = false,
    isInvalid = false,
    isReadOnly = false,
    isRequired = false,
    ...rest
  } = props;

  return {
    inputProps: {
      ...rest,
      disabled: isDisabled,
      readOnly: isReadOnly,
      "data-disabled": isDisabled,
      "data-invalid": isInvalid,
      "aria-invalid": isInvalid,
      "aria-required": isRequired,
    },
  };
};
