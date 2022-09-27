import Head from "next/head";
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
      <Head>
        <title>헬스메이트 :: 기간별 평가</title>
      </Head>
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
