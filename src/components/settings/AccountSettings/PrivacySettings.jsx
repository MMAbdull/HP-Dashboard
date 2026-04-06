import { useState } from "react";

export default function PrivacySettings() {
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between rounded-lg p-4 sm:p-6 border border-gray-600 mt-5 gap-3">

      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-1">
          Private Account
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          Only you can see your workout data.
        </p>
      </div>

  
      <button
        onClick={() => setIsPrivate(!isPrivate)}
        className={`
          w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300
          ${isPrivate ? "bg-gray-950" : "bg-gray-400"}
        `}
      >
        <div
          className={`
            w-6 h-6 rounded-full shadow-md transform transition-all duration-300
            ${isPrivate ? "translate-x-6 bg-[#aadd00]" : "translate-x-0 bg-white"}
          `}
        />
      </button>

    </div>
  );
}