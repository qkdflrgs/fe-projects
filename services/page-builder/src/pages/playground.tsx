import { vars } from "@litae/themes";
import { MobileFirstLayout } from "../components/view/MobileFirstLayout";
import { TextSlice } from "../components/view/slices/Text";
import { ImageSlice } from "../components/view/slices/Image";
import { CDN_BASE_URL } from "../constants";

const PlaygroundPage = () => {
  return (
    <MobileFirstLayout>
      <TextSlice
        text="본 이벤트는 종료되었습니다 (~8/6)"
        sliceStyle={{
          backgroundColor: vars.colors.$static.light.color.black,
          textColor: vars.colors.$static.light.color.white,
          textSize: 16,
          textWeight: 700,
        }}
      />
      <ImageSlice
        imageUrl={`${CDN_BASE_URL}/test/hero_mobile.webp`}
        alt="온라인 강의 단돈 100원 이벤트 안내"
        sliceStyle={{
          paddingX: 8,
          backgroundColor: "#FFD951",
        }}
      />
    </MobileFirstLayout>
  );
};

export default PlaygroundPage;
