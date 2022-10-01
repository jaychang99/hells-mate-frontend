import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { PORTAL_ID } from "constants/portal";

function MyDocument() {
  return (
    <Html>
      <Head />
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" async defer></Script>
      <body>
        <Main />
        <div id={PORTAL_ID} />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
