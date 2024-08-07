import * as React from "react";
import { HeadingProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { headingStyle } from "./style.css";
import { vars } from "@litae/themes";

const Heading = (props: HeadingProps, ref: React.Ref<HTMLElement>) => {
  const { as = "h1", fontSize, color = "gray", background, children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        headingStyle({ fontSize }),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        backgroundColor: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Heading = React.forwardRef(Heading);

export { _Heading as Heading };
