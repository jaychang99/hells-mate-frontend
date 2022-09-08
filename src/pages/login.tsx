import { useEffect } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { isBrowser } from "styles/utils/isBrowser";

import kakaoLogin, { init } from "../utils/kakaoLogin";

const LoginButton: NextPage = () => {
  if (isBrowser()) {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(mapScript);
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <a onClick={kakaoLogin}>누르면 로그인 요청함</a>
      <Image
        alt="kakao login button"
        src="/kakao_login_medium_narrow.png"
        layout="intrinsic"
        width={150}
        height={50}
      />
    </>
  );
};

export default LoginButton;
