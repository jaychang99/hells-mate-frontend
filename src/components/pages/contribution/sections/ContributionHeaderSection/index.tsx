import { HTMLAttributes } from "react";
import { css } from "@emotion/react";
import DateCard from "components/common/DateCard";
import TopSheet from "components/common/TopSheet";
import {
  ContributionHeaderDateCardContainer,
  ContributionHeaderSectionContainer,
  ContributionHeaderTitle,
} from "components/pages/contribution/sections/ContributionHeaderSection/styles";

import { MOCKUP_CONTRIBUTION_BREAKPOINTS } from "../../../../../mockups/contributions";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function ContributionHeaderSection(props: Props) {
  return (
    <TopSheet {...props}>
      <ContributionHeaderSectionContainer>
        <ContributionHeaderTitle>목표 주기 중</ContributionHeaderTitle>
        <ContributionHeaderDateCardContainer>
          {MOCKUP_CONTRIBUTION_BREAKPOINTS.map((breakpoint, index) => (
            <DateCard
              css={css`
                width: 100%;
              `}
              key={index}
              dateCardTitle={(index + 1).toString()}
              dateCardContent={breakpoint}
              isToday={false}
              isSelected={false}
            />
          ))}
        </ContributionHeaderDateCardContainer>
      </ContributionHeaderSectionContainer>
    </TopSheet>
  );
}
