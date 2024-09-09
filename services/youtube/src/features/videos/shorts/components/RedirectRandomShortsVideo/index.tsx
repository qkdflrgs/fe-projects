"use client";

import { flattenInfinityListData } from "@/src/shared/utils/data";
import { useGetShortsVideosList } from "../../hooks/useGetShortsVideosList";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const RedirectRandomShortsVideo = () => {
  const router = useRouter();
  const { data } = useGetShortsVideosList({});
  const flatData = flattenInfinityListData(data);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * flatData.length);
    const randomVideoId = flatData[randomNumber].videoId;

    router.replace(`/videos/shorts/${randomVideoId}?videoType=short`);
  });

  return <></>;
};
