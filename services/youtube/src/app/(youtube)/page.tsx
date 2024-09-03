import { Suspense } from "react";
import { PopularVideosList } from "@/src/features/main/components/PopularVideosList";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>🥲</div>}>
        <PopularVideosList />
      </Suspense>
    </main>
  );
}
