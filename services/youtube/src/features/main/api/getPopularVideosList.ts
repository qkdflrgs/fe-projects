import { API_BASE_URL } from "@/src/shared/api/constants";
import { VideoThumbnail } from "@/src/shared/api/youtube/types/item";
import { ListPageApiInfo } from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetPopularVideosListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type PopularListItem = {
  videoId: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  thumbnail: VideoThumbnail;
  publishedAt: string;
  publishedAtDisplayText: string; // ex) 5시간 전
  viewCount: number;
  viewCountDisplayText: string; // ex) 2.1만
};

export type GetPopularVideosListResponse = {
  lists: PopularListItem[];
} & ListPageApiInfo;

export const getPopularVideosListPath = "/api/videos/popular-list";

export const getPopularVideosList = async (
  params: GetPopularVideosListRequestParams,
): Promise<GetPopularVideosListResponse> => {
  const queryParams = queryString.stringify(params);

  const url = `${API_BASE_URL}${getPopularVideosListPath}?${queryParams}`;

  const response = await fetch(url);

  return await response.json();
};
