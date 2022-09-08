import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
var ProgressBar = require("progressbar.js");

const Box1Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box2Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box3Container = styled.div`
  position: relative;
  right: 12px;
`;

const SpanContainer = styled.span`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

function Loading() {
  const textList1 = [
    "독서는 마음을 위한 것이고",
    "흔들리면 지방이다",
    "세상에 있는 유일한 나쁜 운동은",
    "그만 두고 싶다는 생각이 들면,",
    "당신의 몸은 해 낼 수 있다.",
    "한계라고 느낄 때",
    "헬스클럽은 클럽보다 더 즐거운 곳",
    "너의 몸은 거의 모든 것을 버틸 수 있다.",
  ];
  const textList2 = [
    "운동은 몸을 위한 것이다",
    "",
    "안하는 운동 뿐이다",
    "왜 시작 했는지 생각하여 보라",
    "당신의 마음만 설득하면 된다",
    "한 개 더 해야 성장할 수 있다",
    "헬스클럽은 클럽보다 더 즐거운 곳",
    "너의 정신력을 믿으면 된다",
  ];

  const loadsvg = (bar: any) => {
    if (bar.value() == 1) {
      bar.set(0);
      bar.animate(1, {}, function () {
        loadsvg(bar);
      });
    }
  };
  const [goodTextIndex, setGoodText] = useState<number>(0);

  useEffect(() => {
    setGoodText(() => Math.floor(Date.now() / 10000) % textList1.length);
    let bar = new ProgressBar.Path("#loadingHealth", {
      easing: "easeInOut",
      duration: 1400,
    });
    bar.set(0);
    bar.animate(1, {}, function () {
      loadsvg(bar);
    });
  });

  return (
    <Box1Container>
      <Box2Container>
        <Box3Container>
          <svg
            width="200"
            height="200"
            viewBox="0 0 112 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="loadingHealth"
              fillOpacity="0"
              stroke="#FB7548"
              strokeWidth="2"
              d="M74.641 34.6804C74.641 33.722 75.418 32.9451 76.3764 32.9451H82.1609C83.1193 32.9451 83.8963 33.722 83.8963 34.6804V77.486C83.8963 78.4444 83.1193 79.2213 82.1609 79.2213H76.3764C75.418 79.2213 74.641 78.4444 74.641 77.486V60.1324C74.641 59.174 73.8641 58.397 72.9057 58.397H50.2453C49.2868 58.397 48.5099 59.174 48.5099 60.1324V77.486C48.5099 78.4444 47.7329 79.2213 46.7745 79.2213H40.99C40.0316 79.2213 39.2546 78.4444 39.2546 77.486V34.6804C39.2546 33.722 40.0316 32.9451 40.99 32.9451H46.7745C47.7329 32.9451 48.5099 33.722 48.5099 34.6804V52.034C48.5099 52.9924 49.2868 53.7694 50.2453 53.7694H72.9057C73.8641 53.7694 74.641 52.9924 74.641 52.034V34.6804ZM23.6364 53.7694C24.5948 53.7694 25.3718 52.9924 25.3718 52.034V41.6219C25.3718 40.6635 26.1487 39.8865 27.1071 39.8865H32.8917C33.8501 39.8865 34.627 40.6635 34.627 41.6219V70.5445C34.627 71.5029 33.8501 72.2799 32.8917 72.2799H27.1071C26.1487 72.2799 25.3718 71.5029 25.3718 70.5445V60.1324C25.3718 59.174 24.5948 58.397 23.6364 58.397H22.4795C21.5211 58.397 20.7441 57.6201 20.7441 56.6617V55.5047C20.7441 54.5463 21.5211 53.7694 22.4795 53.7694H23.6364ZM102.407 56.6617C102.407 57.6201 101.63 58.397 100.671 58.397H99.5145C98.5561 58.397 97.7791 59.174 97.7791 60.1324V70.5445C97.7791 71.5029 97.0022 72.2799 96.0438 72.2799H90.2592C89.3008 72.2799 88.5239 71.5029 88.5239 70.5445V41.6219C88.5239 40.6635 89.3008 39.8865 90.2593 39.8865H96.0438C97.0022 39.8865 97.7791 40.6635 97.7791 41.6219V52.034C97.7791 52.9924 98.5561 53.7694 99.5145 53.7694H100.671C101.63 53.7694 102.407 54.5463 102.407 55.5047V56.6617Z"
            />
          </svg>
        </Box3Container>
        <SpanContainer>{textList1[goodTextIndex]}</SpanContainer>
        <SpanContainer>{textList2[goodTextIndex]}</SpanContainer>
      </Box2Container>
    </Box1Container>
  );
}

export default Loading;
