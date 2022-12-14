import { HTMLAttributes } from "react";
import { StyledPageLayout } from "components/common/Layout/PageLayout/styles";

interface Props extends HTMLAttributes<HTMLDivElement> {}

function PageLayout({ children, ...props }: Props) {
  return <StyledPageLayout {...props}>{children}</StyledPageLayout>;
}

export default PageLayout;
