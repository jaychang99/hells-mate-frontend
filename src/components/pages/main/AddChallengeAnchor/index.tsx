import { AnchorHTMLAttributes } from "react";
import { StyledAddChallengeAnchor } from "components/pages/main/AddChallengeAnchor/styles";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function AddChallengeAnchor(props: Props) {
  return <StyledAddChallengeAnchor {...props}>+</StyledAddChallengeAnchor>;
}

export default AddChallengeAnchor;
