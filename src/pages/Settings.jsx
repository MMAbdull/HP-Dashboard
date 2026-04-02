import { useState } from "react";
import SettingsTabs from "../components/settings/SettingsTabs";
import UserPreferences from "../components/settings/UserPreferences/PreferencesCard";
import WorkoutsSettingsCards from "../components/settings/WorkoutSettings/WorkoutCard";
import AccountSettingsCard from "../components/settings/AccountSettings/AccountSettingsCard";
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
      <div className="mt-6">
        {activeTab === "preferences" && <UserPreferences />}
        {activeTab === "workouts" && <WorkoutsSettingsCards />}
        {activeTab === "account" && <AccountSettingsCard/>}
      </div>
    </div>
  );
}

export default Settings;