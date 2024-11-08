import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./layout.css";

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
      <head>
        <meta
          name="google-site-verification"
          content="35qHWojXW_LaUfk3gtlePrSNsDUS8mXB7uqhYOzc9bo"
        />

        <meta name="google-adsense-account" content="ca-pub-7865364121078598" />
      </head>

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
