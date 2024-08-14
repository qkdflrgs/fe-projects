import { ImageSliceSchema } from "@/src/utils/validation/schema/slices";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { Box } from "@litae/react-components-layout";

type Props = SliceSchemaProps<typeof ImageSliceSchema>;

export const ImageSlice = ({ imageUrl, alt, sliceStyle }: Props) => {
  const {
    width = "100%",
    padding = 0,
    paddingX = 0,
    paddingY = 0,
    backgroundColor = "transparent",
  } = sliceStyle ?? {};

  return (
    <Box
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      style={{
        width: "100%",
        backgroundColor,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={imageUrl} alt={alt} style={{ width }} />
    </Box>
  );
};
