import AccountInfo from "./AccountInfo";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import PrivacySettings from "./PrivacySettings";
import DangerZone from "./DangerZone";

export default function AccountSettingsCard() {
  return (
    <div>
      <AccountInfo/>
      <ChangeEmail/>
      <ChangePassword/>
      <PrivacySettings/>
      <DangerZone/>
    </div>
  );
}