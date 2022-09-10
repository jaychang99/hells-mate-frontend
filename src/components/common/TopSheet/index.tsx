import { HTMLAttributes } from "react";
import { StyledTopSheet } from "components/common/TopSheet/styles";

interface Props extends HTMLAttributes<HTMLDivElement> {}

function TopSheet({ children, ...props }: Props) {
  return <StyledTopSheet {...props}>{children}</StyledTopSheet>;
}

export default TopSheet;
