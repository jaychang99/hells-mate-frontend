import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BoxStyle = styled(motion.button)`
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.color.primary700};
  color: ${({ theme }) => theme.color.white};
  width: 328px;
  height: 56px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 12%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue400};
  }
`;
