import { addDays } from "date-fns";

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
