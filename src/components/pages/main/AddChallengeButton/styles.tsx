import styled from "@emotion/styled";

import { resetButtonStyle } from "../../../../styles/utils/button";

export const StyledAddChallengeButton = styled.button`
  ${resetButtonStyle}
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  filter: drop-shadow(0px 0px 10px rgba(103, 122, 144, 0.75));
  background-color: ${({ theme }) => theme.color.black500};

  /* position: fixed; */
  z-index: 100;
  /* top: 200px; */
  /* left: 500px; */
  /* right: 16px;
  bottom: 32px; */
  position: sticky;
  top: 500px;
  left: 300px;
`;
