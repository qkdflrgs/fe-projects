import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { SelectField } from "@/src/components/Common/Form/Field/SelectField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@litae/react-components-button";
import { Divider } from "@litae/react-components-layout";
import { vars } from "@litae/themes";
import { useEffect } from "react";

type Props = {
  fieldIndex: number;
};

export const ViewSchemaFormSliceTextFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useViewSchemaFormContext();
  const { remove } = useViewSchemaFormSliceFieldArray();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "TextSlice");
  }, []);

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    remove(fieldIndex);
  };

  return (
    <FormFieldSection
      title={
        <>
          {fieldIndex}. Text{""}
          <Button
            size="xs"
            variant="outline"
            color="red"
            onClick={handleRemove}
          >
            삭제
          </Button>
        </>
      }
    >
      <InputField
        label="text"
        {...register(`slices.${fieldIndex}.data.text`)}
      />
      <Divider />
      <InputField
        label="textColor"
        type="color"
        defaultValue={vars.colors.$static.light.color.black}
        {...register(`slices.${fieldIndex}.data.sliceStyle.textColor`)}
      />
      <InputField
        label="textSize"
        type="number"
        defaultValue={16}
        {...register(`slices.${fieldIndex}.data.sliceStyle.textSize`)}
      />
      <InputField
        label="textWeight"
        type="number"
        defaultValue={500}
        {...register(`slices.${fieldIndex}.data.sliceStyle.textWeight`)}
      />
      <SelectField
        label="textAlign"
        defaultValue="center"
        {...register(`slices.${fieldIndex}.data.sliceStyle.textAlign`)}
      >
        <option value="left">left</option>
        <option value="center">center</option>
        <option value="right">right</option>
      </SelectField>
      <InputField
        label="backgroundColor"
        type="color"
        defaultValue={vars.colors.$static.light.gray[50]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
    </FormFieldSection>
  );
};
