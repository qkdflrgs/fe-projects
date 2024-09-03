import { Suspense } from "react";
import { PopularVideosList } from "@/src/features/main/components/PopularVideosList";
import { PopularVideosListSkeleton } from "@/src/features/main/components/PopularVideosList/Skeleton";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<PopularVideosListSkeleton />}>
        <PopularVideosList />
      </Suspense>
    </main>
  );
}
