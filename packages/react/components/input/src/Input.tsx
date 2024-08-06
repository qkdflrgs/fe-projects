import * as React from "react";
import { InputProps } from "./types";
import { useInput } from "@litae/react-hooks-input";
import { clsx } from "clsx";
import { colorVariant, inputStyle } from "./style.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@litae/themes";

const Input = (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    color = "gray",
    size = "md",
    variant = "outline",
    errorBorderColor = "#E53E3E",
    focusBorderColor = "#3182CE",
    className,
    style,
    ...rest
  } = props;

  const { inputProps } = useInput(rest);

  return (
    <input
      {...inputProps}
      ref={ref}
      className={clsx([
        inputStyle({
          size,
          variant,
        }),
        className,
      ])}
      style={{
        ...assignInlineVars({
          [colorVariant]: vars.colors.$scale[color][900],
          [errorBorderColor]: errorBorderColor,
          [focusBorderColor]: focusBorderColor,
        }),
        ...style,
      }}
    />
  );
};

const _Input = React.forwardRef(Input);

export { _Input as Input };
