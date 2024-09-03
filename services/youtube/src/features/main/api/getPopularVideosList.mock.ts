import { http, HttpHandler, HttpResponse } from "msw";
import { getPopularVideosListUrl } from "./getPopularVideosList";

export const getMockPopularVideosList: HttpHandler = http.get(
  getPopularVideosListUrl,
  () => {
    return HttpResponse.json(GET_MOCK_POPULAR_VIDEOS_LIST.success);
  },
);

export const GET_MOCK_POPULAR_VIDEOS_LIST = {
  success: {
    lists: [
      {
        videoId: "qozkmwwBsGs",
        title: "EP.1 그림자로 뒤덮인 세상",
        description:
          "그림자로 뒤덮인 세상 1화\n\n참여인원 : 코마, 각별, 공룡, 잠뜰\n@코마 @각별 @rulrudino @sleepground \n\n재생목록\nhttps://youtube.com/playlist?list=PLSPcsedfnZmRU8LVGnIqX1AlWiN_zyzdv&si=jVO53TK-5pGZ8SSP\n\n풀영상(멤버십 전용)\nhttps://youtube.com/playlist?list=PLSPcsedfnZmSc_KAlTikHtXulYQXY8Jv1&si=pZaWp-0RZLqX8Pfd\n\n0:00 프롤로그\n2:42 EP.1 그림자로 뒤덮인 세상",
        channelId: "UCIigIgtZ65TiGQSmnVJaUCQ",
        channelTitle: "코마",
        thumbnail: {
          url: "https://i.ytimg.com/vi/qozkmwwBsGs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-01T07:00:36Z",
        publishedAtDisplayText: "2일 전",
        viewCount: 338147,
        viewCountDisplayText: "33만",
      },
      {
        videoId: "TflHj9669II",
        title: "오사카의 혼밥 스키야키 식당 방문기",
        description: "",
        channelId: "UCaJCF6bmhG2wqPF3jA9gS4w",
        channelTitle: "유우키의 일본이야기 YUUKI",
        thumbnail: {
          url: "https://i.ytimg.com/vi/TflHj9669II/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-01T01:31:06Z",
        publishedAtDisplayText: "2일 전",
        viewCount: 620005,
        viewCountDisplayText: "62만",
      },
      {
        videoId: "ehX7MAhc5iA",
        title: "윤하(YOUNHA) - 태양물고기 M/V",
        description:
          "윤하(YOUNHA) - 태양물고기 M/V \n\nYOUNHA Official TWITTER https://twitter.com/younhaholic\nYOUNHA FanCafe https://cafe.daum.net/Y-Holics\nYOUNHA Instagram https://www.instagram.com/younha_holic/\nYOUNHA Facebook https://www.facebook.com/officialyounha\n\n#윤하 #YOUNHA #혜성은_지지않는다🌠 #윤하_홀릭스💓 #GROWTHTHEORY #정규7집 #태양물고기 #SUNFISH",
        channelId: "UCmAT2nOQB0ofAhlc7_2P8GA",
        channelTitle: "YOUNHA OFFICIAL",
        thumbnail: {
          url: "https://i.ytimg.com/vi/ehX7MAhc5iA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-01T09:00:03Z",
        publishedAtDisplayText: "2일 전",
        viewCount: 1266438,
        viewCountDisplayText: "126만",
      },
      {
        videoId: "Uoc26K0dt9o",
        title:
          "2024 FW 트렌드 / 느낌 확 달라지는 가을 패션, 가을 옷 사기전 꼭 보세요~🍂",
        description:
          "#패션트렌드 #2024fw #뜨는패션 \n\n*착장정보\n쉬폰 블라우스- 자라\nhttps://www.zara.com/kr/ko/%E1%84%89%E1%85%A6%E1%84%86%E1%85%B5-%E1%84%89%E1%85%B5%E1%84%89%E1%85%B3%E1%84%85%E1%85%AE-%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%89%E1%85%B3-zw-collection-p08171334.html?v1=368771529&v2=2420369\n\n귀걸이- 안드르니코\nhttps://www.ahndronico.com/product/natural-earring-2/153/category/24/display/1/\n\n초커형목걸이- 파나쉬차선영\nhttps://chasunyoung.com/product/detail.html?product_no=1366&cate_no=246&display_group=1\n\n중간 길이 펜던트 목걸이-  미드나잇 모먼트 (품절)\n긴 목걸이- 바야흐로 약 십수년전 산거라 정보 까먹음 (단종)\n\n------\n\n📸 사진 출처 : \n- Vogue.com\n\n\n비지니스 문의 :\nfashioncolumntv@gmail.com\n\n(c) 콘텐츠에 대한 저작권은 '옆집언니 최실장'에게 있습니다.",
        channelId: "UCzYB6YA5f-Tc7GQcIese7pg",
        channelTitle: "옆집언니 최실장 stylist unnie",
        thumbnail: {
          url: "https://i.ytimg.com/vi/Uoc26K0dt9o/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-02T10:13:37Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 180641,
        viewCountDisplayText: "18만",
      },
      {
        videoId: "1IlOwJtyE7Q",
        title: "성공한 스타트업 대표의 럭셔리 복층 오피스 개업",
        description:
          "*이번 영상은 설로인의 유료광고를 포함하고 있습니다\n\n안녕하세요\n오랜 시간 끝에 마포 사무실을 벗어나 새로운 사무실로 이사하게 되었습니다\n앞으로의 곽컴퍼니의 성장 기대 부탁드립니다\n\n가장 받고 싶은 명절 선물, 한우 선물세트!\n👉🏻선물하고 마일리지 5% 받기 :  https://bit.ly/4g1M0B5\n곽튜브 추천인 코드 F67EPBB1 입력 후 가입하면 4천원 마일리지 받아가세요✨\n\n✅신규 가입 시, 최대 15% 쿠폰 증정\n✅원하는 날짜에 지정일 배송 가능\n✅번호만 알아도 선물 가능!\n\n받는 사람도 주는 사람도 만족하는 설로인 숙성한우 선물세트를 만나보세요.\n\n#설로인 #선물은설로인 #추석선물세트 \n\n[유의 사항]\n\n- 추천인 코드 SMS 수신 동의 시 추가 2,000M 지급 되는 점 유의 바랍니다.\n-------------------------------------------------------------------------------\ninsta : @jbkwak\nmail : wnsqls3@gmail.com\n촬영장비 : 고프로 히어로 12 블랙\n편집 : 맥북프로 16인치, 파이널컷 X\n음원 : Epidemic sound&Artlist",
        channelId: "UClRNDVO8093rmRTtLe4GEPw",
        channelTitle: "곽튜브",
        thumbnail: {
          url: "https://i.ytimg.com/vi/1IlOwJtyE7Q/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-08-30T11:59:58Z",
        publishedAtDisplayText: "4일 전",
        viewCount: 2067217,
        viewCountDisplayText: "206만",
      },
      {
        videoId: "YhzF50WE3w0",
        title:
          "LE SSERAFIM (르세라핌) - CRAZY | Show! MusicCore | MBC240831방송",
        description:
          "LE SSERAFIM (르세라핌) - CRAZY | Show! MusicCore | MBC240831방송\n\n#LESSERAFIM #CRAZY #MBCKPOP\n\n★★★More clips are available★★★\n\niMBC\nhttps://program.imbc.com/musiccore\n\nⓒ MBC&iMBC 무단 전재, 재배포 및 이용(AI학습 포함) 금지",
        channelId: "UCe52oeb7Xv_KaJsEzcKXJJg",
        channelTitle: "MBCkpop",
        thumbnail: {
          url: "https://i.ytimg.com/vi/YhzF50WE3w0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-08-31T07:25:10Z",
        publishedAtDisplayText: "3일 전",
        viewCount: 1037534,
        viewCountDisplayText: "103만",
      },
      {
        videoId: "lzm-7YfBJBU",
        title: "FIFTY FIFTY (피프티피프티) ‘Starry Night’ Official MV",
        description:
          "FIFTY FIFTY 2nd Mini Album\nPre-Release Single ‘Starry Night’ is out!\n\nListen on your favorite platform!\n🎧5FIFTYFIFTY.lnk.to/starrynight\n\n🩷2nd Mini Album Release on\n➫ 2024.09.20 1PM (KST) l 12AM (EST)\n\n#FIFTYFIFTY_StarryNight #StarryNight\n\nⓒ 2024 ATTRAKT. All Rights Reserved\n\n📌FIFTY FIFTY OFFICIAL SNS\nFIFTY FIFTY OFFICIAL Instagram : https://www.instagram.com/we_fiftyfifty/\nFIFTY FIFTY OFFICIAL X(Twitter) : https://twitter.com/we_fiftyfifty\nFIFTY FIFTY OFFICIAL TikTok : https://www.tiktok.com/@we_fiftyfifty\nFIFTY FIFTY OFFICIAL YouTube : www.youtube.com/@WE_FIFTYFIFTY\nFIFTY FIFTY OFFICIAL Fan cafe : https://cafe.daum.net/wefiftyfifty\nFIFTY FIFTY OFFICIAL Facebook : https://www.facebook.com/we.fiftyfifty\n\n\n#FIFTYFIFTY #피프티피프티\n#KEENA #키나\n#CHANELLEMOON #문샤넬\n#YEWON #예원\n#HANA #하나\n#ATHENA #아테나",
        channelId: "UCJEER74X9kBenMT_x9iK9Mw",
        channelTitle: "FIFTY FIFTY Official",
        thumbnail: {
          url: "https://i.ytimg.com/vi/lzm-7YfBJBU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-08-30T04:00:14Z",
        publishedAtDisplayText: "4일 전",
        viewCount: 8393981,
        viewCountDisplayText: "839만",
      },
      {
        videoId: "PQxb0Gacux8",
        title:
          "김채원(KIM CHAEWON)만의 부드러운 카리스마로 다시 태어난 'On My Way'♬｜비긴어게인 오픈마이크",
        description:
          "김채원(KIM CHAEWON)만의 부드러운 카리스마로 다시 태어난 'On My Way'♬\n\n#BeginAgain #OpenMic #BeginAgainOpenMic\n#비긴어게인 #비긴어게인오픈마이크\n#김채원 #KIMCHAEWON\n#르세라핌 #LESSERAFIM\n\n비긴어게인 구독하기 ▶ https://bit.ly/35Uzq4q\n#티빙에서스트리밍 ▶️ https://tving.onelink.me/xHqC/1vihef6r\n\n※ 내부 사정으로 인해\n'비긴어게인 오픈마이크 - 나주 편' 업로드가 크게 지연되었습니다.\n시청자 분들께 불편을 드려 죄송합니다.",
        channelId: "UC8WoHUeN-eLynnLKGkwajYQ",
        channelTitle: "Beginagain 비긴어게인",
        thumbnail: {
          url: "https://i.ytimg.com/vi/PQxb0Gacux8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-02T10:14:33Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 239865,
        viewCountDisplayText: "23만",
      },
      {
        videoId: "NKPCdbo25PE",
        title: "{출산로그} 재준아.. 이 투샷 실화야..?",
        description:
          "안녕하세요 기유TV입니다 :))\n개그쀼 기유부부 유튜브의 향-연\n\n구독과 좋아요&댓글 부탁드려욜❤︎ \n\n#깡총이 #조리원일상 \n\n안녕하세요 기유티비 입니다! \n\n오늘은 조리원 일상 두번째 이야기예요\n\n조리원은 천국이라는 말 정말이었.....✨✨🤘\n\n깡총이와 엄마 아빠가 집에 돌아가기전\n\n여유로운(?) 일상들 그리고\n\n엄마의 건조하고 갈라진 \n\n피부를 지켜주는 조리원 관리비법까지!!!!! \n\n오늘도 점점 더 닮아가는 \n\n데칼코마니 떡먹는 용만이 도플갱어 \n\n강재준과 깡총이의 일상, 즐겁게 시청해 주세요 \n\n여러분 사랑해요 찡긋-\n\n#바이오더마 #아토덤투인원오일 #결보습오일 #임산부오일 #육아맘오일\n\n💦 바이오더마 아토덤 투인원 오일 기획세트 💦\n👉🏻👉🏻 https://url.kr/h8e1mc\n\n지금 올리브영에서 8/30~9/5 \n단, 7일동안 바이오더마 \n[아토덤 투인원 오일 150ml + 윌 드 두쉬 100ml] 기획세트를\n정가 49,000원 → 19,600원 (60% 할인가)에 만나보세요 💙\n\n문의 : kiyukangbubu@gmail.com\n\n재준In☆ https://www.instagram.com/Jaejunkang/\n은형In☆ https://www.instagram.com/melong416/",
        channelId: "UCoKDi-1KsdYjw6lap4ctXRA",
        channelTitle: "기유TV",
        thumbnail: {
          url: "https://i.ytimg.com/vi/NKPCdbo25PE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-02T12:00:21Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 461696,
        viewCountDisplayText: "46만",
      },
      {
        videoId: "k4L9OYawmj8",
        title:
          "솔직하게 털어본 6년차 한일커플의 취중연애상담 Q&A🔥 (장거리 연애꿀팁, 결혼에 대한 확신, 남사친 여사친 문제, 일본의 연락문화, 싸울때 해결법, 재회는 미친짓)",
        description:
          "여러분 오늘은 예전부터 요청이 꽤 많았던! 연애 상담 큐앤에이를 찍어보았는데요~ \n보내주신 사연들 읽어보면서 증말 마음 아픈 것들이 한두개가 아녔다면서,, 우리 토모토모 구독자 분들은\n정말 행복한 연애만 했으면 좋겠다!!!! 는 마음으로 열심히 답해보았어요 허허\n조금이나마 도움이 되셨길 바라며... 오늘 영상도 보러와주셔서 감사드려요..♥ \n\n▶︎　instagram : \n@zzangtomo \nhttp://instagram.com/zzangtomo\n@yuinniy \nhttp://instagram.com/yuinniy\n@to_omchan \nhttp://instagram.com/to_omchan\n\n▶︎   contact : zzangtomo@gmail.com",
        channelId: "UCoQy2wS5aiKCk-rUXiLS-vQ",
        channelTitle: "토모토모TomoTomo",
        thumbnail: {
          url: "https://i.ytimg.com/vi/k4L9OYawmj8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-01T14:50:12Z",
        publishedAtDisplayText: "2일 전",
        viewCount: 444285,
        viewCountDisplayText: "44만",
      },
    ],
    nextPageToken: "CBQQAA",
    prevPageToken: "CAoQAQ",
    totalResults: 200,
  },
};
