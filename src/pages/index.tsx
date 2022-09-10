import { FormEvent, useCallback, useState } from "react";
import type { NextPage } from "next";
import Router from "next/router";
import RankingIcon from "components/common/icons/RankingIcon";
import PageLayout from "components/common/Layout/PageLayout";
import AddChallengeAnchor from "components/pages/main/AddChallengeAnchor";
import Calendar from "components/pages/main/Calendar";
import Challenge from "components/pages/main/Challenge";
import { MainPageChallengeProvider } from "components/pages/main/contexts/MainPageChallengeContext";
import Loading from "components/pages/main/Loading";
import {
  MainPageCalendarContaier,
  MainPageChallengesContainer,
  MainPageTopRowContainer,
} from "components/pages/main/styles";

// import { useAxiosData } from "hooks/useAxiosData";
import { MOCKUP_CHALLENGES } from "../mockups/challenges";

declare global {
  interface Window {
    Kakao: any;
  }
}
const Home: NextPage = () => {
  // challenge 관련 데이터
  // TODO: backend 연결 시 useAxiosData 로 변경하여 데이터 fetching 바람
  const apiGroupData = MOCKUP_CHALLENGES;

  // Calendar 상태 관리
  const [selectedDate, setSelectedDate] = useState(new Date());

  const gotoAddChallengePage = useCallback((e: FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    Router.push("/create/1");
  }, []);

  // TODO: useSWR 로 대체 예정
  if (apiGroupData) {
    return (
      <MainPageChallengeProvider value={{ apiGroupData }}>
        <PageLayout>
          <AddChallengeAnchor onClick={gotoAddChallengePage} />
          <MainPageTopRowContainer>
            <RankingIcon />
          </MainPageTopRowContainer>
          <MainPageCalendarContaier>
            <Calendar onDateChange={setSelectedDate} selectedDate={selectedDate} />
          </MainPageCalendarContaier>
          <MainPageChallengesContainer>
            {apiGroupData.map((groupItem: any, index: any) => (
              <Challenge key={index} {...groupItem} />
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
