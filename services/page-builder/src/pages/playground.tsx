import MobileFirstLayout from "../components/view/MobileFirstLayout";
import { CDN_BASE_URL } from "../constants";

const PlaygroundPage = () => {
  return (
    <MobileFirstLayout>
      <h1>Playground</h1>
      <img src={`${CDN_BASE_URL}/test/hero_mobile.webp`} />
    </MobileFirstLayout>
  );
};

export default PlaygroundPage;
