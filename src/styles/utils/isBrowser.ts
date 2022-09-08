export function isBrowser() {
  if (
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
  ) {
    return true;
  }
  return false;
}
