import Image from "next/image";
import Router from "next/router";
import styled from "@emotion/styled";
import { BoxStyle } from "components/common/BlueBox";
import { ImageContainer, MoveContainer } from "components/common/Container";
import { Title } from "components/common/Description";
import { motion } from "framer-motion";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

import letter from "../../images/letter.svg";

const FormContainer = styled(motion.form)`
  padding: 53px 16px;
`;

const BlueBox = styled(BoxStyle)`
  position: static;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function ReceivePage() {
  const handleClick = (e: any) => {
    e.preventDefault();
    Router.push("/");
  };

  return (
    <FormContainer variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
      <MoveContainer />
      <Title variants={defaultFadeInVariants}>
        링크를 받으셨습니다.
        <br />
        초대를 수락하시겠습니까?
      </Title>
      <ImageContainer variants={defaultFadeInVariants}>
        <Image alt={"letter"} src={letter} objectFit="scale-down" />
      </ImageContainer>
      <BoxContainer>
        <BlueBox onClick={handleClick} variants={defaultFadeInVariants}>
          <p>초대링크 수락 하기</p>
        </BlueBox>
      </BoxContainer>
    </FormContainer>
  );
}
