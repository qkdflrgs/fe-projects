import {
  GetPopularVideosListRequestParams,
  GetPopularVideosListResponse,
} from "@/src/features/main/api/getPopularVideosList";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
import { formatKoreanTextCompareDatesFromNow } from "@/src/shared/utils/format/date";
import { formatNumberToKoreanText } from "@/src/shared/utils/format/number";
import { youtube_v3 } from "googleapis";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const queryParams = parseQueryParams(request.nextUrl.searchParams);

    const { data } = await youtubeServerInstance.videos.list({
      part: ["snippet", "statistics"],
      chart: "mostPopular",
      regionCode: "KR",
      ...queryParams,
    });

    const mappedData = mappingResponse(data);

    return Response.json(mappedData);
  } catch {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};

const parseQueryParams = (
  params: URLSearchParams,
): GetPopularVideosListRequestParams => {
  return {
    maxResults: Number(params.get("maxResults") ?? "10"),
    pageToken: params.get("pageToken") ?? undefined,
  };
};

const mappingResponse = (
  data: youtube_v3.Schema$VideoListResponse,
): GetPopularVideosListResponse => {
  const lists =
    data.items?.map(({ id, snippet, statistics }) => {
      const publishedAt = snippet?.publishedAt ?? "";
      const parseViewCount = parseInt(statistics?.viewCount ?? "0");

      return {
        videoId: id ?? "",
        title: snippet?.title ?? "",
        description: snippet?.description ?? "",
        channelId: snippet?.channelId ?? "",
        channelTitle: snippet?.channelTitle ?? "",
        thumbnail: {
          url: snippet?.thumbnails?.medium?.url ?? "",
        },
        publishedAt,
        publishedAtDisplayText:
          formatKoreanTextCompareDatesFromNow(publishedAt),
        viewCount: parseViewCount,
        viewCountDisplayText: formatNumberToKoreanText(parseViewCount, true),
      };
    }) ?? [];

  return {
    lists,
    prevPageToken: data.prevPageToken ?? undefined,
    nextPageToken: data.prevPageToken ?? undefined,
    totalResults: data.pageInfo?.totalResults ?? 0,
  };
};
