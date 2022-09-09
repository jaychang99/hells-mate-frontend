import { AnchorHTMLAttributes } from "react";
import Image from "next/image";
import { StyledBlueNextAnchor } from "components/common/BlueNextAnchor/style";

import rPolygon from "/public/icons/rPolygon.svg";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function BlueNextAnchor(props: Props) {
  return (
    <StyledBlueNextAnchor {...props}>
      <Image alt={"next"} src={rPolygon} />
    </StyledBlueNextAnchor>
  );
}

export default BlueNextAnchor;
