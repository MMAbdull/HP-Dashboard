import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function AccountInfo() {
  const { name, email } = useContext(SettingsContext);

  return (
    <div className="flex items-center justify-between rounded-lg p-6 border border-gray-600 mt-5">

      <div>
        <h3 className="text-lg font-semibold text-gray-950 mb-2">
          Account Information
        </h3>
        <p className="text-sm text-gray-600">
          View your account details.
        </p>
      </div>

      <div className="flex">
        <div className="text-right">
          <p className="text-gray-950 font-semibold">{name}</p>
          <p className="text-gray-600 text-sm">{email}</p>
        </div>
      </div>
    </div>
  );
}