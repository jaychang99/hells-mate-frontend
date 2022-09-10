import { ButtonHTMLAttributes } from "react";
import { StyledAddChallengeButton } from "components/pages/main/AddChallengeButton/styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function AddChallengeButton(props: Props) {
  return <StyledAddChallengeButton {...props}>+</StyledAddChallengeButton>;
}

export default AddChallengeButton;
