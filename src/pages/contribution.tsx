import { css } from "@emotion/react";
import PageLayout from "components/common/Layout/PageLayout";
import { ContributionHeaderSection } from "components/pages/contribution/sections/ContributionHeaderSection";

function Contribution() {
  return (
    <PageLayout
      css={css`
        padding: 0 16px;
      `}
    >
      {/* <StyledContributionPageConrain */}
      <ContributionHeaderSection
        css={css`
          margin: 0 -16px;
        `}
      />
      {/* <ContributionListSection /> */}
    </PageLayout>
  );
}

export default Contribution;
