import { SpacingSliceSchema } from "@/src/utils/validation/schema/slices";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { Box } from "@litae/react-components-layout";
import { vars } from "@litae/themes";

type Props = SliceSchemaProps<typeof SpacingSliceSchema>;

export const SpacingSlice = ({ sliceStyle }: Props) => {
  const {
    height = 16,
    backgroundColor = vars.colors.$static.light.color.white,
  } = sliceStyle ?? {};

  return <Box style={{ width: "100%", height, backgroundColor }} />;
};
