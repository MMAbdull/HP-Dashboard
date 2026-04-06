export default function WorkoutCards() {

  const workouts = [
    {
      name: "Upper Body",
      muscle: "Chest & Triceps",
      exercises: ["Bench Press", "Incline Dumbbell Press", "Tricep Dips"],
      sets: "4",
      reps: "8-10",
      time: "35 min",
      progress: 50,
      color: "bg-yellow-400",
      text: "text-yellow-400",
      border: "border-yellow-400"
    },
    {
      name: "Upper Body",
      muscle: "Chest & Triceps",
      exercises: ["Push Ups", "Cable Fly", "Tricep Pushdown"],
      sets: "3",
      reps: "10-12",
      time: "25 min",
      progress: 0,
      color: "bg-red-600",
      text: "text-red-600",
      border: "border-red-600"
    },
    {
      name: "Upper Body",
      muscle: "Chest & Triceps",
      exercises: ["Decline Bench", "Chest Press Machine", "Overhead Tricep Extension"],
      sets: "3",
      reps: "12",
      time: "20 min",
      progress: 100,
      color: "bg-[#aadd00]",
      text: "text-[#aadd00]",
      border: "border-[#aadd00]"
    }
  ];

  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      {workouts.map((workout, i) => (
        <div
          key={i}
          className={`bg-gray-950 border ${workout.border} rounded-2xl p-4 sm:p-6 shadow-lg`}
        >
          <div className="flex justify-between items-start sm:items-center mb-2 sm:mb-3">
            <p className={`inline-block text-xs sm:text-sm font-semibold p-1 sm:p-2 border rounded-xl ${workout.border} ${workout.text}`}>
              {today}
            </p>
            <div className="relative group w-6 h-9">
              <div className="absolute inset-0 flex items-center justify-center border-2 rounded-4xl cursor-pointer transition-all duration-200 group-hover:bg-[#aadd00]">
                <img src="/assets/Dotted-Settings.png" alt="Widget Settings" className="w-4 h-6 absolute transition-all duration-200 group-hover:opacity-0" />
                <img src="/assets/Dotted-Settings-G.png" alt="Widget Settings hover" className="w-4 h-6 absolute opacity-0 transition-all duration-200 group-hover:opacity-100" />
              </div>
            </div>
          </div>

          <p className="text-white font-bold text-lg sm:text-xl">{workout.name}</p>
          <p className={`text-sm sm:text-base mb-2 ${workout.text}`}>{workout.muscle}</p>

          <ul className="text-white/80 text-xs sm:text-sm mb-3 space-y-1">
            {workout.exercises.map((ex, idx) => (
              <li key={idx}>• {ex}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-2 gap-2">
            <div>
              <p className="text-white/70 text-xs sm:text-sm">{workout.sets} sets • {workout.reps} reps</p>
              <p className="text-white/70 text-xs sm:text-sm">Est. Time: {workout.time}</p>
            </div>

            <div className="flex gap-2 mt-1 sm:mt-0">
              <p className={`text-xs sm:text-sm px-2 py-1 rounded-full border ${workout.border} ${workout.text}`}>
                {workout.progress}%
              </p>
              <p className={`text-xs sm:text-sm px-3 py-1 rounded-full border ${workout.border} ${workout.text}`}>
                Progress
              </p>
            </div>
          </div>

          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-2 ${workout.color} rounded-full transition-all duration-500`}
              style={{ width: `${workout.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}