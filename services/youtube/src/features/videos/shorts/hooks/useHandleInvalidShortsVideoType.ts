import { useEffect } from "react";
import { useGetVideosDetail } from "../../detail/hooks/useGetVideosDetail";
import { VideoDetailPageParams } from "../../detail/types";
import { useRouter } from "next/navigation";

type Props = VideoDetailPageParams["params"];

export const useHandleInvalidShortsVideoType = ({ videoId }: Props) => {
  const router = useRouter();
  const {
    data: { detail: videoDetail },
    isLoading,
  } = useGetVideosDetail({ videoId });

  useEffect(() => {
    if (isLoading) return;

    const isShortVideo = videoDetail.videoType === "short";

    if (!isShortVideo) {
      router.replace(`/videos/detail/${videoId}`);
    }
  }, [isLoading]);
};
