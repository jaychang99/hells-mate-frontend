import { addDays, subDays } from "date-fns";

export function populateDateArray(startDate: Date, endDate: Date) {
  let currentDate = subDays(startDate, 1);
  const populatedDateArray = [] as Date[];
  while (currentDate.getDate() !== endDate.getDate()) {
    populatedDateArray.push(currentDate);
    currentDate = addDays(currentDate, 1);
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
