import * as React from "react";
import { ListItemProps } from "./types";
import { Text } from "../typography";

const ListItem = (props: ListItemProps, ref: React.Ref<HTMLLIElement>) => {
  return <Text as="li" ref={ref} {...props} />;
};

const _ListItem = React.forwardRef(ListItem);

export { _ListItem as ListItem };
