import { vars } from "@litae/themes";
import { UseInputProps } from "@litae/react-hooks-input";

type Size = "xs" | "sm" | "md" | "lg";
type Color = keyof typeof vars.colors.$scale;

export type InputProps = UseInputProps & {
  color?: Color;
  size?: Size;
  variant?: "outline" | "filled";
  errorBorderColor?: string;
  focusBorderColor?: string;
};
