import { useMemo } from "react";
import {
  MetaDataSlice,
  MetaDataSliceProps,
} from "../components/view/slices/MetaData";
import { TextSlice } from "../components/view/slices/Text";
import { ImageSlice } from "../components/view/slices/Image";
import { SpacingSlice } from "../components/view/slices/Spacing";
import { ImageSliderSectionSlice } from "../components/view/slices/ImageSliderSection";
import { AccordionSlice } from "../components/view/slices/Accordion";

export type ViewSchema = {
  slug: string;
  metadata?: MetaDataSliceProps;
  slices: {
    sliceName:
      | "TextSlice"
      | "ImageSlice"
      | "SpacingSlice"
      | "ImageSliderSectionSlice"
      | "AccordionSlice";
    data: any;
  }[];
};

export const useViewSchemaSlices = (viewSchema: ViewSchema) => {
  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    if (viewSchema.metadata) {
      sliceList.push(<MetaDataSlice {...viewSchema.metadata} />);
    }

    viewSchema.slices.forEach(({ sliceName, data }) => {
      switch (sliceName) {
        case "TextSlice": {
          sliceList.push(<TextSlice {...data} />);
          break;
        }
        case "ImageSlice": {
          sliceList.push(<ImageSlice {...data} />);
          break;
        }
        case "SpacingSlice": {
          sliceList.push(<SpacingSlice {...data} />);
          break;
        }
        case "ImageSliderSectionSlice": {
          sliceList.push(<ImageSliderSectionSlice {...data} />);
          break;
        }
        case "AccordionSlice": {
          sliceList.push(<AccordionSlice {...data} />);
          break;
        }
      }
    });

    return sliceList;
  }, [viewSchema]);

  return slices;
};
