export const ViewSliceSchemaSnippet = {
  init: {
    slug: "",
    metadata: {
      title: "",
    },
    slices: [],
  },

  textSlice: {
    sliceName: "TextSlice",
    data: {
      text: "내용을 입력해주세요",
      sliceStyle: {
        textColor: "#fff",
        textWeight: 700,
        textSize: 16,
        backgroundColor: "#000",
      },
    },
  },

  imageSlice: {
    sliceName: "ImageSlice",
    data: {
      imageUrl: "이미지 URL을 입력해주세요",
      alt: "이미지 설명을 입력해주세요",
      sliceStyle: {
        paddingX: 8,
        backgroundColor: "#FFD951",
      },
    },
  },

  spacingSlice: {
    sliceName: "SpacingSlice",
    data: {
      sliceStyle: {
        height: 60,
        backgroundColor: "#000",
      },
    },
  },

  imageSliderSectionSlice: {
    sliceName: "ImageSliderSectionSlice",
    data: {
      text: "내용을 입력해주세요",
      images: [
        {
          imageUrl: "이미지 URL을 입력해주세요",
          alt: "이미지 설명을 입력해주세요",
        },
      ],
      sliceStyle: {
        textColor: "#32BFA1",
        paddingX: 8,
        backgroundColor: "#171923",
      },
    },
  },

  accordionSlice: {
    sliceName: "AccordionSlice",
    data: {
      accordionContents: [
        {
          key: "키값을 입력해주세요",
          title: "제목을 입력해주세요",
          content: "내용을 입력해주세요",
        },
      ],
      openedAccordion: true,
      sliceStyle: {
        titleTextColor: "#171923",
        titleTextWeight: 600,
        titleTextSize: 16,
        contentTextColor: "#2D3748",
        contentTextSize: 14,
        paddingX: 2,
        backgroundColor: "#E2E8F0",
      },
    },
  },
};
