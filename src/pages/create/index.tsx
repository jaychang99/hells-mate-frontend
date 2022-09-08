import SetDay from "./1";
import SetGroup from "./2";
import SetMission from "./3";
import InvitePage from "./4";

export default function Create() {
  const components = [
    <SetDay key="Day" />,
    <SetGroup key="Group" />,
    <SetMission key="Mission" />,
    <InvitePage key="Invite" />,
  ];

  return <>{components[0]}</>;
}
