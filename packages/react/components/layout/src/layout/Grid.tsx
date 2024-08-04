import * as React from "react";
import { GridProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@litae/themes";

const Grid = (props: GridProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    background,
    autoColumns,
    autoFlow,
    autoRows,
    column,
    columnGap,
    gap,
    row,
    rowGap,
    templateAreas,
    templateColumns,
    templateRows,
    children,
  } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      style: {
        display: "grid",
        gridAutoColumns: autoColumns,
        gridAutoFlow: autoFlow,
        gridAutoRows: autoRows,
        gridColumnGap: columnGap,
        gridGap: gap,
        gridRowGap: rowGap,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridTemplateAreas: templateAreas,
        gridColumn: column,
        gridRow: row,
        color: color && vars.colors.$scale?.[color]?.[700],
        backgroundColor: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
    },
    children,
  );
};

const _Grid = React.forwardRef(Grid);

export { _Grid as Grid };
