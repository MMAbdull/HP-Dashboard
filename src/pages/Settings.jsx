import { useState } from "react";
import SettingsTabs from "../components/settings/SettingsTabs";
import UserPreferences from "../components/settings/UserPreferences/PreferencesCard";
function Settings() {

  const [activeTab, setActiveTab] = useState("preferences");

  return (
    <div className="p-6">
      <h1 className="text-3xl text-gray-950 font-semibold mb-5">
        Settings
      </h1>
      <SettingsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <UserPreferences />
    </div>
  );
}

export default Settings;