import { http, HttpHandler, HttpResponse } from "msw";
import { getSearchVideosListURL } from "./getSearchVideosList";

export const getMockSearchVideosList: HttpHandler = http.get(
  getSearchVideosListURL,
  () => {
    return HttpResponse.json(GET_MOCK_SEARCH_VIDEOS_LIST.success);
  },
);

export const GET_MOCK_SEARCH_VIDEOS_LIST = {
  success: {
    lists: [
      {
        videoId: "vk6014HuxcE",
        title: "JAY-Z - Empire State Of Mind ft. Alicia Keys",
        description:
          'Official music video for "Empire State Of Mind" performed by JAY-Z featuring Alicia Keys. Listen to JAY-Z: https://JAY-Z.LNK.',
        channelId: "UC_Bf08Y-3m6CMAvTms3EkKg",
        channelTitle: "JayZVEVO",
        thumbnail: {
          url: "https://i.ytimg.com/vi/vk6014HuxcE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-12-04T05:00:17Z",
        publishedAtDisplayText: "2년 전",
      },
      {
        videoId: "Xp67dGeEOLo",
        title:
          "[PLAYLIST] 이어폰을 끼는 순간 여긴 뉴욕 시티 ᖰʘ̅͜ʘ̅ᖳ : 뉴욕 감성 팝송 모음",
        description:
          "활기찬 뉴욕 팝송부터 뉴욕 감성 팝송까지 ! 모두 이 플리를 듣기 전에 뉴욕에 갈 마음의 준비를,,,",
        channelId: "UC3fPdi-N7Qx7Ytfw2XwRnaw",
        channelTitle: "ssing송",
        thumbnail: {
          url: "https://i.ytimg.com/vi/Xp67dGeEOLo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-08-07T14:56:43Z",
        publishedAtDisplayText: "3년 전",
      },
      {
        videoId: "0sG0AaPYuuI",
        title: "뉴욕은 어떤 도시일까?",
        description:
          "미국 #뉴욕 #뉴욕여행 #미국여행 #건축 뉴욕 타임스 스퀘어가 세계의 광장이 된 이유 : 미국 뉴욕 여행 EP1 00:00 건축가의 미국 여행 ...",
        channelId: "UC7uDyFIqExDnfXAIZqumFrQ",
        channelTitle: "셜록현준",
        thumbnail: {
          url: "https://i.ytimg.com/vi/0sG0AaPYuuI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-03-28T12:57:48Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "smZPQrxgz-s",
        title:
          "뉴욕 필수 여행 코스 TOP 15 🗽🏆 뉴욕 여행 가기 전 필수 영상! 뉴요커들이 선정한 뉴욕 최고의 관광 명소들만 알려드려요",
        description:
          "뉴욕 여행 가기 전 필수 영상! 메이의 뉴욕 여행 시리즈, 이번엔 관광 명소편입니다. 미국 대표 주관지 U.S.News와 뉴욕 여행 전문가 ...",
        channelId: "UCTgbNYSdvcvpK6w7oXFp0Yg",
        channelTitle: "메이골드MeyGold",
        thumbnail: {
          url: "https://i.ytimg.com/vi/smZPQrxgz-s/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-01-26T03:48:26Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "onweidjXIRs",
        title:
          "[#걸어서세계속으로 Full📺] 초고층 빌딩 사이 자연이 숨어있는 콘크리트 정글, 미국 뉴욕 겨울여행 Trip to New york (KBS_20170218)",
        description:
          "[518회] 콘크리트 정글, 뉴욕_편집본 미국 최대의 도시, 뉴욕(New York)! 그 속에서 피어나는 예술과 문화, 그리고 도시의 낭만이 있는 ...",
        channelId: "UCFw4M1BJYYdN1YtS8SzlDzg",
        channelTitle: "KBS여행 걸어서 세계속으로",
        thumbnail: {
          url: "https://i.ytimg.com/vi/onweidjXIRs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-12-01T09:00:09Z",
        publishedAtDisplayText: "2년 전",
      },
      {
        videoId: "Mb0vb32p88U",
        title: "미국 거주자도 망설이게하는 뉴욕 물가⎥🇺🇸미국5",
        description:
          "미국 뉴욕 여행 브이로그1 뉴욕에 살아보면 어떨까 해서 함 가봤어요오 + 물가 어쩜조아 진짜 환율 화이팅 ☕️ • Email ...",
        channelId: "UC9gxOp_-R78phMHmv2bW_sg",
        channelTitle: "원지의하루",
        thumbnail: {
          url: "https://i.ytimg.com/vi/Mb0vb32p88U/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2022-10-08T03:05:17Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "ziFy9BZyNP8",
        title:
          "[어바웃 뉴욕] 미국 유기농 마트의 주가가 사상 최고치를 찍은 이유 | 김용갑 특파원",
        description:
          "'매경 월가월부' 에서 따끈한 주식정보를 확인하세요! ◇ 채널 구독하기 : https://www.youtube.com/@MK_Invest *텔레그램에서 더 ...",
        channelId: "UCIipmgxpUxDmPP-ma3Ahvbw",
        channelTitle: "매경 월가월부",
        thumbnail: {
          url: "https://i.ytimg.com/vi/ziFy9BZyNP8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-03T22:01:13Z",
        publishedAtDisplayText: "9시간 전",
      },
      {
        videoId: "le1QF3uoQNg",
        title: "Theme From New York, New York (2008 Remastered)",
        description:
          "Provided to YouTube by Universal Music Group Theme From New York, New York (2008 Remastered) · Frank Sinatra Nothing But ...",
        channelId: "UC1zsfp3OD8qWQ0HfLbz2TXg",
        channelTitle: "Frank Sinatra - Topic",
        thumbnail: {
          url: "https://i.ytimg.com/vi/le1QF3uoQNg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2018-12-12T11:31:53Z",
        publishedAtDisplayText: "5년 전",
      },
      {
        videoId: "_3IU4Ekql1s",
        title:
          "뉴욕여행 브이로그 🗽🇺🇸 단연코 내 인생 최고의 순간 .. 안가면 후회할 뉴욕 스팟들 ✶ NYC vlog",
        description:
          "단연코 내 인생 최고의 순간. • Instagram http://www.instagram.com/nuuyoil • Blog https://m.blog.naver.com/jyw0604 • Email ...",
        channelId: "UCAu2_2BFYdeIMUw_I5aykgg",
        channelTitle: "연우의요일nuuyoil",
        thumbnail: {
          url: "https://i.ytimg.com/vi/_3IU4Ekql1s/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-02-12T12:28:57Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "YAl9No-3WlI",
        title:
          "&quot;병원진료 한번에 20만원, 베이글 33000원&quot; 전세계 최악의 물가인 뉴욕..황당한 뉴욕의 일상🇺🇲[1]",
        description:
          "희철리즘 X 라쉬반 50%특가전 품절시 조기종료  (종료) https://lashevan.com 남자의 온도 33.3° 경험해보세요 대통령상, 누적 ...",
        channelId: "UCwjMQYL9vgbqGzxYW6dVhTw",
        channelTitle: "희철리즘Heechulism",
        thumbnail: {
          url: "https://i.ytimg.com/vi/YAl9No-3WlI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-04-18T08:31:46Z",
        publishedAtDisplayText: "4개월 전",
      },
      {
        videoId: "TzMcWznbkK4",
        title:
          "단 5초만에 뉴욕에 빠지게 만드는 영상! 놓치면 안되는 뉴욕여행 스팟들, 필수 뉴욕 여행 코스 가이드",
        description:
          "뉴욕 #미국여행 #여행지추천 뉴욕은 미국여행, 그 중에서도 미국동부를 여행한다면 빠질 수 없는 곳이죠. 최근에 이서진님과 나영석 ...",
        channelId: "UCmcoQYHyEkRDHApnLUoOqWQ",
        channelTitle: "여행가는시간",
        thumbnail: {
          url: "https://i.ytimg.com/vi/TzMcWznbkK4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-10-17T06:00:11Z",
        publishedAtDisplayText: "10개월 전",
      },
      {
        videoId: "d27gTrPPAyk",
        title: "Sting - Englishman In New York",
        description:
          "REMASTERED IN HD! Music video by Sting performing Englishman In New York. (C) 1987 A&M Records #Sting ...",
        channelId: "UC9B6c09n61wgu5w6bh1v68Q",
        channelTitle: "StingVEVO",
        thumbnail: {
          url: "https://i.ytimg.com/vi/d27gTrPPAyk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2011-01-11T17:38:00Z",
        publishedAtDisplayText: "13년 전",
      },
      {
        videoId: "GhDwLYKwv_o",
        title:
          "[CC] 숙소부터 음식까지 모든 게 완벽했던 뉴욕 여행 l 첫 번째 이야기 (with 민아)",
        description:
          "하트시그널 #김지영 #브이로그 여러분 유월말 뉴욕이 얼마나 덥냐면요.. 조금만 걸어도 숨이 턱턱 막히고 뙤약볕에 민소매 자국 ...",
        channelId: "UCYieht3paO1nFDXim5KZnbg",
        channelTitle: "김지영",
        thumbnail: {
          url: "https://i.ytimg.com/vi/GhDwLYKwv_o/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-08-10T11:45:01Z",
        publishedAtDisplayText: "3주 전",
      },
      {
        videoId: "qvq9QwTtLpE",
        title:
          "[하이라이트] 당신의 낭만을 없애 드립니다 ^^ 뉴욕 한 달 살기 로망 순살로 만든 타일러😅  | 톡파원 25시 | JTBC 240506 방송",
        description:
          "[하이라이트] 당신의 낭만을 없애 드립니다 ^^ 뉴욕 한 달 살기 로망 순살로 만든 타일러   #톡파원25시 #타일러 #뉴욕한달살기 #한달 ...",
        channelId: "UCFL1sCAksD6_7JIZwwHcwjQ",
        channelTitle: "JTBC Entertainment",
        thumbnail: {
          url: "https://i.ytimg.com/vi/qvq9QwTtLpE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-05-09T10:19:25Z",
        publishedAtDisplayText: "3개월 전",
      },
      {
        videoId: "d8SHB7TlgBc",
        title: "뉴욕 가면 매일 볼 수 있는 풍경",
        description:
          "세계테마기행 #뉴욕 #뉴욕야경 뉴욕 야경 명소에서 찍은 #미국 뉴욕 #타임랩스 영상.",
        channelId: "UCbeZPOz8uaHstEIbkqBOnGg",
        channelTitle: "EBS 세계테마기행",
        thumbnail: {
          url: "https://i.ytimg.com/vi/d8SHB7TlgBc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-02-26T05:54:38Z",
        publishedAtDisplayText: "3년 전",
      },
      {
        videoId: "xYcCoHDIiN0",
        title:
          "들으면 미국 가버리는 노래 | Alicia Keys - Empire state of mind Pt.ll | [가사 해석/번역 lyrics]",
        description:
          "방문해 주셔서 감사합니다. 음악을 듣고 즐기시길 바랍니다.     I appreciate your visit. Hope you relish the music. no copyrights ...",
        channelId: "UCTlD91-4GZ2_QwMpapyb0nw",
        channelTitle: "당쮸",
        thumbnail: {
          url: "https://i.ytimg.com/vi/xYcCoHDIiN0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-02-06T05:06:32Z",
        publishedAtDisplayText: "3년 전",
      },
      {
        videoId: "4p8MxmNI2xY",
        title: "뉴욕에서 데이트를 하면 얼마나 쓸까?💸",
        description: "",
        channelId: "UC9k1vn9ErCoe7JngU6SubVw",
        channelTitle: "mina in york 미나",
        thumbnail: {
          url: "https://i.ytimg.com/vi/4p8MxmNI2xY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-08-08T11:00:04Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "o4EkQAcXH-c",
        title:
          "[스페셜] 한 달 살기? 연봉? 뉴욕의 현실에 대해 &#39;타일러&#39;가 냉정하게 알려드립니다💥 | 톡파원 25시 | JTBC 240527 방송",
        description:
          "[스페셜] 한 달 살기? 연봉? 뉴욕의 현실에 대해 '타일러'가 냉정하게 알려드립니다   #톡파원25시 #타일러 #뉴욕 #뉴욕한달살기 ...",
        channelId: "UCFL1sCAksD6_7JIZwwHcwjQ",
        channelTitle: "JTBC Entertainment",
        thumbnail: {
          url: "https://i.ytimg.com/vi/o4EkQAcXH-c/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-06-01T10:30:09Z",
        publishedAtDisplayText: "3개월 전",
      },
      {
        videoId: "pQ_K9QGCWE0",
        title: "Sting(스팅) - Englishman In New York 가사 한글 해석 번역 자막",
        description:
          "Sting Englishman In New York 한글가사 source :https://youtu.be/-fCWXIqoXfE.",
        channelId: "UCA7vdx1NOgBTHw0BjGHyWMQ",
        channelTitle: "ppark _",
        thumbnail: {
          url: "https://i.ytimg.com/vi/pQ_K9QGCWE0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2018-08-23T08:08:07Z",
        publishedAtDisplayText: "6년 전",
      },
      {
        videoId: "cuqGIVTL1Dg",
        title:
          "뉴욕여행 브이로그🇺🇸 센트럴파크 자전거로 30만원 날리기, 미국여행 필수 꿀팁, 브루클린 최애 스팟, 뉴욕 베이글, 인종차별 ✴︎ 미국여행 브이로그 ep.4",
        description:
          "Business Contact its.yuju1@gmail.com Instagram @its_yuju 더 많은 일상 ...",
        channelId: "UC6eYb6GX2QyBvWD8u-ofU4g",
        channelTitle: "잇츠유주 It's yuju",
        thumbnail: {
          url: "https://i.ytimg.com/vi/cuqGIVTL1Dg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-01T10:07:54Z",
        publishedAtDisplayText: "2일 전",
      },
    ],
    nextPageToken: "CBQQAA",
    totalResults: 1000000,
  },
};
