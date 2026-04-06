import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function DefaultSets() {
  const { defaultSets, setDefaultSets } = useContext(SettingsContext);

  const options = [3, 4, 5];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-lg p-4 sm:p-6 border border-gray-600 mt-5">
      
      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-2">
          Default Sets
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          Set default number of sets for exercises.
        </p>
      </div>

      <div className="flex justify-center sm:justify-start gap-2 sm:gap-3">
        {options.map((set) => (
          <button
            key={set}
            onClick={() => setDefaultSets(set)}
            className={`
              px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border-2 transition-all duration-200
              ${defaultSets === set
                ? "bg-gray-950 text-white border-gray-950"
                : "bg-white text-gray-950 border-gray-300 hover:border-gray-950"}
            `}
          >
            {set}
          </button>
        ))}
      </div>

    </div>
  );
}