import { HTMLAttributes, useState } from "react";
import Profile from "components/common/Profile";
import BottomSheetResultSelectorItem from "components/pages/main/sections/MainPageBottomSheetSection/BottomSheetResultSelector/BottomSheetResultSelectorItem";
import {
  SelectorContainer,
  SelectorItemContainer,
} from "components/pages/main/sections/MainPageBottomSheetSection/BottomSheetResultSelector/styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  member: string;
  isOwner: boolean;
  checkStatusInfo: boolean[];
}

function BottomSheetResultSelector({ member, isOwner, checkStatusInfo, ...props }: Props) {
  const [checkStatus, setCheckStatus] = useState(checkStatusInfo);
  return (
    <SelectorContainer>
      <Profile isClickable={false} member={member} checkStatusInfo={[false, true, false]} />
      <SelectorItemContainer>
        <BottomSheetResultSelectorItem
          score={5}
          content="완수보다 더 수행했어요!"
          isChecked={checkStatus[0]}
          onClick={() => {
            if (isOwner) {
              setCheckStatus([true, false, false]);
            }
          }}
          isOwner={isOwner}
        />
        <BottomSheetResultSelectorItem
          score={3}
          content="미션을 완수했어요. "
          isChecked={checkStatus[1]}
          onClick={() => {
            if (isOwner) {
              setCheckStatus([false, true, false]);
            }
          }}
          isOwner={isOwner}
        />
        <BottomSheetResultSelectorItem
          score={1}
          content="죄송해요, 다음엔 꼭 할게요"
          isChecked={checkStatus[2]}
          onClick={() => {
            if (isOwner) {
              setCheckStatus([false, false, true]);
            }
          }}
          isOwner={isOwner}
        />
      </SelectorItemContainer>
    </SelectorContainer>
  );
}

export default BottomSheetResultSelector;
