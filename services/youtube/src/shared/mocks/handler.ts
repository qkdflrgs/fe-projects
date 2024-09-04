import { getMockPopularVideosList } from "@/src/features/main/api/getPopularVideosList.mock";
import { getMockSearchVideosList } from "@/src/features/search/api/getSearchVideosList.mock";
import { getMockVideosDetail } from "@/src/features/videos/detail/api/getVideosDetail.mock";
import { getMockVideosDetailCommentList } from "@/src/features/videos/detail/api/getVideosDetailCommentList.mock";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [
  getMockPopularVideosList,
  getMockSearchVideosList,
  getMockVideosDetail,
  getMockVideosDetailCommentList,
];
