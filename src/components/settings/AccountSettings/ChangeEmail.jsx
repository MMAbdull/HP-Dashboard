import { useContext, useState } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function ChangeEmail() {
  const { email, setEmail } = useContext(SettingsContext);

  const [newEmail, setNewEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (!newEmail.trim()) return;
    setEmail(newEmail);
    setNewEmail("");
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg p-4 sm:p-6 border border-gray-600 mt-5 gap-3">

      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-1">
          Email Address
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          Update your account email.
        </p>
      </div>


      <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-end">
        {isEditing ? (
          <>
            <input
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="New email"
              className="border border-gray-600 rounded px-2 py-1 text-sm text-gray-900"
            />
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-gray-950 text-white rounded cursor-pointer transition-all duration-200 hover:bg-gray-800"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 border rounded text-gray-950 cursor-pointer transition-all duration-200 hover:bg-gray-100"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm sm:text-lg font-semibold border border-gray-950 px-3 py-2 rounded-lg text-gray-600 cursor-pointer transition-all duration-200 hover:text-white hover:bg-gray-950"
          >
            Change
          </button>
        )}
      </div>

    </div>
  );
}