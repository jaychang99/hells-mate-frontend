import styled from "@emotion/styled";

interface StyleChallengeCategory {
  category: number;
}

export const StyledChallenge = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};

  box-shadow: 0px 2px 8px rgba(95, 123, 255, 0.25);
`;

export const FlexColumn = styled.div``;

export const FlexRibbonColumn = styled.div``;
export const FlexContentColumn = styled.div`
  padding: 17px;
  display: flex;
  column-gap: 10px;
`;
export const FlexContentIconColumn = styled.div`
  flex-shrink: 0;
`;
export const FlexContentInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexLastColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: flex-end;
  flex-shrink: 0;
`;

export const ChallengeRibbon = styled.div<StyleChallengeCategory>`
  background-color: ${({ theme, category }) =>
    category === 1 ? theme.color.orange : theme.color.mint};
  width: 8px;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

export const ChallengeTitleText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black900};
  line-height: 110%; // 아이콘과 줄 정렬 맞추기 위해 임의 설정
  margin-bottom: 5px;
`;

export const ChallengeDescriptionText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black900};
  margin-bottom: 15px;
`;

export const FlexSpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
