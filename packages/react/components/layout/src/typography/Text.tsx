import * as React from "react";
import { TextProps } from "./types";
import { vars } from "@litae/themes";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { textStyle } from "./style.css";

const Text = (props: TextProps, ref: React.Ref<HTMLElement>) => {
  const { as = "p", color = "gray", background, children, fontSize } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        backgroundColor: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({ fontSize }),
        props.className,
      ]),
    },
    children,
  );
};

const _Text = React.forwardRef(Text);

export { _Text as Text };
