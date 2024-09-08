import { http, HttpHandler, HttpResponse } from "msw";
import { getVideosDetailURL } from "./getVideosDetail";

export const getMockVideosDetail: HttpHandler = http.get(
  getVideosDetailURL,
  () => {
    const videoType = new URLSearchParams(window.location.search).get(
      "videoType",
    );

    if (videoType === "short") {
      return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL.success.short);
    }

    return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL.success.long);
  },
);

export const GET_MOCK_VIDEOS_DETAIL = {
  success: {
    long: {
      detail: {
        videoType: "long",
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
        publishedAtDisplayText: "5일 전",
        viewCount: 2122745,
        viewCountDisplayText: "212만",
        likeCount: 37945,
        likeCountDisplayText: "3만",
        dislikeCount: 0,
        dislikeCountDisplayText: "0",
        commentCount: 3139,
        commentCountDisplayText: "3,139",
        channelInfo: {
          title: "곽튜브",
          description:
            "세계여행 및 음식탐방을 목표로 하는 채널입니다.\n문의 \ninsta : @jbkwak\nmail : wnsqls3@gmail.com",
          customUrl: "@jbkwak",
          thumbnail: {
            url: "https://yt3.ggpht.com/FKSFztShFrbN0oshh4D5uxSWVLam_ByaV6W4TOnwIKyfJYXkNBDLGNXPBwa_HIfCl87G0hB9FQ=s240-c-k-c0x00ffffff-no-rj",
            width: 240,
            height: 240,
          },
          viewCount: 531549024,
          viewCountDisplayText: "5억",
          subscriberCount: 2110000,
          subscriberCountDisplayText: "211만",
          hiddenSubscriberCount: false,
        },
      },
    },
    short: {
      detail: {
        videoType: "short",
        videoId: "_TIEmFpzJKw",
        title: "나무에 18000V 전기를 연결하면 그림이 그려진다",
        description:
          "#shorts \n인테리어각\n-\n🏠 긱블 홈페이지 👉 https://bit.ly/Geekble_Official\n🎓 긱블 에듀 👉 https://bit.ly/Geekble_Edu\n📷 긱블 인스타그램 👉 https://bit.ly/Geekble_Insta\n-\n📬 긱블팬이라면 모두!\n긱블이랑 “카카오 플친” 맺기 👉 https://pf.kakao.com/_dWPQK\n-\n🎨긱블러 인스타그램",
        channelId: "UCp94pzrtA5wPyZazbDq0CXA",
        channelTitle: "긱블 Geekble",
        thumbnail: {
          url: "https://i.ytimg.com/vi/_TIEmFpzJKw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-12-12T22:00:14Z",
        publishedAtDisplayText: "3일 전",
        viewCount: 186111,
        viewCountDisplayText: "18만",
        likeCount: 2216,
        likeCountDisplayText: "2,216",
        dislikeCount: 0,
        dislikeCountDisplayText: "0",
        commentCount: 98,
        commentCountDisplayText: "98",
        channelInfo: {
          title: "긱블 Geekble",
          description:
            "저희는 쓸모없는 작품만 만듭니다.\n쓸모있는 물건은 이마트에서 찾으시는게 좋습니다,,\n공대생들이 모인 과학/공학 콘텐츠 제작소, 긱블\n재밌게 봐주세요!\n\n🏠 긱블 공식 홈페이지\nhttps://bit.ly/Geekble_Official\n\n🎓 누구든 긱블러가 될 수 있는 긱블에듀\nhttps://bit.ly/Geekble_Edu\n\n\n✉ 비즈니스 문의 메일 contact@geekble.kr\n",
          customUrl: "@geekblekr",
          thumbnail: {
            url: "https://yt3.ggpht.com/Zrm5qBvSK1RXvayJB5SZwTFSIgJf0_ks8wS3yzuhrB3WMLhD7K7Gc6v6VIGO1qQBOdi-1UaL=s240-c-k-c0x00ffffff-no-rj",
            width: 240,
            height: 240,
          },
          viewCount: 566096904,
          viewCountDisplayText: "5억",
          subscriberCount: 1160000,
          subscriberCountDisplayText: "116만",
          hiddenSubscriberCount: false,
        },
      },
    },
  },
};
