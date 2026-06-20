import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://c-han-math.com"),
  title: {
    default: "C判数学塾 | E・D判定から合格へ",
    template: "%s | C判数学塾",
  },
  description:
    "数学のE・D判定からC判定、さらにA・B判定と合格を目指すオンライン数学塾。高校生向けに、勉強の順番と解くべき問題を個別に設計します。",
  keywords: [
    "C判数学塾",
    "数学塾",
    "オンライン塾",
    "大学受験",
    "数学",
    "模試 判定",
    "高校生",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://c-han-math.com",
    siteName: "C判数学塾",
    title: "C判数学塾 | E・D判定から合格へ",
    description:
      "数学のE・D判定からC判定、さらにA・B判定と合格を目指すオンライン数学塾。高校生向けに学習ルートを個別設計。",
  },
  twitter: {
    card: "summary_large_image",
    title: "C判数学塾 | E・D判定から合格へ",
    description:
      "数学のE・D判定からC判定、さらにA・B判定と合格を目指すオンライン数学塾。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
