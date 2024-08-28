import { putViewDetail } from "@/src/apis/worker/putViewDetail";
import { formatObjectToJson } from "@/src/components/Common/Editor";
import { DesktopFirstNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/Nav";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { previewStorage } from "@/src/utils/storage";
import { getValidateFormErrorMessage } from "@/src/utils/validation/error";
import { Button } from "@litae/react-components-button";
import { useToast } from "@litae/react-components-toast";

type Props = {
  viewId: string;
};

export const EditorNewFormGlobalNavBar = ({ viewId }: Props) => {
  const { reset, handleSubmit } = useViewSchemaFormContext();
  const { toast } = useToast();

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
      previewStorage.set(viewId, formatObjectToJson(formData));

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
              isDraft: false,
              updatedAt: new Date().toISOString(),
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
    <DesktopFirstNav gap={8}>
      <Button variant="outline" size="md" color="red" onClick={handleReset}>
        초기화
      </Button>
      <Button variant="outline" size="md" color="gray" onClick={handlePreview}>
        미리보기
      </Button>
      <Button size="md" color="green" onClick={handlePublish}>
        배포하기
      </Button>
    </DesktopFirstNav>
  );
};
