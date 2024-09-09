import { getMockPopularVideosList } from "@/src/features/main/api/getPopularVideosList.mock";
import { getMockSearchVideosList } from "@/src/features/search/api/getSearchVideosList.mock";
import { getMockShortsVideosList } from "@/src/features/videos/shorts/api/getShortsVideosList.mock";
import { getMockVideosDetail } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetail.mock";
import { getMockVideosDetailCommentList } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetailCommentList.mock";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [
  getMockPopularVideosList,
  getMockSearchVideosList,
  getMockVideosDetail,
  getMockVideosDetailCommentList,
  getMockShortsVideosList,
];
