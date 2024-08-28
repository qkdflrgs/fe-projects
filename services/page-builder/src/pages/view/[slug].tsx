import { MobileFirstLayout } from "@/src/components/Common/Layouts/MobileFirstLayout";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useViewSchemaSlices } from "@/src/hooks/useViewSchemaSlices";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { getViewDetail } from "@/src/apis/worker/getViewDetail";

const ViewPage = ({
  jsonSchema,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const slices = useViewSchemaSlices(jsonSchema);

  return <MobileFirstLayout>{slices}</MobileFirstLayout>;
};

export default ViewPage;

export const getStaticProps: GetStaticProps<{
  jsonSchema: ViewSchemaProps;
}> = async (context) => {
  const slug = (context.params?.slug as string) ?? "";

  const sliceSlug = slug.split("-");
  const viewId = sliceSlug[sliceSlug.length - 1];

  try {
    const { value, metadata } = await getViewDetail({ viewId });

    if (metadata.isDraft) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        jsonSchema: value,
      },
      revalidate: 10,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
