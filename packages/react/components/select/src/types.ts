import { vars } from "@litae/themes";
import { UseSelectProps } from "@litae/react-hooks-select";

type Size = "xs" | "sm" | "md" | "lg";
type Color = keyof typeof vars.colors.$scale;

export type SelectProps = UseSelectProps & {
  color?: Color;
  size?: Size;
  variant?: "outline" | "filled";
  errorBorderColor?: string;
  focusBorderColor?: string;
};
