import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { BlueGt } from "components/common/BlueGt";
import { MoveContainer } from "components/common/Container";
import { SubDescript, Title } from "components/common/Description";
import { StyledInput, StyledTextarea } from "components/common/Input/styles";
import { motion } from "framer-motion";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

import lPolygon from "../../../images/lPolygon.svg";
import rPolygon from "../../../images/rPolygon.svg";

const FormContainer = styled(motion.form)`
  padding: 53px 16px;
`;

const GroupDescript = styled(SubDescript)`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 0;
`;

export default function SetGroup() {
  const [name, setName] = useState("");
  const [groupDes, setGroupDes] = useState("");

  const aboutName = (e: any) => {
    const value = e.target.value;
    setName(value);
  };

  const aboutGroup = (e: any) => {
    const value = e.target.value;
    setGroupDes(value);
  };

  const Goback = styled(motion.a)`
    font-size: 20px;
  `;

  return (
    <FormContainer variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
      <MoveContainer>
        <Link href="/create/1" passHref>
          <Goback variants={defaultFadeInVariants}>
            <Image alt={"back"} src={lPolygon} />
          </Goback>
        </Link>
        <motion.span variants={defaultFadeInVariants}>
          <b>2</b> / 4
        </motion.span>
      </MoveContainer>
      <Title variants={defaultFadeInVariants}>
        그룹에 대한
        <br />
        정보를 알려주세요.
      </Title>
      <GroupDescript variants={defaultFadeInVariants}>그룹의 이름을 입력해주세요.</GroupDescript>
      <StyledInput
        onChange={aboutName}
        value={name}
        variants={defaultFadeInVariants}
        placeholder="그룹의 이름을 입력해주세요"
      />
      <GroupDescript variants={defaultFadeInVariants}>그룹에 대해 설명해주세요.</GroupDescript>
      <StyledTextarea
        value={groupDes}
        onChange={aboutGroup}
        variants={defaultFadeInVariants}
        placeholder="그룹에 대해 설명해주세요"
      />
      <Link href="/create/3" passHref>
        <BlueGt>
          <Image alt={"next"} src={rPolygon} />
        </BlueGt>
      </Link>
    </FormContainer>
  );
}
