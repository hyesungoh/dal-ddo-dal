import type { Metadata } from "next";
import localFont from "next/font/local";
import "./layout.css";

import Script from "next/script";
import Head from "next/head";

const pretendard = localFont({
  src: "../assets/font/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  preload: true,
});

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
      <Head>
        <meta
          name="google-site-verification"
          content="35qHWojXW_LaUfk3gtlePrSNsDUS8mXB7uqhYOzc9bo"
        />
      </Head>

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

      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
