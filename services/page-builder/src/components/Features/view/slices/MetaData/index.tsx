import { MetadataSliceSchema } from "@/src/utils/validation/schema/slices";
import { SchemaProps } from "@/src/utils/validation/schema/types";
import Head from "next/head";

type Props = SchemaProps<typeof MetadataSliceSchema>;

export const MetaDataSlice = ({ title, ogTitle, ogDescription }: Props) => {
  const currentOgTitle = ogTitle ?? title;

  return (
    <Head>
      {title && <title>{title}</title>}
      {currentOgTitle && <meta property="og:title" content={currentOgTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
    </Head>
  );
};
