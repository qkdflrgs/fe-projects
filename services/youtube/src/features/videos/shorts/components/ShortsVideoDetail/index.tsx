"use client";

import * as s from "./style.css";
import { VideoDetailPageParams } from "../../../detail/types";
import { useHandleInvalidShortsVideoType } from "../../hooks/useHandleInvalidShortsVideoType";
import { ShortsPlayer, ShortsPlayerConfig } from "../ShortsPlayer";
import { useGetVideosDetail } from "../../../detail/hooks/useGetVideosDetail";
import { ButtonItem } from "./ButtonItem";
import { Suspense, useState } from "react";
import { VideoDetailCommentList } from "@/src/shared/components/VideoDetailCommentList";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

type Props = VideoDetailPageParams["params"] & ShortsPlayerConfig;

export const ShortsVideoDetail = ({ videoId, autoPlay }: Props) => {
  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId });

  const [showComment, setShowComment] = useState<boolean>(false);

  const toggleShowComment = () => {
    setShowComment(!showComment);
  };

  useHandleInvalidShortsVideoType({ videoId });

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.videoWrapper}>
          <div className={s.buttonWrapper}>
            <ButtonItem
              buttonText="댓글"
              label={videoDetail.commentCountDisplayText}
              onClick={toggleShowComment}
            />
          </div>
          <ShortsPlayer videoId={videoId} autoPlay={autoPlay} />
        </div>
        <AnimatePresence initial={false}>
          {showComment && (
            <motion.div
              initial="collapsed"
              exit="collapsed"
              animate="open"
              variants={{
                open: { width: "auto" },
                collapsed: { width: 0 },
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className={clsx([s.commentWrapper, "swiper-no-mousewheel"])}>
                <Suspense>
                  <VideoDetailCommentList videoId={videoId} />
                </Suspense>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
