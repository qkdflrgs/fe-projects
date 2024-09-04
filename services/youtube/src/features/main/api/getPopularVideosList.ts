import { API_BASE_URL } from "@/src/shared/api/constants";
import {
  ListResponse,
  VideoListItem,
} from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetPopularVideosListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type PopularListItem = {
  viewCount: number;
  viewCountDisplayText: string; // ex) 2.1만
} & VideoListItem;

export type GetPopularVideosListResponse = ListResponse<PopularListItem>;

export const getPopularVideosListUrl = `${API_BASE_URL}/api/videos/popular-list`;

export const getPopularVideosList = async (
  params: GetPopularVideosListRequestParams,
): Promise<GetPopularVideosListResponse> => {
  const queryParams = queryString.stringify(params);

  const url = `${getPopularVideosListUrl}?${queryParams}`;

  const response = await fetch(url);

  return await response.json();
};
