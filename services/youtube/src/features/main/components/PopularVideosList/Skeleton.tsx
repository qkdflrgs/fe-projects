import { PopularVideosListItemSkeleton } from "./ListItem/Skeleton";
import * as s from "./style.css";

export const PopularVideosListSkeleton = () => {
  const items = Array.from({ length: 10 }, (_, i) => (
    <PopularVideosListItemSkeleton key={i} />
  ));

  return <section className={s.wrapper}>{items}</section>;
};
