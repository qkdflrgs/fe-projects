import * as React from "react";
import { SelectProps } from "./types";
import { useSelect } from "@litae/react-hooks-select";
import { clsx } from "clsx";
import {
  colorVariant,
  errorBorderColorVariant,
  focusBorderColorVariant,
  selectStyle,
} from "./style.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@litae/themes";

const Select = (props: SelectProps, ref: React.Ref<HTMLSelectElement>) => {
  const {
    color = "gray",
    size = "md",
    variant = "outline",
    errorBorderColor,
    focusBorderColor,
    className,
    style,
    ...rest
  } = props;

  const { selectProps } = useSelect(rest);

  return (
    <select
      {...selectProps}
      ref={ref}
      className={clsx([
        selectStyle({
          size,
          variant,
        }),
        className,
      ])}
      style={{
        ...assignInlineVars({
          [colorVariant]: vars.colors.$scale[color][900],
          [errorBorderColorVariant]: errorBorderColor,
          [focusBorderColorVariant]: focusBorderColor,
        }),
        ...style,
      }}
    />
  );
};

const _Select = React.forwardRef(Select);

export { _Select as Select };
