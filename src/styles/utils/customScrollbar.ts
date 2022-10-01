import { css, Theme } from "@emotion/react";

export const customScrollbar = (theme: Theme) => css`
  &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 2px;
  }
`;
