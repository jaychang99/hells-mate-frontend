import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "components/common/Button/styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "disable";
}

function Button({ children, variant, ...props }: Props) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
