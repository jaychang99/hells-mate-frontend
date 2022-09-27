import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { BoxStyle } from "components/common/BlueBox";
import { ImageContainer } from "components/common/Container";
import { SubDescript, Title } from "components/common/Description";
import { motion } from "framer-motion";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

import flag from "/public/icons/flag.svg";

const FormContainer = styled(motion.form)`
  padding: 53px 16px;
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Clear() {
  return (
    <FormContainer variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
      <Head>
        <title>헬스메이트 :: 미션 달성 완료!</title>
      </Head>
      <Title variants={defaultFadeInVariants}>수고하셨어요!</Title>
      <SubDescript variants={defaultFadeInVariants}>
        미션 하나를 달성하셨어요!
        <br />
        이대로 계속 달성해볼까요?
      </SubDescript>
      <ImageContainer variants={defaultFadeInVariants}>
        <Image alt={"flag"} src={flag} objectFit="scale-down" />
      </ImageContainer>
      <BoxContainer>
        <Link href="/" passHref>
          <BoxStyle variants={defaultFadeInVariants}>홈으로</BoxStyle>
        </Link>
      </BoxContainer>
    </FormContainer>
  );
}
