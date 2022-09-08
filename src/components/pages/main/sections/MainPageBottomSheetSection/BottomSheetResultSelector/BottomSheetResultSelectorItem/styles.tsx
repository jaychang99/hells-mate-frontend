import styled from "@emotion/styled";

interface StyleProps {
  isChecked: boolean;
  isOwner: boolean;
}

export const StyledBottomSheetResultSelectorItem = styled.div<StyleProps>`
  background-color: ${({ theme, isOwner, isChecked }) =>
    !isOwner && isChecked ? theme.color.primary700 : theme.color.primary200};
  border-radius: 10px;
  padding: 13px;
  width: 100%;
  outline: ${({ theme, isChecked }) =>
    isChecked ? "1px solid " + theme.color.primary700 : "none"};
  height: 50px;
`;

export const ContentFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextFlexContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;
export const CheckBoxIconFlexConatiner = styled.div``;

export const SelectorScoreText = styled.div<StyleProps>`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme, isChecked, isOwner }) =>
    isChecked ? (isOwner ? theme.color.primary700 : theme.color.white) : theme.color.black500};
`;

export const SelectorText = styled.div<StyleProps>`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme, isChecked, isOwner }) =>
    isChecked ? (isOwner ? theme.color.primary700 : theme.color.white) : theme.color.black500};
`;
