import {
  Dispatch,
  FormEvent,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import DateCard from "components/common/DateCard";
import StepIcon from "components/common/icons/StepIcon";
import {
  CalendarMonthSelectorContainer,
  CalendarMonthSelectorMonthText,
  StepIconButton,
  StyledCalendar,
} from "components/pages/main/Calendar/styles";
import { DAY_LOOKUP_ARRAY, SEOUL_TIMEZONE_OFFSET } from "constants/date";
import { addHours, addMonths, subMonths } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { scrollIntoView } from "seamless-scroll-polyfill";
import { compareUTCYYYYDDMM, getThisMonthData, populateDateArray } from "utils/calendar";

interface Props extends HTMLAttributes<HTMLDivElement> {
  selectedDate: Date;
  onDateChange: Dispatch<SetStateAction<Date>>;
}

function Calendar({ selectedDate, onDateChange, ...props }: Props) {
  // TODO: 클라이언트의 time zone 에 따라 다르게 표시하는 기능, 현재로는 대한민국/서울로 고정
  const today = utcToZonedTime(new Date(), "Asia/Seoul");
  const [currentDay, setCurrentDay] = useState(today); // 오늘

  const { firstDayInThisMonth, lastDayInThisMonth } = getThisMonthData(currentDay);

  const populatedDateArray = populateDateArray(firstDayInThisMonth, lastDayInThisMonth);

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

  function delayedExecuteScroll() {
    setTimeout(() => {
      if (currentDateCardRef.current) {
        executeScroll(currentDateCardRef);
      }
    }, 100);
  }

  useEffect(() => {
    delayedExecuteScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleMonthChange(e: FormEvent<HTMLButtonElement>, variant: "previous" | "next") {
    e.preventDefault();
    setCurrentDay(variant === "previous" ? subMonths(currentDay, 1) : addMonths(currentDay, 1));
    executeScroll(firstDateCardRef);
  }

  function handlePreviousMonth(e: FormEvent<HTMLButtonElement>) {
    handleMonthChange(e, "previous");
  }
  function handleNextMonth(e: FormEvent<HTMLButtonElement>) {
    handleMonthChange(e, "next");
  }

  return (
    <div {...props}>
      <CalendarMonthSelectorContainer>
        <StepIconButton onClick={handlePreviousMonth}>
          <StepIcon variant="previous" />
        </StepIconButton>
        <CalendarMonthSelectorMonthText>
          {currentDay.getFullYear()}년 {currentDay.getMonth() + 1}월
        </CalendarMonthSelectorMonthText>
        <StepIconButton onClick={handleNextMonth}>
          <StepIcon variant="next" />
        </StepIconButton>
      </CalendarMonthSelectorContainer>
      <StyledCalendar>
        {populatedDateArray.map((date, index) => {
          const isToday = compareUTCYYYYDDMM(today, date);
          const isFirstDay = compareUTCYYYYDDMM(firstDayInThisMonth, date);

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
