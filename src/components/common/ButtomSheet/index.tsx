import React, { ReactNode } from "react";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

import { bottomSheetVariants, ContentWrapper, DimBackdrop } from "./styles";
import { DefaultMotionDiv } from "../motions";
import PortalWrapper from "../PortalWrapper";

export interface BottomSheetModalProps {
  isShowing: boolean;
  children: ReactNode;
  onClose: VoidFunction;
}

export default function BottomSheet({ isShowing, children, onClose }: BottomSheetModalProps) {
  const onDeleteHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    onClose();
  };

  return (
    <PortalWrapper isShowing={isShowing}>
      <DefaultMotionDiv initial="initial" animate="animate" exit="exit" variants={staggerOne}>
        <DimBackdrop onClick={onDeleteHandler} variants={defaultFadeInVariants}>
          <ContentWrapper variants={bottomSheetVariants}>{children}</ContentWrapper>
        </DimBackdrop>
      </DefaultMotionDiv>
    </PortalWrapper>
  );
}
