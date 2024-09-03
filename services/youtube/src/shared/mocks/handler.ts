import { getMockPopularVideosList } from "@/src/features/main/api/getPopularVideosList.mock";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [getMockPopularVideosList];
