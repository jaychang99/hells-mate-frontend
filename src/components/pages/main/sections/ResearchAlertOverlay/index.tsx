import Image from "next/image";
import { css } from "@emotion/react";
import Button from "components/common/Button";
import { Title } from "components/common/Description";
import Modal from "components/common/Modal";
import {
  ResearchAlertOverlayDescriptionText,
  StyledResearchAlertOverlay,
} from "components/pages/main/sections/ResearchAlertOverlay/styles";
import WindowResizeIndicator from "components/pages/main/sections/ResearchAlertOverlay/WindowResizeIndicator";
import { addSeconds } from "date-fns";
import { resetAnchorStyle } from "styles/utils/anchor";

import signature from "/public/images/hellsmate_signature.png";

// 유저가 한 번 서비스 이용에 동의하면 localStorage에 저장해서 다시 뜨지 않도록 하는 구조
interface Props {
  isShown: boolean;
  onAccept: () => void;
}

// 사용자가 이용승인한 것을 몇 초 동안 유지할지
const ACCEPT_COOKIE_AGE = 60 * 30;

function ReasearchAlertOverlay({ isShown, onAccept, ...props }: Props) {
  const today = new Date();

  //
  function handleAgree() {
    document.cookie = `agreed=true; expires=${addSeconds(today, ACCEPT_COOKIE_AGE).toUTCString()}`;
    onAccept();
  }

  return (
    <Modal onlyContent={true} open={isShown} onClose={onAccept}>
      <StyledResearchAlertOverlay>
        <Image
          alt={"hellsmate_signature"}
          src={signature}
          width={300}
          height={80}
          objectFit="cover"
        />
        <Title
          css={css`
            margin-top: 50px;
          `}
        >
          아가리어터를 위한 서비스를 탐색해보실래요?
        </Title>
        <ResearchAlertOverlayDescriptionText>
          안녕하세요, 저는 웹 서비스의 사용성 개선에 대해 연구 중인 성균관대학교 학부생 입니다.
          <br />
          <br />
          현재, 입으로만 다이어트 하는 유저를 지인과의 미션 인증제도를 통한 기록 방식으로 해결하는
          서비스를 제작하는 과정 중에 있습니다.
          <br />
          <br />
          저희는 Google Analytics 로 유저의 행동 양식에 대해 수집하며 연구를 진행하고 있습니다.{" "}
          <br />
          <br /> 측정 데이터는 익명으로 수집되고, 개인을 특정할 수 없습니다. <br />
          <br />
          관련된 문의는 &nbsp;
          <a
            css={css`
              ${resetAnchorStyle}
            `}
            href="mailto:ch79333@gmail.com"
          >
            ch79333@gmail.com
          </a>
          ,&nbsp;
          <a
            css={css`
              ${resetAnchorStyle}
            `}
            href="mailto:jaychang99@gmail.com"
          >
            jaychang99@gmail.com
          </a>
          로 남겨주세요!
        </ResearchAlertOverlayDescriptionText>
        <WindowResizeIndicator
          css={css`
            margin-top: 30px;
          `}
        />
        <Button
          css={css`
            margin-top: 30px;
            max-width: 280px;
          `}
          variant="default"
          onClick={handleAgree}
        >
          서비스 체험해보기!
        </Button>
      </StyledResearchAlertOverlay>
    </Modal>
  );
}

export default ReasearchAlertOverlay;
