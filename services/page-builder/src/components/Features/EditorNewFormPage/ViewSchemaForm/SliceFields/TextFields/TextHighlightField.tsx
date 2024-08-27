import { FormFieldWrapper } from "@/src/components/Common/Form/Layouts/FormFieldWrapper";
import { Spacing } from "@/src/components/Common/Spacing";
import {
  useViewSchemaFormContext,
  useViewSchemaFormFieldArray,
} from "@/src/hooks/useViewSchemaForm";
import { Button } from "@litae/react-components-button";
import { Input } from "@litae/react-components-input";
import { Box, Flex } from "@litae/react-components-layout";

type Props = {
  label: string;
  register: ReturnType<typeof useViewSchemaFormContext>["register"];
  fieldIndex: number;
};

export const ViewSchemaFormSliceTextHighlightFields = ({
  label,
  register,
  fieldIndex,
}: Props) => {
  const { fields, append } = useViewSchemaFormFieldArray(
    // @ts-ignore
    `slices.${fieldIndex}.data.highlightTexts`,
  );

  const handleAdd = () => {
    // @ts-ignore
    append("");
  };

  return (
    <FormFieldWrapper label={label}>
      <Flex className="w-full" direction="column" gap={4}>
        <Box>
          <Button size="xs" variant="outline" onClick={handleAdd}>
            추가하기
          </Button>
          <Spacing height={8} />
          {fields.map((field, index) => (
            <Input
              key={field.id}
              variant="filled"
              {...register(`slices.${fieldIndex}.data.highlightTexts.${index}`)}
            />
          ))}
        </Box>
      </Flex>
    </FormFieldWrapper>
  );
};
