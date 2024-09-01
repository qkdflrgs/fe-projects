import { VideoThumbnail } from "@/src/shared/api/youtube/types/item";
import { ListPageApiInfo } from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";

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
