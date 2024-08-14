import { MobileFirstLayout } from "@/src/components/layout/MobileFirstLayout";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { CDN_BASE_URL } from "@/src/constants";
import {
  useViewSchemaSlices,
  ViewSchema,
} from "@/src/hooks/useViewSchemaSlices";

const ViewPage = ({
  jsonSchema,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const slices = useViewSchemaSlices(jsonSchema);

  return <MobileFirstLayout>{slices}</MobileFirstLayout>;
};

export default ViewPage;

export const getStaticProps: GetStaticProps<{
  jsonSchema: ViewSchema;
}> = async (context) => {
  const slug = (context.params?.slug as string) ?? "";

  const sliceSlug = slug.split("-");
  const viewId = sliceSlug[sliceSlug.length - 1];

  const response = await fetch(`${CDN_BASE_URL}/view/${viewId}.json`);

  if (response.status === 200) {
    const jsonData = await response.json();

    return {
      props: {
        jsonSchema: jsonData,
      },
      revalidate: 10,
    };
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
