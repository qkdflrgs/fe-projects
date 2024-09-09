import { Suspense } from "react";
import * as s from "./style.css";
import { VideoDetailPageParams } from "@/src/features/videos/detail/types";
import { VideoDetail } from "@/src/features/videos/detail/components/VideoDetail";
import { VideoDetailCommentList } from "@/src/shared/components/VideoDetailCommentList";

export default function VideoDetailPage({ params }: VideoDetailPageParams) {
  const { videoId } = params;

  return (
    <main>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Suspense fallback={<></>}>
            <VideoDetail videoId={videoId} />
          </Suspense>
          <Suspense fallback={<></>}>
            <VideoDetailCommentList videoId={videoId} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
