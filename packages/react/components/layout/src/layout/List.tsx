import * as React from "react";
import { ListProps } from "./types";
import { OrderedList } from "./OrderedList";
import { UnorderedList } from "./UnorderedList";

const List = (props: ListProps, ref: React.Ref<HTMLOListElement>) => {
  const { variant = "unordered", ...rest } = props;

  if (variant === "ordered") {
    return <OrderedList ref={ref} {...rest} />;
  }

  return <UnorderedList ref={ref} {...rest} />;
};

const _List = React.forwardRef(List);

export { _List as List };
