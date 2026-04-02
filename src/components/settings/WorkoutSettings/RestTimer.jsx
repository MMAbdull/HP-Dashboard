import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function RestTimer() {
  const { restTime, setRestTime } = useContext(SettingsContext);

  const options = [30, 60, 90, 120];

  return (
    <div className="flex items-center justify-between rounded-lg p-6 border border-gray-600 mt-5">
      
      <div>
        <h3 className="text-lg font-semibold text-gray-950 mb-2">
          Rest Timer
        </h3>
        <p className="text-sm text-gray-600">
          Set your default rest time between sets.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {options.map((time) => (
          <button
            key={time}
            onClick={() => setRestTime(time)}
            className={`
              px-4 py-2 rounded-lg border-2 transition-all duration-200
              ${restTime === time
                ? "bg-gray-950 text-white border-gray-950"
                : "bg-white text-gray-950 border-gray-300 hover:border-gray-950"}
            `}
          >
            {time}s
          </button>
        ))}
      </div>

    </div>
  );
}