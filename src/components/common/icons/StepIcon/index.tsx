import Icon from "components/common/icons/Icon";

import arrowLeftIcon from "/public/icons/arrow_left.svg";
import arrowRightIcon from "/public/icons/arrow_right.svg";

interface Props {
  variant: "previous" | "next";
}

function StepIcon({ variant }: Props) {
  return (
    <Icon src={variant === "previous" ? arrowLeftIcon.src : arrowRightIcon.src} size="small" />
  );
}

export default StepIcon;
