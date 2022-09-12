import styled from "@emotion/styled";
import { resetAnchorStyle } from "styles/utils/anchor";

export const StyledAddChallengeAnchor = styled.a`
  ${resetAnchorStyle}
  display:flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  filter: drop-shadow(0px 0px 10px rgba(103, 122, 144, 0.75));
  background-color: ${({ theme }) => theme.color.black500};

  /* position: fixed; */
  z-index: 2;
  /* top: 200px; */
  /* left: 500px; */
  /* right: 16px;
  bottom: 32px; */
  position: fixed;
  right: 30px;
  bottom: 30px;
`;
