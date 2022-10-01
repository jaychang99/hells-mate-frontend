import styled from "@emotion/styled";

export const WindowResizeIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
`;

export const WindowResizeIndicatorText = styled.p`
  color: ${({ theme }) => theme.color.black900};
  font-size: 12px;
  font-weight: 700;
`;
