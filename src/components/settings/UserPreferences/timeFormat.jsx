import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function TimeFormat() {

  const { timeFormat, setTimeFormat } = useContext(SettingsContext);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border border-gray-500 rounded-lg p-4 sm:p-6 shadow-md">


      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-2 sm:mb-4">
          Time Format
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 font-semibold">
          Set your preferred time format.
        </p>
      </div>


      <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">

        <button
          onClick={() => setTimeFormat("12")}
          className={`
            px-4 py-3 sm:py-4 text-sm sm:text-lg rounded-full border-2 cursor-pointer transition-all duration-200
            ${timeFormat === "12"
              ? "border-[#aadd00] text-gray-950 font-semibold"
              : "text-gray-950 font-semibold border-gray-950"}
          `}
        >
          12h
        </button>

        <button
          onClick={() => setTimeFormat("24")}
          className={`
            px-4 py-4 sm:py-4 text-sm sm:text-lg rounded-full border-2 cursor-pointer transition-all duration-200
            ${timeFormat === "24"
              ? "border-[#aadd00] text-gray-950 font-semibold"
              : "text-gray-950 font-semibold border-gray-950"}
          `}
        >
          24h
        </button>

      </div>

    </div>
  );
}