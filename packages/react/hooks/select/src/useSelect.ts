import { UseSelectProps, UseSelectResult } from "./types";

export const useSelect = (props: UseSelectProps): UseSelectResult => {
  const {
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    ...rest
  } = props;

  return {
    selectProps: {
      ...rest,
      disabled: isDisabled,
      "data-disabled": isDisabled,
      "data-invalid": isInvalid,
      "aria-invalid": isInvalid,
      "aria-required": isRequired,
    },
  };
};
