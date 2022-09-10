import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useRef, useState } from "react";
import DateCard from "components/common/DateCard";
import StepIcon from "components/common/icons/StepIcon";
import {
  CalendarMonthSelectorContainer,
  CalendarMonthSelectorMonthText,
  StyledCalendar,
} from "components/pages/main/Calendar/styles";
import { addDays, subDays } from "date-fns";
import getDaysInMonth from "date-fns/getDaysInMonth";
import lastDayOfMonth from "date-fns/lastDayOfMonth";
import { scrollIntoView } from "seamless-scroll-polyfill";
import { compareUTCYYYYDDMM, populateDateArray } from "utils/calendar";

const DAY_LOOKUP_ARRAY = ["일", "월", "화", "수", "목", "금", "토"];

interface Props extends HTMLAttributes<HTMLDivElement> {
  selectedDate: Date;
  onDateChange: Dispatch<SetStateAction<Date>>;
}

function Calendar({ selectedDate, onDateChange, ...props }: Props) {
  const today = new Date();
  const [currentDay, setCurrentDay] = useState(today); // 오늘
  const [currentMonth, setCurrentMonth] = useState(currentDay.getMonth());
  const daysInThisMonth = getDaysInMonth(currentDay); // 오늘이 속한 달의 날 개수
  const lastDayInThisMonth = addDays(lastDayOfMonth(currentDay), 1); // 오늘이 속한 달의 마지막 날
  const firstDayInThisMohth = subDays(lastDayInThisMonth, daysInThisMonth - 2);

  const populatedDateArray = populateDateArray(firstDayInThisMohth, lastDayInThisMonth);

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
          {currentDay.getFullYear()}년 {currentDay.getMonth() + 1}월
        </CalendarMonthSelectorMonthText>
        <StepIcon variant="next" />
      </CalendarMonthSelectorContainer>
      <StyledCalendar>
        {populatedDateArray.map((date, index) => {
          const isToday = compareUTCYYYYDDMM(today, date);
          const isFirstDay = compareUTCYYYYDDMM(firstDayInThisMohth, date);

          const isSelected = compareUTCYYYYDDMM(selectedDate, date);

          return (
            <DateCard
              ref={isToday ? (currentDateCardRef as any) : isFirstDay ? firstDateCardRef : DummyRef}
              dateCardTitle={String(date.getUTCDate())}
              dateCardContent={DAY_LOOKUP_ARRAY[date.getUTCDay()]}
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
