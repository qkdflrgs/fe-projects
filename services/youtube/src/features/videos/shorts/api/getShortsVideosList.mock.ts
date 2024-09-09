import { http, HttpHandler, HttpResponse } from "msw";
import { getShortsVideosListUrl } from "./getShortsVideosList";

export const getMockShortsVideosList: HttpHandler = http.get(
  getShortsVideosListUrl,
  () => {
    return HttpResponse.json(GET_MOCK_SHORTS_VIDEOS_LIST.success);
  },
);

export const GET_MOCK_SHORTS_VIDEOS_LIST = {
  success: {
    lists: [
      {
        videoId: "VUNdeNKmklo",
      },
      {
        videoId: "eHcYuwqBcOE",
      },
      {
        videoId: "8eH0hrVf-9g",
      },
      {
        videoId: "cw6FRQzERjQ",
      },
      {
        videoId: "99qwr0NZg-Y",
      },
      {
        videoId: "cvWF5B8oPLw",
      },
      {
        videoId: "VTgHgzo3mMY",
      },
      {
        videoId: "DRRtAxfrT7g",
      },
      {
        videoId: "B1njUsbd47k",
      },
      {
        videoId: "WrMmD4Kmjm8",
      },
    ],
    nextPageToken: "CAoQAA",
    totalResults: 1000000,
  },
};
