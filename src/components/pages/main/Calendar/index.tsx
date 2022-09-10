import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useRef } from "react";
import DateCard from "components/common/DateCard";
import StepIcon from "components/common/icons/StepIcon";
import {
  CalendarMonthSelectorContainer,
  CalendarMonthSelectorMonthText,
  StyledCalendar,
} from "components/pages/main/Calendar/styles";
import { addHours, subDays } from "date-fns";
import getDaysInMonth from "date-fns/getDaysInMonth";
import lastDayOfMonth from "date-fns/lastDayOfMonth";
import { utcToZonedTime } from "date-fns-tz";
import { scrollIntoView } from "seamless-scroll-polyfill";
import { compareUTCYYYYDDMM, populateDateArray } from "utils/calendar";

const DAY_LOOKUP_ARRAY = ["일", "월", "화", "수", "목", "금", "토"];
const SEOUL_TIMEZONE_OFFSET = 9;

interface Props extends HTMLAttributes<HTMLDivElement> {
  selectedDate: Date;
  onDateChange: Dispatch<SetStateAction<Date>>;
}

function Calendar({ selectedDate, onDateChange, ...props }: Props) {
  // TODO: 클라이언트의 time zone 에 따라 다르게 표시하는 기능, 현재로는 대한민국/서울로 고정
  const today = utcToZonedTime(new Date(), "Asia/Seoul");

  // 오늘이 속한 달의 날 개수
  const daysInThisMonth = getDaysInMonth(today);
  console.log("DAYSINTHISMONTH", daysInThisMonth);

  // 오늘이 속한 달의 마지막 날
  const lastDayInThisMonth = lastDayOfMonth(today);
  console.log("LASTDAYINTHISMONTH", lastDayInThisMonth);
  const firstDayInThisMohth = subDays(lastDayInThisMonth, daysInThisMonth - 1);
  console.log("FIRSTDAYINTHISMONTH", firstDayInThisMohth);

  const populatedDateArray = populateDateArray(firstDayInThisMohth, lastDayInThisMonth);
  console.log("POPULATEDDATEARRAY", populatedDateArray);
  const currentDateCardRef = useRef<HTMLDivElement>();
  // 월 전환 시 첫번째 날짜로 스크롤 시키기 위한 ref
  const firstDateCardRef = useRef<HTMLDivElement>();
  const DummyRef = useRef<HTMLDivElement>();

  // 부득이 Generic 에 대한 추론 문제로 인해 any 사용..
  // TODO: any 를 걷어내자...
  function executeScroll(ref: any) {
    if (ref.current) {
      scrollIntoView(ref.current, {
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (currentDateCardRef.current) {
        executeScroll(currentDateCardRef);
      }
    }, 100);
  }, []);

  return (
    <div {...props}>
      <CalendarMonthSelectorContainer>
        <StepIcon variant="previous" />
        <CalendarMonthSelectorMonthText>
          {today.getFullYear()}년 {today.getMonth() + 1}월
        </CalendarMonthSelectorMonthText>
        <StepIcon variant="next" />
      </CalendarMonthSelectorContainer>
      <StyledCalendar>
        {populatedDateArray.map((date, index) => {
          const isToday = compareUTCYYYYDDMM(today, date);
          const isFirstDay = compareUTCYYYYDDMM(firstDayInThisMohth, date);

          const isSelected = compareUTCYYYYDDMM(selectedDate, date);
          const utcAdjustedDate = addHours(date, SEOUL_TIMEZONE_OFFSET);
          return (
            <DateCard
              ref={isToday ? (currentDateCardRef as any) : isFirstDay ? firstDateCardRef : DummyRef}
              dateCardTitle={String(utcAdjustedDate.getUTCDate())}
              dateCardContent={DAY_LOOKUP_ARRAY[utcAdjustedDate.getUTCDay()]}
              isToday={isToday}
              isSelected={isSelected}
              key={index}
              onClick={() => {
                onDateChange(date);
              }}
            />
          );
        })}
      </StyledCalendar>
    </div>
  );
}

export default Calendar;
