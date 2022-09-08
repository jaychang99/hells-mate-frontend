import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { BlueGt } from "components/common/BlueGt";
import { MoveContainer } from "components/common/Container";
import { Title } from "components/common/Description";
import { intervalToDuration } from "date-fns";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

import rPolygon from "../../../images/rPolygon.svg";

const FormContainer = styled(motion.form)`
  padding: 53px 16px;
`;

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

export default function SetDay() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [durationDay, setDurationDay] = useState<Number>(0);

  return (
    <FormContainer variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
      <MoveContainer>
        <motion.span variants={defaultFadeInVariants}>
          <b>1</b> / 4
        </motion.span>
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
        <BlueGt>
          <Image alt={"next"} src={rPolygon} />
        </BlueGt>
      </Link>
    </FormContainer>
  );
}
