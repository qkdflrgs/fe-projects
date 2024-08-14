import { Button } from "@litae/react-components-button";
import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav";

const EditorNewPage = () => {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav gap={8}>
        <Button variant="outline" size="md" color="red">
          초기화
        </Button>
        <Button variant="outline" size="md" color="gray">
          미리보기
        </Button>
        <Button size="md" color="green">
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody>/editor/new</DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorNewPage;
