import { isBrowser } from "styles/utils/isBrowser";

interface ResultJSON extends JSON {}

export function getLocalStorageAsJSON(keys: string[]) {
  const resultJSON = {} as any;
  if (isBrowser()) {
    for (let i = 0; i < keys.length; i++) {
      console.log(keys[i]);
      resultJSON[keys[i]] = localStorage.getItem(keys[i]);
    }
  }
  return resultJSON;
}
