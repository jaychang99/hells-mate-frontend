import styled from "@emotion/styled";
import { resetButtonStyle } from "styles/utils/button";

export const StyledChallengeProfile = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const ChallengeProfileMoreButton = styled.button`
  ${resetButtonStyle}
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.primary200};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChallengeProfileMoreButtonText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black500};
`;
