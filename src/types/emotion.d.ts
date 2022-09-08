import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary100: string;
      primary200: string;
      primary600: string;
      primary700: string;
      orange: string;
      mint: string;
      background: string;
      white: string;
      gray100: string;
      black500: string;
      black900: string;
      blue400: string;
      blue200: string;
    };
    paddings: {
      globalPadding: string;
    };
    radius: {
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
  }
}
