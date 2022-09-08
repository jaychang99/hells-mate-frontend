import { useEffect, useLayoutEffect } from "react";
import { isBrowser } from "styles/utils/isBrowser";

// 서버 환경 또는 브라우저 환경 따라 useLayoutEffect, useEffect 중 선택
export const useIsomorphicLayoutEffect = isBrowser() ? useLayoutEffect : useEffect;
