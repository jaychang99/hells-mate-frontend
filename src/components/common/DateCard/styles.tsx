import styled from "@emotion/styled";

interface StyleDateCardProps {
  isToday?: boolean;
  isSelected: boolean;
}

export const StyledDateCard = styled.div<StyleDateCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3px;
  padding: 12px;
  min-width: 70px;
  max-width: 70px;
  height: 80px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.primary700 : theme.color.white};
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(95, 123, 255, 0.25);
`;

export const DateCardTitleText = styled.div<StyleDateCardProps>`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.white : theme.color.black500)};
  text-decoration: ${({ isToday }) => (isToday ? "underline" : "none")};
`;

export const DateCardContentText = styled.div<StyleDateCardProps>`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.white : theme.color.black500)};
`;

export const DateCardTodayDot = styled.div<StyleDateCardProps>`
  max-width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.white : theme.color.primary700};
  position: relative;
  top: 10px;
  left: 60px;
`;
