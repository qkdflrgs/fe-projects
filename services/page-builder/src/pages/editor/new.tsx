import { Button } from "@litae/react-components-button";
import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav";
import { JsonEditor } from "@/src/components/Editor/Json";
import { useState } from "react";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { formatObjectToJson } from "@/src/components/Editor";

const EditorNewPage = () => {
  const [schema, setSchema] = useState(
    formatObjectToJson(ViewSliceSchemaSnippet.init),
  );

  const handleReset = () => {
    setSchema(formatObjectToJson(ViewSliceSchemaSnippet.init));
  };

  return (
    <DesktopFirstLayout>
      <DesktopFirstNav gap={8}>
        <Button variant="outline" size="md" color="red" onClick={handleReset}>
          초기화
        </Button>
        <Button variant="outline" size="md" color="gray">
          미리보기
        </Button>
        <Button size="md" color="green">
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody>
        <JsonEditor
          value={schema}
          onChange={(value) => setSchema(value || "")}
        />
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorNewPage;
