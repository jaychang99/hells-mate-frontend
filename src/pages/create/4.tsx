import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import styled from "@emotion/styled";
import { ImageContainer, MoveContainer } from "components/common/Container";
import StepIndicator from "components/pages/create/StepIndicator";
import { motion } from "framer-motion";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

import { BoxStyle } from "../../components/common/BlueBox";
import { Title } from "../../components/common/Description";

import letter from "/public/icons/letter.svg";
import lPolygon from "/public/icons/lPolygon.svg";

const FormContainer = styled(motion.form)`
  padding: 53px 16px;
`;

const Goback = styled(motion.a)`
  font-size: 20px;
`;

const BlueBox = styled(BoxStyle)`
  position: static;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ConfirmBox = styled(BoxStyle)`
  position: static;
  border: 1px solid ${({ theme }) => theme.color.primary700};
  color: ${({ theme }) => theme.color.primary700};
  background-color: ${({ theme }) => theme.color.white};
  &:hover {
    background-color: ${({ theme }) => theme.color.primary200};
  }
`;

export default function InvitePage() {
  const [headerText, setHeaderText] = useState("링크를 통해 \n초대해주세요.");
  return (
    <FormContainer variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
      <MoveContainer>
        <Link href="/create/3" passHref>
          <Goback variants={defaultFadeInVariants}>
            <Image alt={"lPolygon"} src={lPolygon} />
          </Goback>
        </Link>
        <StepIndicator currentStep={4} totalSteps={4} />
      </MoveContainer>
      <Title variants={defaultFadeInVariants}>{headerText}</Title>
      <ImageContainer variants={defaultFadeInVariants}>
        <Image alt={"letter"} src={letter} objectFit="scale-down" />
      </ImageContainer>
      <BoxContainer>
        <BlueBox
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText("http://www.hellsmate.com/receive/1");
            setHeaderText("복사되었습니다!");
          }}
          variants={defaultFadeInVariants}
        >
          <p>초대 링크 보내기</p>
        </BlueBox>

        <ConfirmBox
          onClick={() => {
            router.push("/");
          }}
          variants={defaultFadeInVariants}
        >
          <p>확인</p>
        </ConfirmBox>
      </BoxContainer>
    </FormContainer>
  );
}
