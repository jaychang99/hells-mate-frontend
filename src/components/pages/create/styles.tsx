import styled from "@emotion/styled";
import { SubDescript } from "components/common/Description";
import { motion } from "framer-motion";

export const FormContainer = styled(motion.form)`
  padding: 53px 16px;
`;

export const GroupDescription = styled(SubDescript)`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 0;
`;

export const GobackAnchor = styled(motion.a)`
  font-size: 20px;
`;
