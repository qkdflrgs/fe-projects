import { SearchFilter } from "@/src/features/search/components/SearchFilter";
import { SearchResultList } from "@/src/features/search/components/SearchResultList";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <main>
      <SearchFilter />
      <Suspense fallback={<></>}>
        <SearchResultList />
      </Suspense>
    </main>
  );
}
