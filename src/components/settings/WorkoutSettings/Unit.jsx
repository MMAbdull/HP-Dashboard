import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function Units() {
  const { unit, setUnit } = useContext(SettingsContext);

  const options = ["kg", "lb"];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-lg p-4 sm:p-6 border border-gray-600 mt-5">


      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-2">
          Weight Units
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          Choose how weights are displayed across your workouts.
        </p>
      </div>


      <div className="flex justify-center sm:justify-start gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setUnit(opt)}
            className={`
              px-4 py-4 sm:py-3 text-sm sm:text-lg font-semibold rounded-full cursor-pointer border-2 transition-all duration-200
              ${unit === opt
                ? "text-gray-950 border-[#aadd00]"
                : "text-gray-950 border-gray-950"}
            `}
          >
            {opt.toUpperCase()}
          </button>
        ))}
      </div>

    </div>
  );
}