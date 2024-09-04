import * as s from "./style.css";
import { PopularListItem } from "../../../api/getPopularVideosList";
import Link from "next/link";
import { useState } from "react";
import { getVideoDetailPageLink } from "@/src/shared/utils/link/page";

type Props = {
  video: PopularListItem;
};

export const PopularVideosListItem = ({ video }: Props) => {
  const {
    title,
    thumbnail,
    videoId,
    channelTitle,
    viewCountDisplayText,
    publishedAtDisplayText,
  } = video;

  const [activeVideo, setActiveVideo] = useState(false);

  return (
    <div className={s.wrapper}>
      <Link
        href={getVideoDetailPageLink({ videoId })}
        className={s.link}
        onPointerEnter={() => setActiveVideo(true)}
        onPointerLeave={() => setActiveVideo(false)}
      >
        <div className={s.thumbnailWrapper}>
          <img
            className={s.image}
            width={thumbnail.width}
            height={thumbnail.height}
            src={thumbnail.url}
            alt={title}
          />
          {activeVideo && (
            <iframe
              className={s.video}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playsinline=1`}
            />
          )}
        </div>
        <div className={s.contentsWrapper}>
          <h3 className={s.title}>{title}</h3>
          <div className={s.metadataWrapper}>
            <p className={s.metadataLinkText}>{channelTitle}</p>
            <p className={s.metadataText}>
              <span>조회수 {viewCountDisplayText}회</span> •{" "}
              <span>{publishedAtDisplayText}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
