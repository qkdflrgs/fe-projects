import { getMockPopularVideosList } from "@/src/features/main/api/getPopularVideosList.mock";
import { getMockSearchVideosList } from "@/src/features/search/api/getSearchVideosList.mock";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [
  getMockPopularVideosList,
  getMockSearchVideosList,
];
