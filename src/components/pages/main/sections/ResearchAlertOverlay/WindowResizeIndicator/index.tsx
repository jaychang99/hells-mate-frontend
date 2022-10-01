import { HTMLAttributes, useEffect, useState } from "react";
import Badge from "components/common/Badge";
import {
  WindowResizeIndicatorContainer,
  WindowResizeIndicatorText,
} from "components/pages/main/sections/ResearchAlertOverlay/WindowResizeIndicator/styles";
import { useIsomorphicLayoutEffect } from "hooks/useIsomorphicLayoutEffect";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const RESIZE_REQUEST_TEXT = [
  "딱 좋아요!",
  "약간 커요! 조금만 더 줄여 주세요!",
  "너무 커요! 창을 조금 줄여주세요!",
];

function setWarningLevelBasedOnWidth(width: number) {
  if (width < 470) {
    return 0;
  } else if (470 <= width && width < 1000) {
    return 1;
  } else {
    return 2;
  }
}

function WindowResizeIndicator(props: Props) {
  const [warningLevel, setWarningLevel] = useState(0);

  useIsomorphicLayoutEffect(() => {
    setWarningLevel(setWarningLevelBasedOnWidth(window.innerWidth));
  }, []);
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setWarningLevel(setWarningLevelBasedOnWidth(width));
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <WindowResizeIndicatorContainer {...props}>
      <WindowResizeIndicatorText>
        PC 에서도 최적의 경험을 위해 브라우저 창 사이즈를 줄여주세요!
      </WindowResizeIndicatorText>
      <WindowResizeIndicatorText>지금 내 브라우저 창 사이즈는...</WindowResizeIndicatorText>
      <Badge warningLevel={warningLevel} titleText={RESIZE_REQUEST_TEXT[warningLevel]} />
    </WindowResizeIndicatorContainer>
  );
}

export default WindowResizeIndicator;
