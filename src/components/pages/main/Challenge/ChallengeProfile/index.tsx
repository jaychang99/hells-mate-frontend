import React, { HTMLAttributes, useEffect, useState } from "react";
import Profile from "components/common/Profile";
import {
  ChallengeProfileMoreButton,
  ChallengeProfileMoreButtonText,
  StyledChallengeProfile,
} from "components/pages/main/Challenge/ChallengeProfile/styles";
import { Member } from "types/api";

interface Props extends HTMLAttributes<HTMLDivElement> {
  members: Member[];
  challengeTitle: string;
  description: string;
}

function ChallengeProfile({ members, challengeTitle, description, ...props }: Props) {
  const [processedMembers, setProcessedMembers] = useState(
    members?.length > 3 ? members.slice(0, 2) : members
  );
  const [isMoreButton, setIsMoreButton] = useState(members?.length > 3 ? true : false);

  useEffect(() => {
    setProcessedMembers(members.length > 3 ? members.slice(0, 2) : members);
    setIsMoreButton(members.length > 3 ? true : false);
  }, [members]);

  return (
    <StyledChallengeProfile {...props}>
      {processedMembers.map((member, index) => (
        <Profile
          challengeTitle={challengeTitle}
          description={description}
          member={member}
          key={index}
          checkStatusInfo={[true, false, false]}
        />
      ))}
      {isMoreButton && (
        <ChallengeProfileMoreButton>
          <ChallengeProfileMoreButtonText>+ {members.length - 2}</ChallengeProfileMoreButtonText>
        </ChallengeProfileMoreButton>
      )}
    </StyledChallengeProfile>
  );
}

export default ChallengeProfile;
