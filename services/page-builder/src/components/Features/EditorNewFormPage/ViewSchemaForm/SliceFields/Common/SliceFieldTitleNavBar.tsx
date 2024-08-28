import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@litae/react-components-button";
import { Box, Flex } from "@litae/react-components-layout";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  fieldIndex: number;
  appendRight?: ReactNode;
};

export const SliceFieldTitleNavBar = ({
  title,
  fieldIndex,
  appendRight,
}: Props) => {
  const { remove } = useViewSchemaFormSliceFieldArray();
  const { watch, setValue } = useViewSchemaFormContext();

  const hideSlice = watch(`slices.${fieldIndex}.hideSlice`);
  const handleHideToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setValue(`slices.${fieldIndex}.hideSlice`, !hideSlice);
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    remove(fieldIndex);
  };

  return (
    <Flex className="w-full" justify="space-between">
      <Box>{title}</Box>
      {appendRight ? (
        <Box>{appendRight}</Box>
      ) : (
        <Flex gap={6}>
          <Button
            size="xs"
            variant="outline"
            color={hideSlice ? "gray" : "blue"}
            onClick={handleHideToggle}
          >
            {hideSlice ? "미노출" : "노출"}
          </Button>
          <Button
            size="xs"
            variant="outline"
            color="red"
            onClick={handleRemove}
          >
            삭제
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
