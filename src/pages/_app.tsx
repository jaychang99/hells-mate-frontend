import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import MobileLayout from "components/common/Layout/MobileLayout";
import { GlobalStyles } from "styles/globalStyles";
import { theme } from "styles/theme";

import "styles/react-datepicker.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
