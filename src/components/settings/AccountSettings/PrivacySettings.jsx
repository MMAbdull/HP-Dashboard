import { useState } from "react";

export default function PrivacySettings() {
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <div className="flex items-center justify-between rounded-lg p-6 border border-gray-600 mt-5">

      <div>
        <h3 className="text-lg font-semibold text-gray-950 mb-2">
          Private Account
        </h3>
        <p className="text-sm text-gray-600">
          Only you can see your workout data.
        </p>
      </div>

      <button
        onClick={() => setIsPrivate(!isPrivate)}
        className={`
          w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300
          ${isPrivate ?"bg-gray-950" : "bg-gray-400"}
        `}
      >
        <div
          className={`
            w-6 h-6 rounded-full shadow-md transform transition-all duration-300
            ${isPrivate ?  "translate-x-6 bg-[#aadd00]" : "translate-x-0 bg-white"}
          `}
        />
      </button>

    </div>
  );
}