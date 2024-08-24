import { ValidateViewSchemaProps } from "@/src/hooks/useViewSchemaValidation";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { Button } from "@litae/react-components-button";
import { formatObjectToJson } from "../../../Common/Editor";
import { useToast } from "@litae/react-components-toast";
import { Divider } from "@litae/react-components-layout";
import { Fragment } from "react";

type Props = {
  schema: string;
  setSchema: (schema: string) => void;
  validateViewSchema: (props: ValidateViewSchemaProps) => void;
};

type Preset = {
  name: string;
  snippet: object;
};

export const JsonPresetList = ({
  schema,
  setSchema,
  validateViewSchema,
}: Props) => {
  const { toast } = useToast();

  const presets: Preset[] = [
    {
      name: "TextSlice",
      snippet: ViewSliceSchemaSnippet.textSlice,
    },
    {
      name: "ImageSlice",
      snippet: ViewSliceSchemaSnippet.imageSlice,
    },
    {
      name: "ImageSliderSectionSlice",
      snippet: ViewSliceSchemaSnippet.imageSliderSectionSlice,
    },
    {
      name: "SpacingSlice",
      snippet: ViewSliceSchemaSnippet.spacingSlice,
    },
    {
      name: "accordionSlice",
      snippet: ViewSliceSchemaSnippet.accordionSlice,
    },
  ];

  return (
    <>
      {presets.map(({ name, snippet }) => {
        const handleClick = () => {
          validateViewSchema({
            viewSchema: schema,
            onSuccess: () => {
              const objectifiedSchema = JSON.parse(schema);
              objectifiedSchema.slices.push(snippet);

              setSchema(formatObjectToJson(objectifiedSchema));
            },
            onError: ({ message }) => {
              toast({
                payload: {
                  message,
                },
              });
            },
          });
        };

        return (
          <Fragment key={name}>
            <Button
              style={{ borderRadius: "0", width: "100%" }}
              variant="ghost"
              onClick={handleClick}
            >
              {name}
            </Button>
            <Divider />
          </Fragment>
        );
      })}
    </>
  );
};
