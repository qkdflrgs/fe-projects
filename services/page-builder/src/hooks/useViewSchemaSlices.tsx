import { useMemo } from "react";
import { MetaDataSlice } from "../components/Features/view/slices/MetaData";
import { TextSlice } from "../components/Features/view/slices/Text";
import { ImageSlice } from "../components/Features/view/slices/Image";
import { SpacingSlice } from "../components/Features/view/slices/Spacing";
import { ImageSliderSectionSlice } from "../components/Features/view/slices/ImageSliderSection";
import { AccordionSlice } from "../components/Features/view/slices/Accordion";
import { ViewSchemaProps } from "../utils/validation/schema/types";
import { ImageSliderSlice } from "../components/Features/view/slices/ImageSlider";

export const useViewSchemaSlices = (viewSchema: ViewSchemaProps) => {
  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    if (viewSchema.metadata) {
      sliceList.push(<MetaDataSlice {...viewSchema.metadata} />);
    }

    viewSchema.slices.forEach(({ sliceName, hideSlice, data }) => {
      if (hideSlice) return;

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
        case "ImageSliderSlice": {
          sliceList.push(<ImageSliderSlice {...data} />);
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
