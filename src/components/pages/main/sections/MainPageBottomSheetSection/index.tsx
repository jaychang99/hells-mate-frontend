import { HTMLAttributes } from "react";
import Router from "next/router";
import { css } from "@emotion/react";
import Button from "components/common/Button";
import BottomSheetResultSelector from "components/pages/main/sections/MainPageBottomSheetSection/BottomSheetResultSelector";
import { Member } from "types/api";

import { FlexColumnContainer } from "./styles";
import BottomSheetChallenge from "./BottomSheetChallenge/index";

interface Props extends HTMLAttributes<HTMLDivElement> {
  member: Member;
  currentUser: Member;
  checkStatusInfo: boolean[];
  challengeTitle: string;
  description: string;
}

function MainPageBottomSheetSection({
  member,
  currentUser,
  checkStatusInfo,
  challengeTitle,
  description,
  ...props
}: Props) {
  return (
    <FlexColumnContainer>
      <BottomSheetChallenge
        challengeTitle={challengeTitle}
        description={description}
        onAreaClick={() => {}}
      />
      <BottomSheetResultSelector
        member={member.nickname}
        isOwner={member.id === currentUser.id}
        checkStatusInfo={checkStatusInfo}
      />
      <Button
        variant={member.id === currentUser.id ? "default" : "disable"}
        css={css`
          margin-bottom: 35px;
        `}
        onClick={() => {
          member.id === currentUser.id ? Router.push("/clear") : null;
        }}
      >
        인증하기
      </Button>
    </FlexColumnContainer>
  );
}

export default MainPageBottomSheetSection;
