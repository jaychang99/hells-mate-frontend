import { addDays, getDaysInMonth, lastDayOfMonth, subDays } from "date-fns";

export function getThisMonthData(currentDay: Date) {
  // 오늘이 속한 달의 날 개수
  const daysInThisMonth = getDaysInMonth(currentDay);

  // 오늘이 속한 달의 마지막 날
  const lastDayInThisMonth = lastDayOfMonth(currentDay);
  const firstDayInThisMonth = subDays(lastDayInThisMonth, daysInThisMonth - 1);

  return { firstDayInThisMonth, lastDayInThisMonth, daysInThisMonth };
}

export function populateDateArray(startDate: Date, endDate: Date) {
  const populatedDateArray = [] as Date[];
  while (startDate.getDate() !== endDate.getDate()) {
    populatedDateArray.push(startDate);
    startDate = addDays(startDate, 1);
  }
  populatedDateArray.push(endDate);
  return populatedDateArray;
}

export function compareUTCYYYYDDMM(date1: Date, date2: Date) {
  if (date1.getUTCFullYear() === date2.getUTCFullYear()) {
    if (date1.getUTCMonth() === date2.getUTCMonth()) {
      if (date1.getUTCDate() === date2.getUTCDate()) {
        return true;
      }
    }
  }
  return false;
}
