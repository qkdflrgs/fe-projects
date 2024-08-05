import * as React from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@litae/themes";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", color, background, children } = props;

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
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
    },
    children,
  );
};

const _Box = React.forwardRef(Box);

export { _Box as Box };
