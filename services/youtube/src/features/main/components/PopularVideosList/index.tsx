"use client";
import { flattenInfinityListData } from "@/src/shared/utils/data";
import { PopularVideosListItem } from "./ListItem";
import * as s from "./style.css";
import { useGetPopularVideosList } from "@/src/features/main/hooks/useGetPopularVideosList";
import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";

export const PopularVideosList = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetPopularVideosList({});

  const flatData = flattenInfinityListData(data);

  return (
    <>
      <section className={s.wrapper}>
        {flatData.map((item) => (
          <PopularVideosListItem key={item.videoId} video={item} />
        ))}
      </section>

      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </>
  );
};
