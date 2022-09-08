import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const boxStyle = css`
  border-radius: 10px;
  border: none;
  background-color: #f5f6fa;
`;

export const BoxLabel = styled.p`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.black500};
  font-size: 14px;
  font-weight: 700;
`;
