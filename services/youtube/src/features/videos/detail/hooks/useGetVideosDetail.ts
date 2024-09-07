import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import {
  getVideosDetail,
  GetVideosDetailRequestParams,
  GetVideosDetailResponse,
} from "../../../../shared/api/youtube/client/videoDetail/getVideosDetail";

type Params = GetVideosDetailRequestParams;

export const useGetVideosDetail = (
  params: Params,
): UseSuspenseQueryResult<GetVideosDetailResponse> => {
  return useSuspenseQuery({
    queryKey: ["videoDetail", params.videoId],
    queryFn: async () => await getVideosDetail(params),
  });
};
