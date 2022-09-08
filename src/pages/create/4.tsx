import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { ImageContainer, MoveContainer } from "components/common/Container";
import { motion } from "framer-motion";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

import letter from "../../../images/letter.svg";
import lPolygon from "../../../images/lPolygon.svg";
import { BoxStyle } from "../../components/common/BlueBox";
import { Title } from "../../components/common/Description";

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
        <motion.span variants={defaultFadeInVariants}>
          <b>4</b> / 4
        </motion.span>
      </MoveContainer>
      <Title variants={defaultFadeInVariants}>{headerText}</Title>
      <ImageContainer variants={defaultFadeInVariants}>
        <Image alt={"letter"} src={letter} objectFit="scale-down" />
      </ImageContainer>
      <BoxContainer>
        <BlueBox
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText("http://localhost:3000/receive/1");
            setHeaderText("복사되었습니다!");
          }}
          variants={defaultFadeInVariants}
        >
          <p>초대 링크 보내기</p>
        </BlueBox>

        <ConfirmBox variants={defaultFadeInVariants}>
          <p>확인</p>
        </ConfirmBox>
      </BoxContainer>
    </FormContainer>
  );
}
