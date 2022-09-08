import styled from "@emotion/styled";

import { resetButtonStyle } from "../../../styles/utils/button";

interface StyleProps {
  variant: "default" | "disable";
}

export const StyledButton = styled.button<StyleProps>`
  ${resetButtonStyle}
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme, variant }) =>
    variant === "disable" ? theme.color.black500 : theme.color.white};
  background-color: ${({ theme, variant }) =>
    variant === "disable" ? theme.color.primary200 : theme.color.primary700};
  border-radius: 5px;
  cursor: not-allowed;
`;
