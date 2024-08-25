import { putViewDetail } from "@/src/apis/worker/putViewDetail";
import { formatObjectToJson } from "@/src/components/Common/Editor";
import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { DesktopFirstLayout } from "@/src/components/Common/Layouts/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/Common/Layouts/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/Nav";
import { DesktopFirstSideNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/SideNav";
import { Spacing } from "@/src/components/Common/Spacing";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { previewStorage } from "@/src/utils/storage";
import { getValidateFormErrorMessage } from "@/src/utils/validation/error";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { ViewSchema } from "@/src/utils/validation/schema/view";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@litae/react-components-button";
import { Box, Flex } from "@litae/react-components-layout";
import { useToast } from "@litae/react-components-toast";
import { vars } from "@litae/themes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ShortUniqueId from "short-unique-id";

const EditorNewFormPage = () => {
  const { randomUUID } = new ShortUniqueId({ length: 10 });
  const [viewId] = useState(randomUUID());
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm<ViewSchemaProps>({
    defaultValues: ViewSliceSchemaSnippet.init,
    resolver: zodResolver(ViewSchema),
  });

  const handleReset = () => {
    reset();
  };
  const handlePreview = handleSubmit(
    (formData) => {
      previewStorage.set(viewId, formatObjectToJson(formData));

      window.open(`/preview/${viewId}`, "_blank");
    },
    (formError) => {
      const errors = getValidateFormErrorMessage(formError);
      const firstError = errors[0];

      if (firstError) {
        return toast({
          payload: {
            message: `[${firstError.key}] ${firstError.message}`,
          },
        });
      }
    },
  );

  const handlePublish = handleSubmit(
    async (formData) => {
      const convertedSlug = formData.slug.split(" ").join("-");
      const currentFormData = {
        ...formData,
        slug: `${convertedSlug}-${viewId}`,
      };

      try {
        await putViewDetail({
          viewId,
          data: {
            value: formatObjectToJson(currentFormData),
            metadata: {
              title: formData.slug,
              createAt: new Date().toISOString(),
            },
          },
        });

        window.open(`/view/${currentFormData.slug}`, "_blank");
      } catch (error) {
        toast({
          payload: {
            // @ts-ignore
            message: `[Fetch Error] ${error.message}`,
          },
        });
      }
    },
    (formError) => {
      const errors = getValidateFormErrorMessage(formError);
      const firstError = errors[0];

      if (firstError) {
        return toast({
          payload: {
            message: `[${firstError.key}] ${firstError.message}`,
          },
        });
      }
    },
  );

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
            <FormFieldSection title="common">
              <InputField isRequired label="slug" {...register("slug")} />
            </FormFieldSection>
            <Spacing />
            <FormFieldSection title="metadata">
              <InputField label="title" {...register("metadata.title")} />
              <InputField label="ogTitle" {...register("metadata.ogTitle")} />
              <InputField
                label="ogDescription"
                {...register("metadata.ogDescription")}
              />
            </FormFieldSection>
          </Box>
        </Flex>
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorNewFormPage;
