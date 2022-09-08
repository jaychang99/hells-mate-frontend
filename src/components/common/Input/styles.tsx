import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { boxStyle } from "components/common/Box";
import { motion } from "framer-motion";

export const InputContainer = styled.div`
  min-width: 100px;
  width: 100%;
`;

const commonStyle = css`
  // 공통부분 (박스 테두리)
  ${boxStyle}

  width: 100%;
  padding: 17px;
  font-family: inherit; //html form element 라서 font-family 별도 지정 필요
  font-weight: 400;
  font-size: 14px;
`;

export const StyledInput = styled(motion.input)`
  ${commonStyle}
  color: ${({ theme }) => theme.color.black900};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.primary700};
  }

  &::placeholder {
    color: #c9cee3;
  }
`;

export const StyledTextarea = styled(motion.textarea)`
  ${commonStyle}
  height: 213px;
  color: ${({ theme }) => theme.color.black900};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.primary700};
  }

  &::placeholder {
    color: #c9cee3;
  }
  resize: none;
`;
