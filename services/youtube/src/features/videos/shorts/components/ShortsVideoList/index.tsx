"use client";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/virtual";

import { flattenInfinityListData } from "@/src/shared/utils/data";

import { useGetShortsVideosList } from "../../hooks/useGetShortsVideosList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Virtual } from "swiper/modules";
import { Suspense } from "react";
import { ShortsVideoDetail } from "../ShortsVideoDetail";
import { VideoDetailPageParams } from "../../../detail/types";

type Props = VideoDetailPageParams["params"];

export const ShortsVideoList = ({ videoId }: Props) => {
  const { data, hasNextPage, fetchNextPage } = useGetShortsVideosList({});
  const flatData = flattenInfinityListData(data);

  const list = [{ videoId }, ...flatData];

  return (
    <div>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        modules={[Mousewheel, Virtual]}
        autoHeight={true}
        mousewheel
        virtual={{
          enabled: true,
          slides: list,
          addSlidesAfter: 2,
          addSlidesBefore: 2,
        }}
        style={{
          width: "100%",
          height: "830px",
        }}
        onReachEnd={() => {
          if (hasNextPage) fetchNextPage();
        }}
      >
        {list.map((item, index) => (
          <SwiperSlide key={item.videoId} virtualIndex={index}>
            {({ isActive }: { isActive: boolean }) => (
              <div>
                <Suspense>
                  <ShortsVideoDetail
                    videoId={item.videoId}
                    autoPlay={isActive}
                  />
                </Suspense>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
