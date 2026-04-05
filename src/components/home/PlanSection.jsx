// components/WeeklyPlan.jsx
export default function WeeklyPlan() {
  const plan = [
    {
      day: "Sun",
      date: "Feb 2",
      workout: "Rest Day",
      muscles: "",
      exercises: "",
      sets: "",
      et: "",
      notes: "Full recovery & sleep",
      status: "—",
      color: "text-blue-500",
      hoverColor: "hover:bg-blue-400/10",
    },
    {
      day: "Mon",
      date: "Feb 3",
      workout: "Upper Body",
      muscles: "Chest & Triceps",
      exercises: "Bench Press • Incline DB • Cable Fly",
      sets: "4 × 10",
      et: "45m",
      notes: "Controlled tempo",
      status: "Completed",
      color: "text-[#aadd00]",
      hoverColor: "hover:bg-[#aadd00]/5",
    },
    {
      day: "Tue",
      date: "Feb 4",
      workout: "Lower Body",
      muscles: "Quads & Glutes",
      exercises: "Squats • Leg Press • Lunges",
      sets: "5 × 8",
      et: "50m",
      notes: "Focus on depth",
      status: "In Progress",
      color: "text-yellow-400",
      hoverColor: "hover:bg-yellow-400/10",
    },
    {
      day: "Wed",
      date: "Feb 5",
      workout: "Cardio",
      muscles: "Full Body",
      exercises: "Treadmill • Cycling • Jump Rope",
      sets: "",
      et: "30m",
      notes: "Moderate intensity",
      status: "Not Started",
      color: "text-red-500",
      hoverColor: "hover:bg-red-500/10",
    },
    {
      day: "Thu",
      date: "Feb 6",
      workout: "Rest Day",
      muscles: "",
      exercises: "",
      sets: "",
      et: "",
      notes: "Mobility & stretching",
      status: "—",
      color: "text-blue-400",
      hoverColor: "hover:bg-blue-400/10",
    },
    {
      day: "Fri",
      date: "Feb 7",
      workout: "Core",
      muscles: "Abs & Lower Back",
      exercises: "Plank • Hanging Raises • Russian Twist",
      sets: "4 × 15",
      et: "30m",
      notes: "Slow & controlled",
      status: "Not Started",
      color: "text-red-500",
      hoverColor: "hover:bg-red-500/10",
    },
    {
      day: "Sat",
      date: "Feb 8",
      workout: "Swimming",
      muscles: "Full Body",
      exercises: "Freestyle • Backstroke",
      sets: "80M • 4",
      et: "30m",
      notes: "Easy pace",
      status: "In Progress",
      color: "text-yellow-400",
      hoverColor: "hover:bg-yellow-400/10",
    },
  ];

  return (
    <section className="mx-5 mt-10 mb-10 space-y-6 bg-gray-950 rounded-3xl min-h-100">
      <div className="flex flex-col gap-10 bg-gray-950 p-6 rounded-3xl">
        <h2 className="text-white text-3xl font-semibold mb-5 text-center md:text-left">
          Weekly Plan
        </h2>

        <div className="flex flex-col gap-4">
          {plan.map((item, idx) => (
            <div
              key={idx}
              className={`group flex flex-col md:flex-row md:items-center gap-4 md:gap-6 rounded-2xl bg-white/5 px-5 py-4 transition-all duration-200 ${item.hoverColor}`}
            >
              {/* Day / Date */}
              <div className="flex justify-between md:flex-col w-full md:w-auto">
                <p className="text-white text-lg font-semibold">{item.day}</p>
                <p className={`text-white/40 text-xs transition-all duration-200 group-hover:${item.color.replace("text", "text")}`}>
                  {item.date}
                </p>
              </div>

              {/* Workout */}
              {item.workout && (
                <div className="flex flex-col w-full md:w-auto">
                  <p className="text-white/40 text-xs uppercase transition-all duration-200 group-hover:text-white">
                    Workout
                  </p>
                  <p className={`text-sm font-medium transition-all duration-200 group-hover:${item.color.replace("text", "text")}`}>
                    {item.workout}
                  </p>
                </div>
              )}

              {/* Muscles */}
              {item.muscles && (
                <div className="flex flex-col w-full md:w-auto">
                  <p className="text-white/40 text-xs uppercase transition-all duration-200 group-hover:text-white">
                    Muscles
                  </p>
                  <p className={`text-sm transition-all duration-200 group-hover:${item.color.replace("text", "text")}`}>
                    {item.muscles}
                  </p>
                </div>
              )}

              {/* Exercises / Notes / ET / Sets / Status */}
              <div className="flex flex-col md:flex-row flex-1 gap-2 md:gap-4">
                {item.exercises && (
                  <div className="flex-1">
                    <p className="text-white/40 text-xs uppercase md:hidden">Exercises</p>
                    <p className={`text-sm truncate transition-all duration-200 group-hover:${item.color.replace("text", "text")}`}>
                      {item.exercises}
                    </p>
                  </div>
                )}

                {item.notes && (
                  <div className="flex-1">
                    <p className="text-white/40 text-xs uppercase md:hidden">Notes</p>
                    <p className={`text-sm truncate transition-all duration-200 group-hover:${item.color.replace("text", "text")}`}>
                      {item.notes}
                    </p>
                  </div>
                )}

                {item.sets && (
                  <div className="min-w-12.5 text-center">
                    <p className="text-white/40 text-xs uppercase md:hidden">Sets</p>
                    <p className={`text-sm transition-all duration-200 group-hover:${item.color.replace("text", "text")}`}>
                      {item.sets}
                    </p>
                  </div>
                )}

                {item.et && (
                  <div className="min-w-12.5 text-center">
                    <p className="text-white/40 text-xs uppercase md:hidden">ET</p>
                    <p className={`text-sm transition-all duration-200 group-hover:${item.color.replace("text", "text")}`}>
                      {item.et}
                    </p>
                  </div>
                )}

                {item.status && (
                  <div className="min-w-15 text-right">
                    <p className="text-white/40 text-xs uppercase md:hidden">Status</p>
                    <p className={`text-sm font-medium transition-all duration-200 group-hover:${item.color.replace("text", "text")}`}>
                      {item.status}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}