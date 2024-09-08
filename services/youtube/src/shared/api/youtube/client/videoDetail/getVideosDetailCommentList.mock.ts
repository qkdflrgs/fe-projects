import { http, HttpHandler, HttpResponse } from "msw";
import { getVideosDetailCommentListURL } from "./getVideosDetailCommentList";

export const getMockVideosDetailCommentList: HttpHandler = http.get(
  getVideosDetailCommentListURL,
  () => {
    return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL_COMMENT_LIST.success);
  },
);

export const GET_MOCK_VIDEOS_DETAIL_COMMENT_LIST = {
  success: {
    lists: [
      {
        commentId: "UgwhiXpVvdt8R13LirN4AaABAg",
        textDisplay: "카 투브야 축하한다 나도 사무실 구하고싶네 (안구함)",
        authorDisplayName: "@im1G",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/aQEJkF7eAIDeEEqfUQ9rn3XmSfQDtmG_Qzfx6wteFS5dv5JbKyH1paAu-CGCB8COdhr_vHdz=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 8288,
        likeCountDisplayText: "8,288",
        publishedAt: "2024-08-30T12:07:07Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 92,
      },
      {
        commentId: "UgziBEHJkehAXT4uI8t4AaABAg",
        textDisplay: "곽컴퍼니 대박기원 🎉🎉",
        authorDisplayName: "@Jayworldtraveler",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_ncU2OOiLOtChH1QtKXYoegcUsOD1t1barO7jUWt0bR99o=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 4208,
        likeCountDisplayText: "4,208",
        publishedAt: "2024-08-30T12:36:18Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 15,
      },
      {
        commentId: "UgxrUqYwMppsHSTb1-F4AaABAg",
        textDisplay:
          "곽튭 직원들은 몰라도 다른 유투버들은 당일에 연락받고 바로 온거만해도 미친 성의다진짜로",
        authorDisplayName: "@user-ly8qr7pv5f",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_nkLU_04kmnPBqBDPXHvpDibBB1QsavY6lIanitltU=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 118,
        likeCountDisplayText: "118",
        publishedAt: "2024-09-01T07:15:23Z",
        publishedAtDisplayText: "3일 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "UgwV_mGfCR9uWcTTDex4AaABAg",
        textDisplay:
          '\u003Ca href="https://www.youtube.com/watch?v=1IlOwJtyE7Q&amp;t=495"\u003E8:15\u003C/a\u003E 와.. 어몽오리뽀형님들 이사까지 같이 하시고.... 곽컴퍼니 명예직원이나 다름없네',
        authorDisplayName: "@하라o",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_nTKqnCqZupMTIUU8SMk9PNmWheyZDxHCKURWF2s_RGHTw=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 3072,
        likeCountDisplayText: "3,072",
        publishedAt: "2024-08-30T12:11:04Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 16,
      },
      {
        commentId: "Ugy714wgRyxymb4Jtq14AaABAg",
        textDisplay:
          "사옥 지을 수 있게 저희가 더 노력하겠습니다 ! 곽컴퍼니 화이팅🎉",
        authorDisplayName: "@waterfall_jang",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/pku2rHlj4IZhVKW5ctyt3PjrNQeP06tEed2XLqQIQ9SXUqf7Fj1fSdZUu3VFz6mhlZUY97lFxw=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 3801,
        likeCountDisplayText: "3,801",
        publishedAt: "2024-08-30T13:26:54Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 22,
      },
      {
        commentId: "Ugw1xCEby_8avQS_EAB4AaABAg",
        textDisplay:
          "곽튜브 영상에서의 최애 인물은 오리뽀와 어몽님입니다\u003Cbr\u003E이분들 나오는 모습은 전원일기 보는듯 정답고 수수해요\u003Cbr\u003E예전 우리 아버지들 모습이라 마음이 따듯하고 짠하고 그러네요\u003Cbr\u003E항상 건강하시길 바랍니다",
        authorDisplayName: "@user-ds9gu6fn1m",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/eUT8lH3PAVROjwlgACTprMr_e0lv-BkfnZ98uc_L43KyN3tp7zJdaS_im5DFoC_lMVSbPGso4w=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 319,
        likeCountDisplayText: "319",
        publishedAt: "2024-08-31T04:15:24Z",
        publishedAtDisplayText: "4일 전",
        isUpdated: false,
        totalReplyCount: 1,
      },
      {
        commentId: "UgyQkf_yZbLVUQfKC114AaABAg",
        textDisplay:
          '\u003Ca href="https://www.youtube.com/watch?v=1IlOwJtyE7Q&amp;t=1854"\u003E30:54\u003C/a\u003E 원지님 외출 후에 노랑동굴 도착해서 이미 다 씼었는데 (이제 누울 타이밍) 곽튜브 연락 받고 개업식으로 다시 외출 하신 거.. 진짜… 찐 의리 우정 아니냐믄숴~~~ 👍🏻😍💛💛',
        authorDisplayName: "@user-hi2sy3xo7k",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/XMNUQdCeryojW4CGH9qGldV2gn5CZBBkIAaVYu36RAUfVWppDLa3Y10hD-e0mWpb3uzdgqTbqw=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 1384,
        likeCountDisplayText: "1,384",
        publishedAt: "2024-08-30T13:36:37Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 6,
      },
      {
        commentId: "UgyEQw-6ARhQ39VrxIB4AaABAg",
        textDisplay: "준빈아 추카포카피카🐥",
        authorDisplayName: "@koreanjay",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/GmjJnuel3PHOvw2crKuyk1Rk8IHpZauxWpHEcJp_-LC-suiYnodG_bx1CiRCxWbZLe3oeTJuUbE=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 1659,
        likeCountDisplayText: "1,659",
        publishedAt: "2024-08-30T20:19:08Z",
        publishedAtDisplayText: "4일 전",
        isUpdated: false,
        totalReplyCount: 11,
      },
      {
        commentId: "UgzvIZ0L64MMnI3RsMx4AaABAg",
        textDisplay:
          "삶의 동기부여\u003Cbr\u003E진짜 멋있다.\u003Cbr\u003E성공한 사람들 웬만하면 다 질투나는데\u003Cbr\u003E곽튜브는 옛날부터 봐서 그런지 굉장히 멋있는 사람이고 강한 사람인 것 같음.",
        authorDisplayName: "@BBulso4408",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_nxE64BVvNfkOto-UIb04bV2_nuDcStIRPC3cPKGMMy_W8z9fRisSkuHc6UDDEs7_sycg=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 19,
        likeCountDisplayText: "19",
        publishedAt: "2024-09-02T15:59:07Z",
        publishedAtDisplayText: "2일 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "UgxfWmQPbcxNLRNwcnl4AaABAg",
        textDisplay:
          "빠니랑 곽은 ㄹㅇ 영혼의 파트너가 맞다 ㅋㅋㅋㅋ 여기 직원이나 크리에이터도 아닌데 제일 먼저 축하해주러 오고 서로 놀려먹는 것부터 부부임 ㅋㅋㅋㅋ",
        authorDisplayName: "@jjlmn346",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/CTtOu2wZF9_il-h8ccXVkvCbpcWLaWFzZtfnDCiaTERfMZaSRdhisPa0cVFsqqkDaF24Eiuv=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 1911,
        likeCountDisplayText: "1,911",
        publishedAt: "2024-08-30T14:46:32Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 15,
      },
      {
        commentId: "UgxjHhfjG4RUu7TOFrJ4AaABAg",
        textDisplay:
          '\u003Ca href="https://www.youtube.com/watch?v=1IlOwJtyE7Q&amp;t=696"\u003E11:36\u003C/a\u003E 어몽형님 소고기 입에 넣자마자 꽤 오래 전 일이였던 무르만스크 얘기를 꺼내실줄은.. 즉석에서 어떻게 바로 저 얘기가 나오는지 순간 울컥하네요',
        authorDisplayName: "@InCryptoWeTrust-df3ev",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_kLSoUOwwah-BARRTF0IUlRoK9xdKB-pUSkt2ucYMQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 897,
        likeCountDisplayText: "897",
        publishedAt: "2024-08-30T13:12:10Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 3,
      },
      {
        commentId: "UgxGeU6ztXq92WW3pXN4AaABAg",
        textDisplay:
          '\u003Ca href="https://www.youtube.com/watch?v=1IlOwJtyE7Q&amp;t=1095"\u003E18:15\u003C/a\u003E 카메라 받아서 대신 촬영해주는거 진짜 자연스럽다',
        authorDisplayName: "@leegudogza",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_l3Bz6doyOqmxnbxC7YTPEYDkB4EqydIAMsbEUjvC3cQlxG46o=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 477,
        likeCountDisplayText: "477",
        publishedAt: "2024-08-31T04:09:36Z",
        publishedAtDisplayText: "4일 전",
        isUpdated: false,
        totalReplyCount: 3,
      },
      {
        commentId: "UgyqkiGpy4U9LUR5Lol4AaABAg",
        textDisplay:
          "준빈쿤 길게 길게 방송갑시다. 입조심하고 행실조심하고 돈조심하고 음주운전절대하지말고 마약같은거절대하지말고 무엇보다 사람들 조심하시고",
        authorDisplayName: "@purplecloud3838",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/H-t0H2-TzF1zy6qPpMrZkluZek_lXXufQO3xYCb6rHeEXvwh7ga_bPrGwkF83dcAwLJ-balBKg=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 1482,
        likeCountDisplayText: "1,482",
        publishedAt: "2024-08-30T14:10:54Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 26,
      },
      {
        commentId: "Ugz_NPTKimzagcV2Db94AaABAg",
        textDisplay:
          '\u003Ca href="https://www.youtube.com/watch?v=1IlOwJtyE7Q&amp;t=711"\u003E11:51\u003C/a\u003E  어몽형님 은근슬쩍 보시고 오리뽀형님한테 남은거 고기 한점 주는거 왜이렇게 스윗하셔....',
        authorDisplayName: "@user-pm3jo1lm7e",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_mf0gamCuZCiHbrniP_VJ8x026Gjf82um_IxqltsE4=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 1034,
        likeCountDisplayText: "1,034",
        publishedAt: "2024-08-30T13:15:36Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: true,
        totalReplyCount: 6,
      },
      {
        commentId: "UgyQ09nEaeYUo3K5aR54AaABAg",
        textDisplay:
          "빠니가 성격이 진짜 좋은 사람이라는게\u003Cbr\u003E본인 영향력으로인해서 튜브가 성공을 했으면 어느정도 배 아파할만도 하고.. 불편한감정이 생길법도 한데\u003Cbr\u003E진심으로 축하해주고 응원하는게 느껴져서\u003Cbr\u003E성공할수밖에 없었던 사람이라는 생각이 확든다\u003Cbr\u003E빠니님은 인성이 된듯",
        authorDisplayName: "@user-wt5br1iz8w",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/8g7GNIsQjigvaU_HLSPSvgxPqNUToQ_iuhgn6Je4WmyyTn5WP7vTceIDZYNwFFtuFt3fH4_SIQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 326,
        likeCountDisplayText: "326",
        publishedAt: "2024-08-31T05:12:30Z",
        publishedAtDisplayText: "4일 전",
        isUpdated: false,
        totalReplyCount: 4,
      },
      {
        commentId: "Ugy-Oi2hKz9TdXpZveR4AaABAg",
        textDisplay:
          "중간에 어몽 오리뽀형님 나와서 나도 울컥해버렸어😢😢😢 따뜻한 아저씨들 ♥♥",
        authorDisplayName: "@Potistale",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_nLaSoimqm7EKag500v_QTd5MrKEl-oIU0rYn73qOQbpfA=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 914,
        likeCountDisplayText: "914",
        publishedAt: "2024-08-30T12:08:54Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "UgxUIVdLBo3xbmcfppF4AaABAg",
        textDisplay:
          "빠야렉 있을때 곽형이 쇼파 사주면서\u003Cbr\u003E&#39;이걸 보면서 절 기억해주세요&#39;\u003Cbr\u003E했는데\u003Cbr\u003E이젠 곽형이 사무실을 보고 \u003Cbr\u003E&#39;아저씨들을 기억하겠네&#39;\u003Cbr\u003E\u003Cbr\u003E진짜 개슴을 찢는다",
        authorDisplayName: "@dalaiho1603",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_lU2tK_nGhcPutd8bSMCXjk7H0yHpjwXfSblJ_tDYNR3A=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 1075,
        likeCountDisplayText: "1,075",
        publishedAt: "2024-08-30T12:53:15Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 7,
      },
      {
        commentId: "UgxZ1DTTytMrMit7MpF4AaABAg",
        textDisplay:
          "곽님 오래오래 갑시다~~~\u003Cbr\u003E우리부부가 유일하게 챙겨보는 유튜브입니다.\u003Cbr\u003E옆에 좋은 사람들도 많고 잘챙기고 좋으네요 ㅎㅎ",
        authorDisplayName: "@Skygarden103",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/y18i6pNaoXoZChs3S8TXZTdx9u7Yhw2xas6OW6jfNk8xnA26JbfogJpN3bgc2Kqn7JL5KMQySL8=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 16,
        likeCountDisplayText: "16",
        publishedAt: "2024-09-01T06:11:09Z",
        publishedAtDisplayText: "3일 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "UgxzI9PG-HKM8IfM3eR4AaABAg",
        textDisplay:
          "역시 빠니가 곽을 대할 땐 다르단 말야 ㅋㅋㅋㅋ 찐으로 축하해주고 본인이 더 행복해하는 모습 너무 보기 좋으네. 빠니랑 곽 계속 더 흥해라~~~",
        authorDisplayName: "@marvelous_daily_life",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/kC3gPHPaMyPZPAvO8DPG3CdZo30VNAA1TMVTZgE_kUVnrhECry5T3XPiSqgtPeXEwlNalet4NA=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 724,
        likeCountDisplayText: "724",
        publishedAt: "2024-08-30T13:04:32Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: false,
        totalReplyCount: 2,
      },
      {
        commentId: "Ugz-GAtVDpo3lzMY-Wp4AaABAg",
        textDisplay:
          "오옷 이런  제가 철거한 사무실이네요 . 신기하네요 \u003Cbr\u003E긴 가로형 사무실인데 긴쪽 2면이  유리인 복층 사무실이라 여름에 무지막지하게 더울탠데 여름의 막바지에 들어오셔서 다행입니다. \u003Cbr\u003E건승하셔서 사무실에서 사옥으로 이전하시실 바라겠습니다.",
        authorDisplayName: "@TheHi948",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_lqZ-PKgiqejOoMhFmaKyt5tr2x76O9VR02LSfPblL9Hhk=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 658,
        likeCountDisplayText: "658",
        publishedAt: "2024-08-30T14:32:41Z",
        publishedAtDisplayText: "5일 전",
        isUpdated: true,
        totalReplyCount: 3,
      },
    ],
    nextPageToken:
      "Z2V0X3JhbmtlZF9zdHJlYW1zLS1DcWNCQ0lBRUZSZTMwVGdhbkFFS2x3RUkyRjhRZ0FRWUJ5S01BUnNSU092Z3RXb2N0M09LTkpIaFA4QnhBU1lINlRJODNtRDVsZnM1MUlWaE9fYWwxQzJzSGFfQjRJS1BlcW1vMzhpZ2JJdXpuVjlyRjdXMlY5cUJlaThNU3UzT0s5Sk9jSjFzMXFGbmFxMGxkMlZDTlBSUC1ORThReWk0SmNtVjJHTTd4TWNSdFkySGdDb2l4aXpya1htSGVKV3czaEpia2NNQmMteW8wY0VQVXA3WHpXTzE3Y3VVSkhBQkVCUVNCUWlKSUJnQUVnVUloeUFZQUJJRkNLZ2dHQUFTQlFpSUlCZ0FFZ2NJaFNBUUJoZ0JFZ2NJaENBUUZCZ0JHQUE=",
    totalResults: 20,
  },
};
