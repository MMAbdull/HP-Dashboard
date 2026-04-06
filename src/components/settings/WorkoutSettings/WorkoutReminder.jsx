import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function WorkoutReminder() {
  const { workoutReminder, setWorkoutReminder } = useContext(SettingsContext);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-lg p-4 sm:p-6 border border-gray-600 mt-5">
      

      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-2">
          Workout Reminder
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          Get reminders to stay consistent with your workouts.
        </p>
      </div>


      <div className="flex justify-center sm:justify-start">
        <button
          onClick={() => setWorkoutReminder(!workoutReminder)}
          className={`
            w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300
            ${workoutReminder ? "bg-gray-950" : "bg-gray-400"}
          `}
        >
          <div
            className={`
              w-6 h-6 rounded-full shadow-md transform transition-all duration-300
              ${workoutReminder ? "translate-x-6 bg-[#aadd00]" : "translate-x-0 bg-white"}
            `}
          />
        </button>
      </div>

    </div>
  );
}