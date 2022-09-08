import styled from "@emotion/styled";

export const StyledMainPageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  padding: 50px 16px 16px;
  height: 640px;
  overflow-y: scroll;
  position: relative;
`;

export const MainPageTopRowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MainPageCalendarContaier = styled.div`
  margin-bottom: 48px;
`;

export const MainPageChallengesContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
