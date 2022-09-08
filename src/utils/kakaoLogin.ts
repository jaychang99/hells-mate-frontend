const loginKey = process.env.NEXT_PUBLIC_KAKAO_LOGIN_KEY;
const redirectUri = process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI;

export const init = () => {
  const { Kakao } = window;
  if (loginKey && !Kakao?.isInitialized()) {
    Kakao?.init(loginKey);
  }

  return Kakao;
};

const exportingFunction = async () => {
  const kakao = init();
  await kakao.Auth.authorize({ redirectUri });
};

export default exportingFunction;
