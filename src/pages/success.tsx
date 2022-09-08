import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { ImageContainer } from "components/common/Container";
import { motion } from "framer-motion";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

import fighting from "../../images/fighting.svg";
import { BoxStyle } from "../components/common/BlueBox";
import { SubDescript, Title } from "../components/common/Description";

const FormContainer = styled(motion.form)`
  padding: 53px 16px;
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Success() {
  return (
    <FormContainer variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
      <Title variants={defaultFadeInVariants}>축하합니다!</Title>
      <SubDescript variants={defaultFadeInVariants}>
        전체 미션을 모두
        <br />
        달성하셨어요!
      </SubDescript>
      <ImageContainer variants={defaultFadeInVariants}>
        <Image alt={"fighting"} src={fighting} objectFit="scale-down" />
      </ImageContainer>
      <BoxContainer>
        <Link href="/" passHref>
          <BoxStyle variants={defaultFadeInVariants}>홈으로</BoxStyle>
        </Link>
      </BoxContainer>
    </FormContainer>
  );
}
