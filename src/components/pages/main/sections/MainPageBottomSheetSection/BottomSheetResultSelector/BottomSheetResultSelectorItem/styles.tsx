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
  // 원래 outline 이었으나, 일부 mobile 브라우저에서 border 가 아닌 outline 에는
  // border-radius 가 적용되지 않는 문제 때문에 box-shadow 로 대체
  // 근본적인 해결책은 아님
  box-shadow: 0 0 0
    ${({ theme, isChecked }) => (isChecked ? "1px " + theme.color.primary700 : "none")};
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
