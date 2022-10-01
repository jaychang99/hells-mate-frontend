import { HTMLAttributes } from "react";
import { StyledBadge } from "components/common/Badge/styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  warningLevel: number;
  titleText: string;
}

function Badge({ warningLevel, titleText, ...props }: Props) {
  return <StyledBadge warningLevel={warningLevel}>{titleText}</StyledBadge>;
}

export default Badge;
