import { Spacing } from "@/src/components/Common/Spacing";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Heading } from "@litae/react-components-layout";
import { vars } from "@litae/themes";
import { ViewSchemaFormSliceSpacingField } from "./SpacingFields";

export const ViewSchemaFormSliceFields = () => {
  const { fields } = useViewSchemaFormSliceFieldArray();

  return (
    <>
      <Heading
        fontSize="lg"
        style={{ fontWeight: vars.typography.fontWeight[600] }}
      >
        Slices
      </Heading>
      <Spacing />
      {fields.map((field, index) => {
        switch (field.sliceName) {
          case "SpacingSlice": {
            return <ViewSchemaFormSliceSpacingField fieldIndex={index} />;
          }
          default:
            <></>;
        }
      })}
    </>
  );
};
