import * as React from "react";
import { OrderListProps } from "./types";
import { Flex } from "./Flex";
import { vars } from "@litae/themes";

const OrderedList = (
  props: OrderListProps,
  ref: React.Ref<HTMLOListElement>,
) => {
  const { spacing = 3, children, ...rest } = props;

  return (
    <Flex
      as="ol"
      ref={ref}
      direction="column"
      style={{
        gap: vars.box.spacing[spacing],
        listStyleType: "decimal",
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};

const _OrderedList = React.forwardRef(OrderedList);

export { _OrderedList as OrderedList };
