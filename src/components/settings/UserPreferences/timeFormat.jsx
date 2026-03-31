import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function TimeFormat() {

  const { timeFormat, setTimeFormat } = useContext(SettingsContext);

  return (
    <div className="flex justify-between items-center border border-gray-500 rounded-lg p-6 shadow-md">
      <div>
      <h3 className="text-lg font-semibold text-gray-950 mb-4">
        Time Format
      </h3>
      <p className="text-sm text-gray-600 font-semibold mb-4">
        Set your preferred time format.
      </p>
      </div>

      <div className="flex gap-4">


        <button
          onClick={() => setTimeFormat("12")}
          className={`
            px-4 py-4 text-lg rounded-full border-2 cursor-pointer transition-all duration-200
            ${timeFormat === "12"
              ? "border-[#aadd00] text-gray-950 font-semibold"
              : "text-gray-950 font-semibold border-gray-950"}
          `}
        >
          12h
        </button>

        {/* 24H */}
        <button
          onClick={() => setTimeFormat("24")}
          className={`
            px-4 py-4 rounded-full  text-lg border-2 cursor-pointer transition-all duration-200
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