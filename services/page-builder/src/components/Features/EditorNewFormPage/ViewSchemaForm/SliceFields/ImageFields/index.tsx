import { ImageURLField } from "@/src/components/Common/Form/Field/ImageURLField";
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

export const ViewSchemaFormSliceImageFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useViewSchemaFormContext();
  const { remove } = useViewSchemaFormSliceFieldArray();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "ImageSlice");
  }, []);

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    remove(fieldIndex);
  };

  const handleImageURLChange = (value: string) => {
    setValue(`slices.${fieldIndex}.data.imageUrl`, value);
  };

  return (
    <FormFieldSection
      title={
        <>
          {fieldIndex}. Image{""}
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
      <ImageURLField
        label="ImageURL"
        onChange={handleImageURLChange}
        isRequired
      />
      <InputField
        label="alt"
        isRequired
        {...register(`slices.${fieldIndex}.data.alt`)}
      />
      <Divider />

      <InputField
        label="width"
        {...register(`slices.${fieldIndex}.data.sliceStyle.width`)}
      />
      <InputField
        label="backgroundColor"
        type="color"
        defaultValue={vars.colors.$static.light.gray[50]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
      <SelectField
        label="padding"
        {...register(`slices.${fieldIndex}.data.sliceStyle.padding`)}
      >
        {Object.keys(vars.box.spacing).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SelectField>
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
      <SelectField
        label="paddingY"
        {...register(`slices.${fieldIndex}.data.sliceStyle.paddingY`)}
      >
        {Object.keys(vars.box.spacing).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SelectField>
    </FormFieldSection>
  );
};