import { render, screen } from "@/src/shared/utils/test/testUtils";
import { describe, it, expect } from "vitest";
import Page from "./page";
import { GET_MOCK_POPULAR_VIDEOS_LIST } from "@/src/features/main/api/getPopularVideosList.mock";
import { server } from "@/src/shared/mocks/server";
import { http, HttpResponse } from "msw";
import { getPopularVideosListUrl } from "@/src/features/main/api/getPopularVideosList";

describe("Youtube main page data fetching", () => {
  it("페이지 init 시 불러올 데이터가 없다면 스켈레톤이 잘 렌더링 되는가", () => {
    render(<Page />);

    expect(screen.getByTestId("PopularVideosListSkeleton")).toBeInTheDocument();
  });

  it("페이지 init 이후 데이터가 fetching 되면 스켈레톤이 사라지고 리스트 항목이 잘 렌더링 되는가", async () => {
    server.use(
      http.get(getPopularVideosListUrl, () => {
        return HttpResponse.json({
          ...GET_MOCK_POPULAR_VIDEOS_LIST.success,
          nextPageToken: undefined,
        });
      }),
    );

    render(<Page />);

    await screen.findByText(
      GET_MOCK_POPULAR_VIDEOS_LIST.success.lists[0].title,
    );

    expect(
      screen.queryByTestId("PopularVideosListSkeleton"),
    ).not.toBeInTheDocument();

    expect(
      screen.getByText(GET_MOCK_POPULAR_VIDEOS_LIST.success.lists[0].title),
    ).toBeInTheDocument();
  });

  it("페이지 로드 이후 추가로 불러올 데이터가 있다면 VisibilityLoader가 잘 렌더링 되는가", async () => {
    server.use(
      http.get(getPopularVideosListUrl, () => {
        return HttpResponse.json({
          ...GET_MOCK_POPULAR_VIDEOS_LIST.success,
          nextPageToken: "nextPageToken",
        });
      }),
    );

    render(<Page />);

    await screen.findByText(
      GET_MOCK_POPULAR_VIDEOS_LIST.success.lists[0].title,
    );

    expect(screen.queryByTestId("VisibilityLoader")).toBeInTheDocument();
  });
});
