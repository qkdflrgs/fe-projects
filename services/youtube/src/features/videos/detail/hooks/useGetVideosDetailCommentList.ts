import {
  InfiniteData,
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryResult,
} from "@tanstack/react-query";
import {
  getVideosDetailCommentList,
  GetVideosDetailCommentListRequestParams,
  GetVideosDetailCommentListResponse,
} from "../../../../shared/api/youtube/client/videoDetail/getVideosDetailCommentList";

type Params = Pick<GetVideosDetailCommentListRequestParams, "videoId"> & {
  initPageToken?: string;
};

export const useGetVideosDetailCommentList = ({
  videoId,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetVideosDetailCommentListResponse>,
  Error
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videoDetail", "commentList", videoId, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) =>
      await getVideosDetailCommentList({ videoId, pageToken: pageParam }),
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  });
};
