import * as React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  spanStyle,
  spinnerStyle,
} from "./style.css";
import { vars } from "@litae/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    leftIcon,
    rightIcon,
    isLoading,
    isDisabled = false,
    children,
    onKeyDown,
    style,
  } = props;

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale[color][600]
      : vars.colors.$scale[color][50];
  const activeColor =
    variant === "solid"
      ? vars.colors.$scale[color][700]
      : vars.colors.$scale[color][100];

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(e);

    if (e.key === "Enter" || e.key === "13") {
      e.preventDefault();
      e.currentTarget.click();
    }
  };

  return (
    <button
      {...props}
      ref={ref}
      onKeyDown={handleKeyDown}
      role="button"
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      data-loading={isLoading}
      disabled={disabled}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}
    >
      {isLoading && <div className={spinnerStyle({ size })} />}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>
  );
};

const _Button = React.forwardRef(Button);

export { _Button as Button };
