import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function AccountInfo() {
  const { name, email } = useContext(SettingsContext);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg p-4 sm:p-6 border border-gray-600 mt-5 gap-3">
      

      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-1">
          Account Information
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          View your account details.
        </p>
      </div>


      <div className="flex justify-center sm:justify-end">
        <div className="text-center sm:text-right">
          <p className="text-gray-950 font-semibold">{name}</p>
          <p className="text-gray-600 text-sm">{email}</p>
        </div>
      </div>

    </div>
  );
}