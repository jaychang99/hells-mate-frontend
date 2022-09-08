import { forwardRef, InputHTMLAttributes } from "react";
import { BoxLabel } from "components/common/Box";
import { InputContainer } from "components/common/Input/styles";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, className, ...props }, ref) => {
  return (
    <InputContainer className={className}>
      {label && <BoxLabel>{label}</BoxLabel>}
      {/* framer-motion 관련 prop 전달 에러로 build 위해 임시 주석처리 */}
      {/* 현재 <Input> 을 사용하고 있는 곳 조차 없긴 함.  */}
      {/* <StyledInput ref={ref} {...props} /> */}
    </InputContainer>
  );
});

export default Input;
