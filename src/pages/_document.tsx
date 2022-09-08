import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

function MyDocument() {
  return (
    <Html>
      <Head />
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" async defer></Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
