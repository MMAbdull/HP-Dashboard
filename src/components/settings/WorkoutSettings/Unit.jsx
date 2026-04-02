import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function Units() {
  const { unit, setUnit } = useContext(SettingsContext);

  const options = ["kg", "lb"];

  return (
    <div className="flex items-center justify-between rounded-lg p-6 border border-gray-600 mt-5">
      
      <div>
        <h3 className="text-lg font-semibold text-gray-950 mb-2">
          Weight Units
        </h3>
        <p className="text-sm text-gray-600">
          Choose how weights are displayed across your workouts.
        </p>
      </div>

      <div className="flex gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setUnit(opt)}
            className={`
              px-4 py-3 text-lg font-semibold rounded-full cursor-pointer border-2 transition-all duration-200
              ${unit === opt
                ? "text-gray-950 border-[#aadd00]"
                : " text-gray-950 border-gray-300 hover:border-gray-950"}
            `}
          >
            {opt.toUpperCase()}
          </button>
        ))}
      </div>

    </div>
  );
}