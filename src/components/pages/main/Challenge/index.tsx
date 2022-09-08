import React, { HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";
import ChallengeProfile from "components/pages/main/Challenge/ChallengeProfile";
import {
  ChallengeDescriptionText,
  ChallengeRibbon,
  ChallengeTitleText,
  FlexContentColumn,
  FlexContentIconColumn,
  FlexContentInfoColumn,
  FlexLastColumn,
  FlexRibbonColumn,
  FlexSpaceBetweenContainer,
  StyledChallenge,
} from "components/pages/main/Challenge/styles";
import { ChallengeType } from "types/api";

import dumbbellIcon from "/public/images/dumbbellIcon.svg";
import bigDumbbellIcon from "/public/images/ep_exercise_icon.svg";
import foodIcon from "/public/images/ep_food_icon.svg";
import forkKinfeIcon from "/public/images/forkKnifeIcon.svg";
import navigateNextIcon from "/public/images/navigateNext.svg";

interface Props extends HTMLAttributes<HTMLDivElement>, ChallengeType {
  onAreaClick: () => void;
}

function Challenge({
  challengeTitle,
  description,
  members,
  category,
  onAreaClick,
  ...props
}: Props) {
  const onAreaClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    onAreaClick();
  };
  return (
    <StyledChallenge onClick={onAreaClickHandler} {...props}>
      <FlexRibbonColumn>
        <ChallengeRibbon category={category} />
      </FlexRibbonColumn>
      <FlexContentColumn
        css={css`
          flex-grow: 1;
        `}
      >
        <FlexContentIconColumn>
          <Image alt="icon" src={category == 1 ? forkKinfeIcon : dumbbellIcon} />
        </FlexContentIconColumn>
        <FlexSpaceBetweenContainer>
          <FlexContentInfoColumn
            css={css`
              flex-grow: 1;
              justify-content: space-between;
            `}
          >
            <div>
              <ChallengeTitleText>{challengeTitle}</ChallengeTitleText>
              <ChallengeDescriptionText>{description}</ChallengeDescriptionText>
            </div>
            <ChallengeProfile
              members={members}
              challengeTitle={challengeTitle}
              description={description}
            />
          </FlexContentInfoColumn>
          <FlexLastColumn>
            <Link href="#" passHref>
              <a>
                <Image alt="navigation next icon" src={navigateNextIcon} />
              </a>
            </Link>

            <Image
              alt="big dumbbell icon"
              src={category === 1 ? foodIcon : bigDumbbellIcon}
              width={90}
              height={90}
            />
          </FlexLastColumn>
        </FlexSpaceBetweenContainer>
      </FlexContentColumn>
    </StyledChallenge>
  );
}

export default Challenge;
