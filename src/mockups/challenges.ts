import { ChallengeType } from "types/api";
import { getLocalStorageAsJSON } from "utils/localStorage";

import profile1 from "/public/images/mockUpProfileImage/profile1.jpg";

const clientStorageData = getLocalStorageAsJSON([
  "missionType",
  "missionTitle",
  "missionDescription",
  "missionStartDate",
  "missionEndDate",
]);

export const MOCKUP_CHALLENGES: ChallengeType[] = [
  {
    challengeTitle: clientStorageData.missionTitle || "맥주 안 마시기",
    description:
      clientStorageData.missionDescription ||
      "30일 후에 중요 약속 있다면서 살빼야지 맥주 왜 마시냐",
    category: 1,
    startDate: new Date("2022-09-26"),
    endDate: new Date("2022-09-30"),
    members: [
      {
        id: 1,
        nickname: "김민주",
        profilesrc: profile1.src,
      },
      {
        id: 2,
        nickname: "서희창",
        profilesrc: null,
      },
    ],
  },
  {
    challengeTitle: "계단 20층 3번 오르기",
    description: "우선 실전 운동부터 해보며 기초 체력 증진해보자",
    category: 0,
    members: [
      {
        id: 1,
        nickname: "김민주",
        profilesrc: profile1.src,
      },
      {
        id: 2,
        nickname: "서희창",
        profilesrc: null,
      },
    ],
  },
  {
    challengeTitle: "매일 채소 200g 먹기",
    description: "맛잇는채소채소채",
    category: 1,
    members: [
      {
        id: 2,
        nickname: "서희창",
        profilesrc: null,
      },
      {
        id: 3,
        nickname: "윤준상",
        profilesrc: null,
      },
      {
        id: 4,
        nickname: "김진희",
        profilesrc: null,
      },
      {
        id: 5,
        nickname: "오이성",
        profilesrc: null,
      },
    ],
  },
];

export {};
