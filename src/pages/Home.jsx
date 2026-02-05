function Home() {
  return (
    <main>
      <section className="mx-5 mt-10 space-y-6 bg-gray-950 rounded-3xl min-h-100">
        <div className="flex flex-col gap-5 bg-gray-950 p-6 rounded-3xl">
          <h2 className="text-white text-3xl font-semibold mb-4">Workouts</h2>
          <div className="flex justify-center items-center">    {/*Reminder To me to Replace with Grid (Servse the idea) */}
            <div className="
            group
            flex items-center      
            overflow-hidden
            pl-4
            m-5
            w-50
            h-45
           bg-white
            shadow-[0_0_10px_rgba(0,0,0,.3)]
            rounded-2xl
            transition-all duration-500
            hover:w-80
            hover:bg-[#aadd00]
            ">
              <div className="
          flex 
          flex-col
          items-start 
          gap-2
          shrink-0
          ">
                <h1 className="text-2xl text-black font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Upper Body</h1>
                <div className="flex items-center gap-3">
                  <img className="w-5 opacity-70" src="/assets/muscle.png" alt="Workout-Icon" />
                  <span className="text-black">6</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5" src="/assets/clock.png" alt="Time-Icon" />
                  <span className="text-black">45 – 50m</span>
                </div>

                <button className="w-20 h-8 font-bold bg-black cursor-pointer rounded-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Start</button>
              </div>
              <div className="
            h-45
            w-45
            shrink-0
            overflow-hidden
            ">
                <img src="/assets/UpperBody.png" alt="Upper-img" className="
            w-full
            h-full
            object-cover
            opacity-0
            scale-x-95
            origin-left
            delay-100
            transition-all duration-500
            group-hover:opacity-100
            group-hover:scale-100
              " />
              </div>

            </div>
            <div className="
        group
        flex items-center
        overflow-hidden
        pl-4
        m-5
        w-50
        h-45
        bg-white
        shadow-[0_0_10px_rgba(0,0,0,.3)]
        rounded-2xl
        transition-all duration-500
        hover:w-80
        hover:bg-[#aadd00]
        ">
              <div className="
          flex 
          flex-col
          items-start 
          gap-2
          shrink-0
          ">
                <h1 className="text-2xl text-black font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Lower Body</h1>
                <div className="flex items-center gap-3">
                  <img className="w-5 opacity-70" src="/assets/muscle.png" alt="Workout-Icon" />
                  <span className="text-black">6</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5" src="/assets/clock.png" alt="Time-Icon" />
                  <span className="text-black">30 – 60m</span>
                </div>
                <button className="w-20 h-8 font-bold bg-black cursor-pointer rounded-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Start</button>
              </div>
              <div className="
            h-45
            w-45
            shrink-0
            overflow-hidden
          ">
                <img src="/assets/LowerBody.png" alt="Lower-img" className=" 
          w-full
          h-full
          pr-8
          object-cover
          opacity-0
          scale-x-95
          origin-left
          delay-100
          transition-all duration-500
          group-hover:opacity-100
          group-hover:scale-100
          
          " />
              </div>
            </div>
            <div className="
        group
        flex items-center
        overflow-hidden
        pl-4
        m-5
        w-50
        h-45
        bg-white
        shadow-[0_0_10px_rgba(0,0,0,.3)]
        rounded-2xl
        transition-all duration-500
        hover:w-80
        hover:bg-[#aadd00]
        ">
              <div className="
          flex 
          flex-col
          items-start 
          gap-2
          shrink-0
          ">
                <h1 className="text-2xl text-black font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Full Body</h1>
                <div className="flex items-center gap-3">
                  <img className="w-5 opacity-70" src="/assets/muscle.png" alt="Workout-Icon" />
                  <span className="text-black">12</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5" src="/assets/clock.png" alt="Time-Icon" />
                  <span className="text-black">45 – 75m</span>
                </div>
                <button className="w-20 h-8 font-bold bg-black cursor-pointer rounded-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Start</button>
              </div>
              <div className="
            h-45
            ml-5
            shrink-0
            overflow-hidden
            group-hover:w-45
          
          ">
                <img src="/assets/FullBody.png" alt="Full-img" className=" 
          w-full
          h-full
          object-cover
          opacity-0
          scale-x-95
          origin-left
          delay-100
          transition-all duration-500
          group-hover:opacity-100
          group-hover:scale-100
          
          " />
              </div>
            </div>
            <div className="
        group
        flex items-center
        overflow-hidden
        pl-4
        m-5
        w-50
        h-45
        bg-white
        shadow-[0_0_10px_rgba(0,0,0,.3)]
        rounded-2xl
        transition-all duration-500
        hover:w-80
        hover:bg-[#aadd00]
        ">
              <div className="
          flex 
          flex-col
          items-start 
          gap-2
          shrink-0
          ">
                <h1 className="text-2xl text-black font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Core & Abs</h1>
                <div className="flex items-center gap-3">
                  <img className="w-5 opacity-70" src="/assets/muscle.png" alt="Workout-Icon" />
                  <span className="text-black">4-6</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5" src="/assets/clock.png" alt="Time-Icon" />
                  <span className="text-black">15 – 30m</span>
                </div>
                <button className="w-20 h-8 font-bold bg-black cursor-pointer rounded-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Start</button>
              </div>
              <div className="
            h-45
            ml-4
            shrink-0
            overflow-hidden
            group-hover:w-45
          ">
                <img src="/assets/CoreAbs.png" alt="Core-img" className=" 
          w-full
          h-full
          object-cover
          opacity-0
          scale-x-95
          origin-left
          delay-100
          transition-all duration-500
          group-hover:opacity-100
          group-hover:scale-100
          
          " />
              </div>
            </div>
            <div className="
        group
        flex items-center
        overflow-hidden
        pl-4
        m-5
        w-50
        h-45
        bg-white
        shadow-[0_0_10px_rgba(0,0,0,.3)]
        rounded-2xl
        transition-all duration-500
        hover:w-80
        hover:bg-[#aadd00]
        ">
              <div className="
          flex 
          flex-col
          items-start 
          gap-2
          shrink-0
          ">
                <h1 className="text-2xl text-black font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Cardio</h1>
                <div className="flex items-center gap-3">
                  <img className="w-5 opacity-70" src="/assets/intensity.png" alt="Workout-Icon" />
                  <span className="text-black">Moderate - High</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5" src="/assets/clock.png" alt="Time-Icon" />
                  <span className="text-black">15 – 150m</span>
                </div>
                <button className="w-20 h-8 font-bold bg-black cursor-pointer rounded-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Start</button>
              </div>
              <div className="
          h-50
          w-45
          shrink-0
          overflow-hidden
          ">
                <img src="/assets/Cardio.png" alt="Cardio-img" className=" 
          w-full
          h-full
          object-cover
          opacity-0
          scale-x-95
          origin-left
          delay-100
          transition-all duration-500
          group-hover:opacity-100
          group-hover:scale-100
          
          " />
              </div>
            </div>
            <div className="
        group
        flex items-center
        overflow-hidden
        pl-4
        m-5
        w-50
        h-45
        bg-white
        shadow-[0_0_10px_rgba(0,0,0,.3)]
        rounded-2xl
        transition-all duration-500
        hover:w-80
        hover:bg-[#aadd00]
        ">
              <div className="
          flex 
          flex-col
          items-start 
          gap-2
          shrink-0
          ">
                <h1 className="text-2xl text-black font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Swimming</h1>
                <div className="flex items-center gap-3">
                  <img className="w-5 opacity-70" src="/assets/swimming.png" alt="Swim-Icon" />
                  <span className="text-black">Technique + Laps</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-5" src="/assets/clock.png" alt="Time-Icon" />
                  <span className="text-black">30–45m</span>
                </div>
                <button className="w-20 h-8 font-bold bg-black cursor-pointer rounded-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Start</button>
              </div>
              <div className="
            h-40
            w-36
            shrink-0
            overflow-hidden
          ">
                <img src="/assets/Swimming-1.png" alt="Gym-Pic" className=" 
          w-full
          h-full
          object-cover
          opacity-0
          scale-x-95
          origin-left
          delay-100
          transition-all duration-500
          group-hover:opacity-100
          group-hover:scale-100
          
          " />
              </div>
            </div>
            <div className="
          relative
          pl-4
          m-5
          w-10
          h-10
          bg-white
          cursor-pointer
          shadow-[0_0_10px_rgba(0,0,0,.3)]
          rounded-4xl
          transition-all duration-500
          hover:bg-[#aadd00]">
              <h1 className="absolute left-1 bottom-0 text-5xl text-black/50 rounded-2xl">+</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 mt-10 space-y-6 bg-gray-950 rounded-3xl min-h-100">

        <div className="flex flex-col gap-10 bg-gray-950 p-6 rounded-3xl">
          <h2 className="text-white text-3xl font-semibold mb-2">Weekly Progress</h2>

          <div className="
          flex justify-around items-center
          rounded-2xl
          px-5 py-5
          hover:shadow-xl
          transition-shadow duration-300
          text-center
          flex-wrap
          gap-10
          ">


            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1">
                <span className="text-5xl font-extrabold text-green-500">6</span>
                <span className="text-green-500 font-bold text-xl">↑</span>
              </div>
              <span className="text-lg font-bold text-white/50 mt-2">Upper Body Muscle Groups</span>
              <span className="text-white/50 font-semibold mt-1">6+ exercises each</span>

              <div className="w-24 h-2 rounded-full mt-2">
                <div className="h-2 bg-green-500 rounded-full w-full"></div>
              </div>
            </div>

            <p className="text-5xl text-white/80">|</p>


            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1">
                <span className="text-5xl font-extrabold text-green-500">1</span>
                <span className="text-green-500 font-bold text-xl">↑</span>
              </div>
              <span className="text-lg font-bold text-white/50 mt-2">Lower Body Focus</span>
              <span className="text-white/50 font-semibold mt-1">6 exercises</span>
              <div className="w-24 h-2 rounded-full mt-2">
                <div className="h-2 bg-green-500 rounded-full w-full"></div>
              </div>
            </div>

            <p className="text-5xl text-white/80">|</p>


            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1">
                <span className="text-5xl font-extrabold text-orange-500">0</span>
                <span className="text-orange-500 font-bold text-xl">↓</span>
              </div>
              <span className="text-lg font-bold text-white/50 mt-2">Cardio / Swimming</span>
              <span className="text-white/50 font-semibold mt-1">1 session</span>
              <div className="w-24 h-2 rounded-full mt-2">
                <div className="h-2 bg-orange-500 rounded-full w-full"></div>
              </div>
            </div>

            <p className="text-5xl text-white/80">|</p>


            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-[#aadd00]">21</span>
              <span className="text-lg font-bold text-white/50 mt-2">Total Exercises</span>
              <span className="text-white/50 font-semibold mt-1">Sum of all workouts</span>
              <div className="w-24 h-2 rounded-full mt-2">
                <div className="h-2 bg-[#aadd00] rounded-full w-full"></div>
              </div>
            </div>

            <p className="text-5xl text-white/80">|</p>


            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-[#aadd00]">10h 12m</span>
              <span className="text-lg font-bold text-white/50 mt-2">Avg Time</span>
              <span className="text-white/50 font-semibold mt-1">Per week</span>
              <div className="w-24 h-2 rounded-full mt-2">
                <div className="h-2 bg-[#aadd00] rounded-full w-full"></div>
              </div>
            </div>

            <p className="text-5xl text-white/80">|</p>


            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-[#aadd00]">5,100</span>
              <span className="text-lg font-bold text-white/50 mt-2">kcal / week</span>
              <span className="text-white/50 font-semibold mt-1">Burned</span>
              <div className="w-24 h-2 rounded-full mt-2">
                <div className="h-2 bg-[#aadd00] rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 mt-10 mb-10 space-y-6 bg-gray-950 rounded-3xl min-h-100">

        <div className="flex flex-col gap-10 bg-gray-950 p-6 rounded-3xl">

          <h2 className="text-white text-3xl font-semibold mb-5">
            Weekly Plan
          </h2>

          <div className="flex items-center gap-6 rounded-2xl bg-white/5 px-5 py-4 opacity-60">
            <div className="min-w-23">
              <p className="text-white text-lg font-semibold">Sun</p>
              <p className="text-white/40 text-xs">Feb 2</p>
            </div>

            <div className="min-w-30">
              <p className="text-white/40 text-xs uppercase">Workout</p>
              <p className="text-white/40 text-sm">Rest Day</p>
            </div>

            <div className="flex-1">
              <p className="text-white/40 text-xs uppercase">Notes</p>
              <p className="text-white/30 text-sm">Full recovery & sleep</p>
            </div>

            <div className="min-w-23 text-right">
              <p className="text-white/40 text-xs uppercase">Status</p>
              <p className="text-white/40 text-sm">—</p>
            </div>
          </div>

          <div className="flex items-center gap-6 rounded-2xl bg-white/5 px-5 py-4">
            <div className="min-w-23">
              <p className="text-white text-lg font-semibold">Mon</p>
              <p className="text-white/40 text-xs">Feb 3</p>
            </div>

            <div className="min-w-30">
              <p className="text-white/40 text-xs uppercase">Workout</p>
              <p className="text-[#aadd00] text-sm font-medium">Upper Body</p>
            </div>

            <div className="min-w-38">
              <p className="text-white/40 text-xs uppercase">Muscles</p>
              <p className="text-white text-sm">Chest & Triceps</p>
            </div>

            <div className="flex-1">
              <p className="text-white/40 text-xs uppercase">Exercises</p>
              <p className="text-white text-sm truncate">
                Bench Press • Incline DB • Cable Fly
              </p>
            </div>

            <div className="min-w-23 text-center">
              <p className="text-white/40 text-xs uppercase">Sets</p>
              <p className="text-white text-sm">4 × 10</p>
            </div>

            <div className="min-w-18 text-center">
              <p className="text-white/40 text-xs uppercase">ET</p>
              <p className="text-white text-sm">45m</p>
            </div>

            <div className="min-w-35">
              <p className="text-white/40 text-xs uppercase">Notes</p>
              <p className="text-white/50 text-sm truncate">
                Controlled tempo
              </p>
            </div>

            <div className="min-w-23 text-right">
              <p className="text-white/40 text-xs uppercase">Status</p>
              <p className="text-[#aadd00] text-sm font-medium">Completed</p>
            </div>
          </div>

          <div className="flex items-center gap-6 rounded-2xl bg-white/5 px-5 py-4">
            <div className="min-w-23">
              <p className="text-white text-lg font-semibold">Tue</p>
              <p className="text-white/40 text-xs">Feb 4</p>
            </div>

            <div className="min-w-23">
              <p className="text-white/40 text-xs uppercase">Workout</p>
              <p className="text-[#aadd00] text-sm font-medium">Lower Body</p>
            </div>

            <div className="min-w-23">
              <p className="text-white/40 text-xs uppercase">Muscles</p>
              <p className="text-white text-sm">Quads & Glutes</p>
            </div>

            <div className="flex-1">
              <p className="text-white/40 text-xs uppercase">Exercises</p>
              <p className="text-white text-sm truncate">
                Squats • Leg Press • Lunges
              </p>
            </div>

            <div className="min-w-23 text-center">
              <p className="text-white/40 text-xs uppercase">Sets</p>
              <p className="text-white text-sm">5 × 8</p>
            </div>

            <div className="min-w-18 text-center">
              <p className="text-white/40 text-xs uppercase">ET</p>
              <p className="text-white text-sm">50m</p>
            </div>

            <div className="min-w-35">
              <p className="text-white/40 text-xs uppercase">Notes</p>
              <p className="text-white/50 text-sm truncate">
                Focus on depth
              </p>
            </div>

            <div className="min-w-23 text-right">
              <p className="text-white/40 text-xs uppercase">Status</p>
              <p className="text-yellow-400 text-sm font-medium">In Progress</p>
            </div>
          </div>

          <div className="flex items-center gap-6 rounded-2xl bg-white/5 px-5 py-4">
            <div className="min-w-23">
              <p className="text-white text-lg font-semibold">Wed</p>
              <p className="text-white/40 text-xs">Feb 5</p>
            </div>

            <div className="min-w-30">
              <p className="text-white/40 text-xs uppercase">Workout</p>
              <p className="text-[#aadd00] text-sm font-medium">Cardio</p>
            </div>

            <div className="min-w-38">
              <p className="text-white/40 text-xs uppercase">Muscles</p>
              <p className="text-white text-sm">Full Body</p>
            </div>

            <div className="flex-1">
              <p className="text-white/40 text-xs uppercase">Exercises</p>
              <p className="text-white text-sm truncate">
                Treadmill • Cycling • Jump Rope
              </p>
            </div>

            <div className="min-w-23 text-center">
              <p className="text-white/40 text-xs uppercase">Sets</p>
              <p className="text-white text-sm">—</p>
            </div>

            <div className="min-w-18 text-center">
              <p className="text-white/40 text-xs uppercase">ET</p>
              <p className="text-white text-sm">30m</p>
            </div>

            <div className="min-w-35">
              <p className="text-white/40 text-xs uppercase">Notes</p>
              <p className="text-white/50 text-sm truncate">
                Moderate intensity
              </p>
            </div>

            <div className="min-w-23 text-right">
              <p className="text-white/40 text-xs uppercase">Status</p>
              <p className="text-white/50 text-sm font-medium">Not Started</p>
            </div>
          </div>

          <div className="flex items-center gap-6 rounded-2xl bg-white/5 px-5 py-4 opacity-60">
            <div className="min-w-23">
              <p className="text-white text-lg font-semibold">Thu</p>
              <p className="text-white/40 text-xs">Feb 6</p>
            </div>

            <div className="min-w-30">
              <p className="text-white/40 text-xs uppercase">Workout</p>
              <p className="text-white/40 text-sm">Rest Day</p>
            </div>

            <div className="flex-1">
              <p className="text-white/40 text-xs uppercase">Notes</p>
              <p className="text-white/30 text-sm">Mobility & stretching</p>
            </div>

            <div className="min-w-23 text-right">
              <p className="text-white/40 text-xs uppercase">Status</p>
              <p className="text-white/40 text-sm">—</p>
            </div>
          </div>


          <div className="flex items-center gap-6 rounded-2xl bg-white/5 px-5 py-4">
            <div className="min-w-23">
              <p className="text-white text-lg font-semibold">Fri</p>
              <p className="text-white/40 text-xs">Feb 7</p>
            </div>

            <div className="min-w-30">
              <p className="text-white/40 text-xs uppercase">Workout</p>
              <p className="text-[#aadd00] text-sm font-medium">Core</p>
            </div>

            <div className="min-w-38">
              <p className="text-white/40 text-xs uppercase">Muscles</p>
              <p className="text-white text-sm">Abs & Lower Back</p>
            </div>

            <div className="flex-1">
              <p className="text-white/40 text-xs uppercase">Exercises</p>
              <p className="text-white text-sm truncate">
                Plank • Hanging Raises • Russian Twist
              </p>
            </div>

            <div className="min-w-23 text-center">
              <p className="text-white/40 text-xs uppercase">Sets</p>
              <p className="text-white text-sm">4 × 15</p>
            </div>

            <div className="min-w-18 text-center">
              <p className="text-white/40 text-xs uppercase">ET</p>
              <p className="text-white text-sm">30m</p>
            </div>

            <div className="min-w-35">
              <p className="text-white/40 text-xs uppercase">Notes</p>
              <p className="text-white/50 text-sm truncate">
                Slow & controlled
              </p>
            </div>

            <div className="min-w-23 text-right">
              <p className="text-white/40 text-xs uppercase">Status</p>
              <p className="text-white/50 text-sm font-medium">Not Started</p>
            </div>
          </div>


          <div className="flex items-center gap-6 rounded-2xl bg-white/5 px-5 py-4">
            <div className="min-w-23">
              <p className="text-white text-lg font-semibold">Sat</p>
              <p className="text-white/40 text-xs">Feb 8</p>
            </div>

            <div className="min-w-30">
              <p className="text-white/40 text-xs uppercase">Workout</p>
              <p className="text-[#aadd00] text-sm font-medium">Swimming</p>
            </div>

            <div className="min-w-38">
              <p className="text-white/40 text-xs uppercase">Muscles</p>
              <p className="text-white text-sm">Full Body</p>
            </div>

            <div className="flex-1">
              <p className="text-white/40 text-xs uppercase">Exercises</p>
              <p className="text-white text-sm truncate">
                Freestyle • Backstroke
              </p>
            </div>

            <div className="min-w-23 text-center">
              <p className="text-white/40 text-xs uppercase">Sets</p>
              <p className="text-white text-sm">—</p>
            </div>

            <div className="min-w-18 text-center">
              <p className="text-white/40 text-xs uppercase">ET</p>
              <p className="text-white text-sm">40m</p>
            </div>

            <div className="min-w-35">
              <p className="text-white/40 text-xs uppercase">Notes</p>
              <p className="text-white/50 text-sm truncate">
                Easy pace
              </p>
            </div>

            <div className="min-w-23 text-right">
              <p className="text-white/40 text-xs uppercase">Status</p>
              <p className="text-yellow-400 text-sm font-medium">In Progress</p>
            </div>
          </div>

        </div>




      </section>

      <section className="mx-5 mt-10 mb-16 space-y-6 bg-gray-950 rounded-3xl min-h-100">
        <div className="flex flex-col gap-10 bg-gray-950 p-6 rounded-3xl">

          <h2 className="text-white text-3xl font-semibold mb-5">
            Today’s Focus
          </h2>

          <div className="
            flex items-center justify-between
            rounded-2xl
            bg-linear-to-r from-white/5 to-white/10
            px-6 py-5
            border border-white/10
            ">


            <div className="flex flex-col gap-1">
              <p className="text-white/50 text-sm uppercase">Today</p>
              <p className="text-white text-2xl font-semibold">Upper Body</p>
              <p className="text-white/60 text-sm">
                Chest & Triceps
              </p>
            </div>


            <div className="flex flex-col gap-1 text-center">
              <p className="text-white/40 text-xs uppercase">Exercises</p>
              <p className="text-white text-sm">
                Bench Press • Incline DB • Cable Fly • Overhead Tricep Extension • Tricep Dips • Close-Grip Bench Press
              </p>
              <p className="text-white/40 text-xs mt-1">
                6 exercises • 4 × 10
              </p>
            </div>


            <div className="flex flex-col items-end gap-2">
              <p className="text-[#aadd00] text-sm font-medium">
                In Progress
              </p>

              <button className="
                px-6 py-2
                rounded-xl
                bg-[#aadd00]
                text-black
                font-bold
                hover:scale-105
                transition
                ">
                Continue
              </button>
            </div>

          </div>


          <div>
            <div className="flex justify-between text-xs text-white/40 mb-1">
              <span>Progress</span>
              <span>2 / 6 exercises</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full">
              <div className="h-2 w-1/4 bg-[#aadd00] rounded-full"></div>
            </div>
          </div>

        </div>
      </section>

      <section className="flex justify-center mb-10">

        <div className="
            relative
            group
            flex justify-center items-center
            m-5
            w-30
            h-15
            bg-gray-950
            cursor-pointer
            shadow-[0_0_10px_rgba(0,0,0,.3)]
            rounded-4xl
            transition-all duration-500
            hover:bg-[#aadd00]">
              <h1 className="absolute text-6xl bottom-1.5 text-white rounded-2xl transition-all duration-500 group-hover:text-black">+</h1>
            </div>
      </section>

      










    </main>
  );
}

export default Home;
