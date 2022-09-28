import styled from "@emotion/styled";

export const ContributionHeaderSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const ContributionHeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 16px;
`;

export const ContributionHeaderDateCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;
