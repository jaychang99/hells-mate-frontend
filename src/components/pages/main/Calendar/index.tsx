import { Dispatch, HTMLAttributes, SetStateAction, useState } from "react";
import Image from "next/image";
import DateCard from "components/common/DateCard";
import {
  CalendarMonthSelectorContainer,
  CalendarMonthSelectorMonthText,
  StyledCalendar,
} from "components/pages/main/Calendar/styles";
import { addDays, addMonths, subDays, subMonths } from "date-fns";
import getDaysInMonth from "date-fns/getDaysInMonth";
import lastDayOfMonth from "date-fns/lastDayOfMonth";

import arrowLeftIcon from "/public/icons/arrow_left.svg";
import arrowRightIcon from "/public/icons/arrow_right.svg";

function populateDateArray(startDate: Date, endDate: Date) {
  let currentDate = subDays(startDate, 1);
  const populatedDateArray = [] as Date[];
  while (currentDate.getDate() !== endDate.getDate()) {
    populatedDateArray.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  populatedDateArray.push(endDate);
  return populatedDateArray;
}

function compareUTCYYYYDDMM(date1: Date, date2: Date) {
  if (date1.getUTCFullYear() === date2.getUTCFullYear()) {
    if (date1.getUTCMonth() === date2.getUTCMonth()) {
      if (date1.getUTCDate() === date2.getUTCDate()) {
        return true;
      }
    }
  }
  return false;
}

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

  return (
    <div {...props}>
      <CalendarMonthSelectorContainer>
        <Image
          src={arrowLeftIcon.src}
          width={30}
          height={30}
          onClick={() => setCurrentDay(subMonths(currentDay, 1))}
        />
        <CalendarMonthSelectorMonthText>
          {currentDay.getFullYear()}년 {currentDay.getMonth() + 1}월
        </CalendarMonthSelectorMonthText>
        <Image
          src={arrowRightIcon.src}
          width={30}
          height={30}
          onClick={() => setCurrentDay(addMonths(currentDay, 1))}
        />
      </CalendarMonthSelectorContainer>
      <StyledCalendar>
        {populatedDateArray.map((date, index) => (
          <DateCard
            dateCardTitle={String(date.getUTCDate())}
            dateCardContent={DAY_LOOKUP_ARRAY[date.getUTCDay()]}
            isToday={compareUTCYYYYDDMM(today, date) ? true : false}
            isSelected={compareUTCYYYYDDMM(selectedDate, date) ? true : false}
            key={index}
            onClick={() => {
              onDateChange(date);
              console.log("CLICKED");
            }}
          />
        ))}
      </StyledCalendar>
    </div>
  );
}

export default Calendar;
