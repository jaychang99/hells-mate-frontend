import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Title = styled(motion.h1)`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black900};
  margin-left: 0;
`;

export const SubDescript = styled(motion.p)`
  color: ${({ theme }) => theme.color.black500};
  font-size: 16px;
  margin-top: 25px;
  margin-left: 0;
`;
