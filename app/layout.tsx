import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C判数学塾",
  description: "数学で模試の判定をCまで引き上げ、その先にA・B判定、そして合格を目指すオンライン数学塾のランディングページです。",
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
