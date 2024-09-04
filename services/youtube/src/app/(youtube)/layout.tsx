import { SearchNavigationBar } from "@/src/shared/components/SearchNavigationBar";
import { NAVIGATION_BAR_HEIGHT } from "@/src/shared/components/SearchNavigationBar/style.css";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchNavigationBar />
      <div style={{ paddingTop: NAVIGATION_BAR_HEIGHT }}>{children}</div>
    </div>
  );
}
