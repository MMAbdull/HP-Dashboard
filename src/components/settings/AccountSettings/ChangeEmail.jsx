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
    <div className="flex items-center justify-between rounded-lg p-6 border border-gray-600 mt-5">

      <div>
        <h3 className="text-lg font-semibold text-gray-950 mb-2">
          Email Address
        </h3>
        <p className="text-sm text-gray-600">
          Update your account email.
        </p>
      </div>

      {isEditing ? (
        <div className="flex gap-2">
          <input
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="New email"
            className="border border-gray-600 rounded px-2 py-1 text-sm text-gray-900"
          />

          <button onClick={handleSave} className="px-3 py-1 bg-gray-950 text-white rounded cursor-pointer">
            Save
          </button>

          <button onClick={() => setIsEditing(false)} className="px-3 py-1 border rounded text-gray-950 cursor-pointer">
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="text-lg font-semibold border border-gray-950 p-2 rounded-lg text-gray-600 cursor-pointer transition-all duration-200 hover:text-white hover:bg-gray-950"
        >
          Change
        </button>
      )}

    </div>
  );
}