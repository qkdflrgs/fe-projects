import "swiper/css";
import { Box } from "@litae/react-components-layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { vars } from "@litae/themes";
import { convertSpacingRemToPx } from "@/src/utils/size";

export type Image = {
  imageUrl: string;
  alt: string;
};
type Props = {
  images: Image[];
  sliceStyle?: {
    imageItemWidth?: number;
    backgroundColor?: string;
    spaceBetween?: number;
    paddingX?: keyof typeof vars.box.spacing;
  };
};

export const ImageSliderSlice = ({ images, sliceStyle }: Props) => {
  const {
    backgroundColor = "transparent",
    imageItemWidth = 280,
    spaceBetween = 16,
    paddingX = 8,
  } = sliceStyle ?? {};

  const offset = convertSpacingRemToPx(paddingX);

  return (
    <Box style={{ backgroundColor }}>
      <Swiper
        slidesPerView={"auto"}
        slidesOffsetBefore={offset}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map(({ imageUrl, alt }, index) => (
          <SwiperSlide
            key={`${imageUrl}-${index}`}
            style={{
              width: imageItemWidth,
            }}
          >
            <img
              src={imageUrl}
              alt={alt}
              style={{
                width: imageItemWidth,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
