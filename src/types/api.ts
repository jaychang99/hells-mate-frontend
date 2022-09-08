export interface Member {
  id: number;
  nickname: string;
}

export interface ChallengeType {
  challengeTitle: string;
  description: string;
  category: number;
  members: Member[];
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface LoginResponse {}

export interface User {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  nickname: string;
  profile: string;
  token: string;
}

export interface Group {
  group: {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    title: string;
    content: string;
    token: string;
    startDate: Date;
    endDate: Date;
    User: {
      names: string[];
    };
  };
}
