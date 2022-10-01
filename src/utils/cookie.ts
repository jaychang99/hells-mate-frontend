// cookie: 클라이언트에 저장된 쿠키 전체 값
// keyName: 클라이언트 cookie 중 value 를 얻고자 하는 key 값.
export function getCookie(cookie: string, keyName: string) {
  const value = cookie;
  const parts = value.split(`; ${keyName}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}
