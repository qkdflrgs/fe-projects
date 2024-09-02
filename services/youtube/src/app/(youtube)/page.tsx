import * as s from "../(youtube)/page.css";
import { PopularVideosList } from "@/src/features/main/components/PopularVideosList";

export default function Home() {
  return (
    <main className={s.main}>
      <h1 style={{ padding: "12px" }}>타이틀</h1>
      <PopularVideosList />
    </main>
  );
}
