export default function ProgressSection() {
  const stats = [
    {
      value: "6",
      trend: "↑",
      color: "text-green-500",
      title: "Upper Body Muscle Groups",
      subtitle: "6+ exercises each",
    },
    {
      value: "1",
      trend: "↑",
      color: "text-green-500",
      title: "Lower Body Focus",
      subtitle: "6 exercises",
    },
    {
      value: "0",
      trend: "↓",
      color: "text-orange-500",
      title: "Cardio / Swimming",
      subtitle: "1 session",
    },
    {
      value: "21",
      color: "text-[#aadd00]",
      title: "Total Exercises",
      subtitle: "Sum of all workouts",
    },
    {
      value: "10h 12m",
      color: "text-[#aadd00]",
      title: "Avg Time",
      subtitle: "Per week",
    },
    {
      value: "5,100",
      color: "text-[#aadd00]",
      title: "kcal / week",
      subtitle: "Burned",
    },
  ];

  return (
    <section className="mx-5 mt-10 space-y-6 bg-gray-950 rounded-3xl">
      <div className="flex flex-col gap-10 p-6">
        <h2 className="text-white text-3xl font-semibold text-center md:text-left">
          Weekly Progress
        </h2>

        <div className="flex items-center overflow-x-auto md:overflow-visible md:justify-center gap-8 md:gap-10 py-7 px-3.5 md:px-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4">

              {/* Stat Card */}
              <div className="flex flex-col items-center justify-center shrink-0 min-w-37.5 md:min-w-0">
                <div className="flex items-center space-x-2">
                  <span className={`text-4xl md:text-5xl font-extrabold ${stat.color}`}>
                    {stat.value}
                  </span>
                  {stat.trend && (
                    <span className={`${stat.color} font-bold text-lg md:text-xl`}>
                      {stat.trend}
                    </span>
                  )}
                </div>

                <span className="text-sm md:text-lg font-bold text-white/50 mt-3 md:mt-2">
                  {stat.title}
                </span>
                <span className="text-xs md:text-sm text-white/50 font-semibold mt-1">
                  {stat.subtitle}
                </span>

                <div className="w-24 md:w-24 h-2 rounded-full mt-3">
                  <div className={`h-2 rounded-full w-full ${stat.color.replace("text", "bg")}`}></div>
                </div>
              </div>

              {index !== stats.length - 1 && (
                <p className="hidden md:block text-5xl text-white/80">|</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}