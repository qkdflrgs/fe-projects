import {
  InfiniteData,
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryResult,
} from "@tanstack/react-query";
import {
  getPopularVideosList,
  GetPopularVideosListRequestParams,
  GetPopularVideosListResponse,
  getPopularVideosListUrl,
} from "@/src/features/main/api/getPopularVideosList";

type Params = Pick<GetPopularVideosListRequestParams, "maxResults"> & {
  initPageToken?: string;
};

export const useGetPopularVideosList = ({
  maxResults,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetPopularVideosListResponse>,
  Error
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videos", getPopularVideosListUrl, maxResults, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await getPopularVideosList({ maxResults, pageToken: pageParam });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
    getPreviousPageParam: (firstPage) => firstPage.prevPageToken,
  });
};
