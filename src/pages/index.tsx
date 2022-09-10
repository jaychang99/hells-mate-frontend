import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Router from "next/router";
import BottomSheet from "components/common/ButtomSheet";
import PageLayout from "components/common/Layout/PageLayout";
import AddChallengeButton from "components/pages/main/AddChallengeButton";
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

import rankingIcon from "/public/icons/ranking_icon.svg";

declare global {
  interface Window {
    Kakao: any;
  }
}
const Home: NextPage = () => {
  const apiGroupData: any = MOCKUP_CHALLENGES;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isShowing, setIsShowing] = useState(false);

  if (apiGroupData) {
    return (
      <MainPageChallengeProvider value={{ apiGroupData }}>
        <BottomSheet
          isShowing={isShowing}
          onClose={() => {
            setIsShowing(false);
          }}
        >
          {/* <MainPageBottomSheetSection
          member={MOCKUP_MEMBERS[0]}
          currentUser={MOCKUP_MEMBERS[0]}
          checkStatusInfo={[false, false, true]}
        /> */}
        </BottomSheet>
        <PageLayout>
          <AddChallengeButton
            onClick={(e: any) => {
              e.preventDefault();
              Router.push("/create/1");
            }}
          >
            +
          </AddChallengeButton>
          <MainPageTopRowContainer>
            <Image alt="ranking icon" src={rankingIcon.src} width={20} height={27} />
          </MainPageTopRowContainer>
          <MainPageCalendarContaier>
            <Calendar onDateChange={setSelectedDate} selectedDate={selectedDate} />
          </MainPageCalendarContaier>
          <MainPageChallengesContainer>
            {apiGroupData.map((groupItem: any, index: any) => (
              <Challenge
                onAreaClick={() => {
                  setIsShowing(true);
                }}
                key={index}
                {...groupItem}
              />
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
