import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { DesktopFirstLayout } from "@/src/components/Common/Layouts/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/Common/Layouts/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/Nav";
import { DesktopFirstSideNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/SideNav";
import { Button } from "@litae/react-components-button";
import { Box, Flex } from "@litae/react-components-layout";
import { vars } from "@litae/themes";

const EditorNewFormPage = () => {
  const handleReset = () => {};
  const handlePreview = () => {};
  const handlePublish = () => {};

  return (
    <DesktopFirstLayout>
      <DesktopFirstNav gap={8}>
        <Button variant="outline" size="md" color="red" onClick={handleReset}>
          초기화
        </Button>
        <Button
          variant="outline"
          size="md"
          color="gray"
          onClick={handlePreview}
        >
          미리보기
        </Button>
        <Button size="md" color="green" onClick={handlePublish}>
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody padding={0}>
        <DesktopFirstSideNav>사이드 네비게이션 바</DesktopFirstSideNav>
        <Flex
          className="w-full min-h-screen relative top-0 pt-[16px]"
          background="gray"
          justify="center"
        >
          <Box
            paddingX={8}
            paddingY={6}
            className="max-w-[600px] w-full"
            boxShadow="base"
            style={{ backgroundColor: vars.colors.$static.light.color.white }}
          >
            <FormFieldSection title="test">
              <InputField isRequired label="test" />
            </FormFieldSection>
          </Box>
        </Flex>
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorNewFormPage;
