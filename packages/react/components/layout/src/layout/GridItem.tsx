import * as React from "react";
import { GridItemProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@litae/themes";

const GridItem = (props: GridItemProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    background,
    area,
    colEnd,
    colStart,
    colSpan,
    rowEnd,
    rowStart,
    rowSpan,
    children,
  } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      style: {
        gridArea: area,
        gridColumnEnd: colEnd,
        gridColumnStart: colStart,
        gridColumn: colSpan,
        gridRowEnd: rowEnd,
        gridRowStart: rowStart,
        gridRow: rowSpan,
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

const _GridItem = React.forwardRef(GridItem);

export { _GridItem as GridItem };
