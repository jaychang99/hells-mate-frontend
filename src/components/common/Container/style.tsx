import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ImageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60vh;
`;

export const MoveContainer = styled(motion.div)`
  width: 60px;
  height: 30px;
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;

  a {
    margin-right: 10px;
  }

  span {
    line-height: 30px;

    b {
      font-weight: bold;
    }
  }
`;
