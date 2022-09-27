import React, { HTMLAttributes, useState } from "react";
import { css } from "@emotion/react";
import BottomSheet from "components/common/ButtomSheet";
import {
  ProfileImage,
  ProfileNameText,
  ProfilePictureBase,
  StyledProfile,
} from "components/common/Profile/styles";
import MainPageBottomSheetSection from "components/pages/main/sections/MainPageBottomSheetSection";
import * as gtag from "lib/gtag";
import { resetButtonStyle } from "styles/utils/button";
import { Member } from "types/api";

import defaultProfilePicture from "/public/images/default_profile_icon.svg";

interface Props extends HTMLAttributes<HTMLDivElement> {
  member: Member;
  checkStatusInfo: boolean[];
  currentUser?: any;
  challengeTitle: string;
  description: string;
  isClickable?: boolean;
  category: number;
}

function Profile({
  member,
  checkStatusInfo,
  currentUser,
  challengeTitle,
  description,
  isClickable = true,
  category,
  ...props
}: Props) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <StyledProfile {...props}>
      <button
        css={css`
          ${resetButtonStyle};
          height: 40px; // TODO: 알 수 없는 이유로 높이 지정 안하면 이미지보다 큰 버튼이 생성됨.
        `}
        onClick={() => {
          if (isClickable) {
            setIsShowing(true);
            gtag.event({
              action: "view_item",
              category: "engagement",
              label: "Item clicked",
              value: "view profile",
            });
          }
        }}
      >
        <ProfilePictureBase>
          <ProfileImage src={defaultProfilePicture} />
        </ProfilePictureBase>
      </button>
      <BottomSheet
        isShowing={isShowing}
        onClose={() => {
          setIsShowing(false);
        }}
      >
        <MainPageBottomSheetSection
          challengeTitle={challengeTitle}
          description={description}
          member={member}
          currentUser={{ id: 1, nickname: "서하서하", profilesrc: null }}
          checkStatusInfo={checkStatusInfo}
          category={category}
        />
      </BottomSheet>

      <ProfileNameText>{member.nickname}</ProfileNameText>
    </StyledProfile>
  );
}

export default Profile;
