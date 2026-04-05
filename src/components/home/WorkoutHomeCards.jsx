export default function WorkoutCards() {
  const workouts = [
    {
      title: "Upper Body",
      icon: "/assets/muscle.png",
      value: "6",
      time: "45 – 50m",
      image: "/assets/UpperBody.png",
    },
    {
      title: "Lower Body",
      icon: "/assets/muscle.png",
      value: "6",
      time: "30 – 60m",
      image: "/assets/LowerBody.png",
    },
    {
      title: "Full Body",
      icon: "/assets/muscle.png",
      value: "12",
      time: "45 – 75m",
      image: "/assets/FullBody.png",
    },
    {
      title: "Core & Abs",
      icon: "/assets/muscle.png",
      value: "4–6",
      time: "15 – 30m",
      image: "/assets/CoreAbs.png",
    },
    {
      title: "Cardio",
      icon: "/assets/intensity.png",
      value: "Moderate - High",
      time: "15 – 150m",
      image: "/assets/Cardio.png",
    },
    {
      title: "Swimming",
      icon: "/assets/swimming.png",
      value: "Technique + Laps",
      time: "30–45m",
      image: "/assets/Swimming-1.png",
    },
  ];

  return (
    <section className="mx-5 mt-10 space-y-6 bg-gray-950 rounded-3xl min-h-100">
      <div className="flex flex-col gap-5 p-6 rounded-3xl">
        <h2 className="text-white text-3xl font-semibold mb-4">
          Workouts
        </h2>


        <div className="flex items-center overflow-x-auto md:overflow-visible md:justify-center px-2">

          {workouts.map((workout, index) => (
            <div
              key={index}
              className="
              group
              flex items-center
              overflow-hidden
              pl-4
              m-2

              w-40 sm:w-45 md:w-50
              min-w-40 sm:min-w-45 md:min-w-0
              shrink-0 md:shrink

              h-40 sm:h-42 md:h-45

              bg-white
              shadow-[0_0_10px_rgba(0,0,0,.3)]
              rounded-2xl
              transition-all duration-500

              hover:w-65 sm:hover:w-75 md:hover:w-[320px]
              hover:bg-[#aadd00]
              "
            >

              <div className="flex flex-col items-start gap-2 shrink-0">
                <h1 className="text-lg sm:text-xl md:text-2xl text-black font-semibold">
                  {workout.title}
                </h1>

                <div className="flex items-center gap-3">
                  <img className="w-4 sm:w-5 opacity-70" src={workout.icon} />
                  <span className="text-black text-sm sm:text-base">
                    {workout.value}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <img className="w-4 sm:w-5" src="/assets/clock.png" />
                  <span className="text-black text-xs sm:text-sm md:text-base">
                    {workout.time}
                  </span>
                </div>

                <button className="w-16 sm:w-20 h-7 sm:h-8 text-xs sm:text-sm font-bold bg-black text-white rounded-lg">
                  Start
                </button>
              </div>

              <div className="h-full w-32 sm:w-36 md:w-40 shrink-0 overflow-hidden ml-auto">
                <img
                  src={workout.image}
                  className="
                  w-38 h-full object-cover
                  opacity-0 scale-x-95
                  origin-left
                  transition-all duration-500
                  group-hover:opacity-100
                  group-hover:scale-100
                  "
                />
              </div>
            </div>
          ))}

          <div className="
            relative
            pl-4
            m-2
            w-9 h-9 sm:w-10 sm:h-10
            shrink-0

            bg-white
            cursor-pointer
            shadow-[0_0_10px_rgba(0,0,0,.3)]
            rounded-full
            transition-all duration-500
            hover:bg-[#aadd00]
          ">
            <h1 className="absolute left-1 bottom-0 text-4xl sm:text-5xl text-black/50">
              +
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}