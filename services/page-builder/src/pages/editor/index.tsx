import { Button } from "@litae/react-components-button";
import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav";
import Link from "next/link";
import {
  getViewList,
  ViewListResponseData,
} from "@/src/apis/worker/getViewList";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ViewList } from "@/src/components/EditorPage/ViewList";

const EditorPage = ({
  keys,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav>
        <Link href="/editor/new">
          <Button size="md" color="green">
            페이지 만들기
          </Button>
        </Link>
      </DesktopFirstNav>
      <DesktopFirstBody justify="center" background="gray">
        <ViewList viewList={keys} />
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorPage;

export const getServerSideProps: GetServerSideProps<
  ViewListResponseData
> = async () => {
  const response = await getViewList();

  return { props: response };
};
