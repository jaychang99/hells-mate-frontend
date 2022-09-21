import type { AppProps } from "next/app";
import Script from "next/script";
import { ThemeProvider } from "@emotion/react";
import MobileLayout from "components/common/Layout/MobileLayout";
import { GlobalStyles } from "styles/globalStyles";
import { theme } from "styles/theme";

import "styles/react-datepicker.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" async defer></Script>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="gAnalytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <ThemeProvider theme={theme}>
        <script src="https://developers.kakao.com/sdk/js/kakao.js" async defer></script>
        <GlobalStyles />
        <MobileLayout>
          <Component {...pageProps} />
        </MobileLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
