import { FormEvent, useCallback, useState } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Router from "next/router";
import RankingIcon from "components/common/icons/RankingIcon";
import PageLayout from "components/common/Layout/PageLayout";
import AddChallengeAnchor from "components/pages/main/AddChallengeAnchor";
import Calendar from "components/pages/main/Calendar";
import { MainPageChallengeProvider } from "components/pages/main/contexts/MainPageChallengeContext";
import Loading from "components/pages/main/Loading";
import ReasearchAlertOverlay from "components/pages/main/sections/ResearchAlertOverlay";
import {
  MainPageCalendarContainer,
  MainPageChallengesContainer,
  MainPageTopRowContainer,
} from "components/pages/main/styles";
import { utcToZonedTime } from "date-fns-tz";
import { useIsomorphicLayoutEffect } from "hooks/useIsomorphicLayoutEffect";
import { isBrowser } from "styles/utils/isBrowser";
import { getCookie } from "utils/cookie";

// import { useAxiosData } from "hooks/useAxiosData";
import { MOCKUP_CHALLENGES } from "../mockups/challenges";

declare global {
  interface Window {
    Kakao: any;
  }
}
const Home: NextPage = () => {
  // UT 위해서 (백엔드 구현 전) 임시로 CSR 로 변경
  const CSRChallenge = dynamic(() => import("components/pages/main/Challenge"), { ssr: false });
  // challenge 관련 데이터
  // TODO: backend 연결 시 useAxiosData 로 변경하여 데이터 fetching 바람
  const apiGroupData = MOCKUP_CHALLENGES;

  const today = utcToZonedTime(new Date(), "Asia/Seoul");
  // Calendar 상태 관리
  const [selectedDate, setSelectedDate] = useState(today);

  const gotoAddChallengePage = useCallback((e: FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    Router.push("/create/1");
  }, []);

  // ResearchAlertOverlay 관련
  const [isShown, setIsShown] = useState<boolean>(true);
  useIsomorphicLayoutEffect(() => {
    setIsShown(!getAgreeStatus());
  }, []);

  function getAgreeStatus() {
    let agreeStatus = isBrowser()
      ? getCookie(document.cookie, "agreed") === "true"
        ? true
        : false
      : false;
    return agreeStatus;
  }

  // TODO: useSWR 로 대체 예정
  if (apiGroupData) {
    return (
      <MainPageChallengeProvider value={{ apiGroupData }}>
        <Head>
          <title>헬스메이트 :: No.1 건강 플랫폼</title>
        </Head>
        <PageLayout>
          <ReasearchAlertOverlay isShown={isShown} onAccept={() => setIsShown(false)} />
          <AddChallengeAnchor onClick={gotoAddChallengePage} />
          <MainPageTopRowContainer>
            <RankingIcon />
          </MainPageTopRowContainer>
          <MainPageCalendarContainer>
            <Calendar onDateChange={setSelectedDate} selectedDate={selectedDate} />
          </MainPageCalendarContainer>
          <MainPageChallengesContainer>
            {apiGroupData.map((groupItem: any, index: any) => (
              <CSRChallenge key={index} {...groupItem} selectedDate={selectedDate} />
            ))}
          </MainPageChallengesContainer>
        </PageLayout>
      </MainPageChallengeProvider>
    );
  } else {
    return <Loading />;
  }
};

export default Home;
