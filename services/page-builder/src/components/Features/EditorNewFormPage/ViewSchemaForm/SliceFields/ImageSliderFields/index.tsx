import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { SelectField } from "@/src/components/Common/Form/Field/SelectField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@litae/react-components-button";
import { Divider } from "@litae/react-components-layout";
import { vars } from "@litae/themes";
import { useEffect } from "react";
import { ImagesFields } from "./ImagesFields";

type Props = {
  fieldIndex: number;
};

export const ViewSchemaFormSliceImageSliderFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useViewSchemaFormContext();
  const { remove } = useViewSchemaFormSliceFieldArray();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "ImageSliderSlice");
  }, []);

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    remove(fieldIndex);
  };

  return (
    <FormFieldSection
      title={
        <>
          {fieldIndex}. ImageSliderSlice{""}
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
      <Divider />
      <ImagesFields fieldIndex={fieldIndex} />
      <InputField
        label="backgroundColor"
        type="color"
        defaultValue="transparent"
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
      <SelectField
        label="paddingX"
        {...register(`slices.${fieldIndex}.data.sliceStyle.paddingX`)}
      >
        {Object.keys(vars.box.spacing).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SelectField>
      <InputField
        label="imageItemWidth"
        type="number"
        defaultValue={280}
        {...register(`slices.${fieldIndex}.data.sliceStyle.imageItemWidth`)}
      />
      <InputField
        label="spaceBetween"
        type="number"
        defaultValue={16}
        {...register(`slices.${fieldIndex}.data.sliceStyle.spaceBetween`)}
      />
    </FormFieldSection>
  );
};
