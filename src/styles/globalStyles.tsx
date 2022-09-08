import { css, Global, Theme, useTheme } from "@emotion/react";
import emotionReset from "emotion-reset";

const globalStyles = (theme: Theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Fredoka+One&family=Staatliches&display=swap");

  ${emotionReset}

  html, body {
    word-break: keep-all;
    line-height: 1.5; // 다지안 시안 보고 변경
    letter-spacing: -0.005em; // 디자인 시안 보고 변경

    font-size: 16px; // 디자인 시안 보고 변경 -> 기본 font size
    font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  body {
    background-color: white; // 디자인 시안 보고 변경 -> body 의 background - color
  }

  // HTML form element 는 font 별도 설정하지 않을 시 안먹음.
  button,
  input,
  textarea {
    font: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

export function GlobalStyles() {
  const theme = useTheme();

  return <Global styles={globalStyles(theme)} />;
}
