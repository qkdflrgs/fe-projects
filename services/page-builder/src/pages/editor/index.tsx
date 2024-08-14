import { Button } from "@litae/react-components-button";
import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav";
import Link from "next/link";

const EditorPage = () => {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav>
        <Link href="/editor/new">
          <Button size="md" color="green">
            페이지 만들기
          </Button>
        </Link>
      </DesktopFirstNav>
      <DesktopFirstBody>Editor</DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorPage;
