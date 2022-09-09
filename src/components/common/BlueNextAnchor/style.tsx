import styled from "@emotion/styled";
import { resetAnchorStyle } from "styles/utils/anchor";

export const StyledBlueNextAnchor = styled.a`
  ${resetAnchorStyle}
  width: 56px;
  height: 56px;
  margin: 14px 0;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.blue200};
  text-align: center;
  line-height: 48px;
  font-size: 44px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  cursor: pointer;
  float: right;
`;
