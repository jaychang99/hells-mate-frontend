import React, { ButtonHTMLAttributes } from "react";
import { StyledAddChallengeButton } from "components/pages/main/AddChallengeButton/styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function AddChallengeButton({ children, ...props }: Props) {
  return <StyledAddChallengeButton {...props}>{children}</StyledAddChallengeButton>;
}

export default AddChallengeButton;
