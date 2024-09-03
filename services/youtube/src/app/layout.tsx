import "@/src/shared/styles";
import type { Metadata } from "next";
import { ThemeScript } from "@/src/shared/components/ThemeScript";
import { QueryProvider } from "@/src/shared/components/QueryProvider";
import { MSWProvider } from "@/src/shared/components/MSWProvider";

export const metadata: Metadata = {
  title: "Youtube",
  description:
    "Youtube에서 마음에 드는 동영상과 음악을 감상하고, 직접 만든 콘텐츠를 업로드하여 친구, 가족뿐 아니라 전 세계 사람들과 콘텐츠를 공유할 수 있습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ThemeScript />
        <MSWProvider>
          <QueryProvider>{children}</QueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
