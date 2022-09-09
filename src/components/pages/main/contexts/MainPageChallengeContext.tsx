import { ComponentProps } from "react";
import Home from "pages";
import { createPageContext } from "utils/createPageContext";

interface MainPageChallengeContextValue extends ComponentProps<typeof Home> {}

const { Provider: MainPageChallengeProvider, usePageContext: useMainPageChallengeContext } =
  createPageContext<MainPageChallengeContextValue>();

export { MainPageChallengeProvider, useMainPageChallengeContext };
