import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./layout.css";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "달또달 - 시속 / 페이스 계산기",
  description: "시속 / 페이스 계산기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Script
        id="gtag-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZHC1YQLS3Z"
      />
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZHC1YQLS3Z');`,
        }}
      />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
