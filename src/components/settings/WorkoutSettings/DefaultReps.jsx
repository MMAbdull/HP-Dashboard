import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function DefaultReps() {
  const { defaultReps, setDefaultReps } = useContext(SettingsContext);

  const options = [8, 10, 12];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-lg p-4 sm:p-6 border border-gray-600 mt-5">
      
      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-2">
          Default Reps
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          Set default number of reps for exercises.
        </p>
      </div>

      <div className="flex justify-center sm:justify-start gap-2 sm:gap-3">
        {options.map((rep) => (
          <button
            key={rep}
            onClick={() => setDefaultReps(rep)}
            className={`
              px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border-2 transition-all duration-200
              ${defaultReps === rep
                ? "bg-gray-950 text-white border-gray-950"
                : "bg-white text-gray-950 border-gray-300 hover:border-gray-950"}
            `}
          >
            {rep}
          </button>
        ))}
      </div>

    </div>
  );
}