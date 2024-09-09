"use client";

import * as s from "./style.css";
import { VideoDetailPageParams } from "../../../features/videos/detail/types";
import { useGetVideosDetailCommentList } from "../../../features/videos/detail/hooks/useGetVideosDetailCommentList";
import { flattenInfinityListData } from "@/src/shared/utils/data";
import { VideoDetailCommentListItem } from "./ListItem";
import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";
import { useGetVideosDetail } from "@/src/features/videos/detail/hooks/useGetVideosDetail";

type Props = VideoDetailPageParams["params"];

export const VideoDetailCommentList = ({ videoId }: Props) => {
  const {
    data: { detail: videoData },
  } = useGetVideosDetail({ videoId });

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetVideosDetailCommentList({ videoId });
  const flatData = flattenInfinityListData(data);

  return (
    <>
      <section className={s.wrapper}>
        <h4 className={s.title}>댓글 {videoData.commentCountDisplayText}개</h4>
        <div className={s.listWrapper}>
          {flatData.map((item) => (
            <VideoDetailCommentListItem key={item.commentId} comment={item} />
          ))}
        </div>
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
