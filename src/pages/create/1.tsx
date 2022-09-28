import { useCallback, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "@emotion/styled";
import BlueNextAnchor from "components/common/BlueNextAnchor";
import { MoveContainer } from "components/common/Container";
import { Title } from "components/common/Description";
import StepIndicator from "components/pages/create/StepIndicator";
import { FormContainer } from "components/pages/create/styles";
import { intervalToDuration } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

const BetweenDayWrapper = styled(motion.div)`
  display: flex;
  text-align: center;
  width: 156px;
  height: 40px;
  margin-top: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  border-bottom: thin solid;
`;

const BetweenDaySpan = styled(motion.span)`
  width: 156px;
`;

const BetweenDayTextSpan = styled(motion.span)`
  color: ${({ theme }) => theme.color.black500};
`;

const DatePickerWrapper = styled(motion.div)`
  margin-top: 30px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SetDayPage() {
  const today = utcToZonedTime(new Date(), "Asia/Seoul");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [durationDay, setDurationDay] = useState(0);

  const handleMissionDate = useCallback(async () => {
    localStorage.setItem("missionStartDate", startDate.toDateString() || "");
    localStorage.setItem("missionEndDate", endDate.toDateString() || "");
  }, [startDate, endDate]);

  return (
    <FormContainer variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
      <Head>
        <title>헬스메이트 :: 날짜 선택</title>
      </Head>
      <MoveContainer>
        <StepIndicator currentStep={1} totalSteps={4} />
      </MoveContainer>
      <Title variants={defaultFadeInVariants}>
        미션 기간은
        <br />
        어느 정도인가요?
      </Title>
      <BetweenDayWrapper variants={defaultFadeInVariants}>
        <BetweenDaySpan variants={defaultFadeInVariants}>{`${durationDay}`}</BetweenDaySpan>
        <BetweenDayTextSpan variants={defaultFadeInVariants}>일</BetweenDayTextSpan>
      </BetweenDayWrapper>
      <DatePickerWrapper variants={defaultFadeInVariants}>
        <DatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={([start, end]: [Date, Date]) => {
            setStartDate(start);
            setEndDate(end);
            if (!end) {
              setDurationDay(0);
              return;
            }

            const day = intervalToDuration({ start, end }).days;

            if (!day) {
              return;
            }

            setDurationDay(day + 1);
          }}
          inline
          selectsRange
        />
      </DatePickerWrapper>
      <Link href="/create/2" passHref>
        <BlueNextAnchor onClick={handleMissionDate} />
      </Link>
    </FormContainer>
  );
}
