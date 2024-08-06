import * as React from "react";
import { UnorderedListProps } from "./types";
import { vars } from "@litae/themes";
import { Flex } from "./Flex";

const UnorderedList = (
  props: UnorderedListProps,
  ref: React.Ref<HTMLUListElement>,
) => {
  const { spacing = 3, listStyleType = "disc", children, ...rest } = props;

  return (
    <Flex
      as="ul"
      ref={ref}
      direction="column"
      style={{
        gap: vars.box.spacing[spacing],
        listStyleType: listStyleType as string,
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};

const _UnorderedList = React.forwardRef(UnorderedList);

export { _UnorderedList as UnorderedList };
