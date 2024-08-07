import { clsx } from "clsx";
import { InputLeftAddonProps } from "./types";
import { inputLeftAddonStyle } from "./style.css";
import { vars } from "@litae/themes";

const InputLeftAddon = (props: InputLeftAddonProps) => {
  const { color = "gray", size = "md", children } = props;

  return (
    <div
      className={clsx([inputLeftAddonStyle({ size })])}
      style={{ color: vars.colors.$scale[color][900] }}
    >
      {children}
    </div>
  );
};

InputLeftAddon.displayName = "InputLeftAddon";

export { InputLeftAddon };
