import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C判定を目指すオンライン数学塾",
  description: "数学のやり方が分からない状態から、模試でC判定を目指すオンライン数学塾のランディングページです。",
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
