export default function TodayFocus() {
  return (
    <section className="mx-5 mt-10 mb-16 space-y-6 bg-gray-950 rounded-3xl min-h-100">
      <div className="flex flex-col gap-10 bg-gray-950 p-6 rounded-3xl">

        <h2 className="text-white text-3xl font-semibold mb-5 text-center md:text-left">
          Today’s Focus
        </h2>

        <div className="
          group
          flex flex-col md:flex-row
          items-center md:items-center
          justify-center md:justify-between
          text-center md:text-left
          gap-6 md:gap-0

          rounded-2xl
          bg-linear-to-r from-white/5 to-white/10
          px-6 py-5
          border border-white/10

          transition-all duration-500
          hover:bg-linear-to-r 
          hover:from-white/5 
          hover:to-white/20
          hover:border-white
        ">

          {/* LEFT */}
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p className="text-white/50 text-sm uppercase">Today</p>
            <p className="text-white text-2xl font-semibold">Upper Body</p>
            <p className="text-white/60 text-sm">
              Chest & Triceps
            </p>
          </div>


          {/* CENTER */}
          <div className="flex flex-col gap-1 text-center max-w-full md:max-w-md">
            <p className="text-white/40 text-xs uppercase">Exercises</p>

            <p className="
              text-white text-sm
              md:truncate
            ">
              Bench Press • Incline DB • Cable Fly • Overhead Tricep Extension • Tricep Dips • Close-Grip Bench Press
            </p>

            <p className="text-white/40 text-xs mt-1">
              6 exercises • 4 × 10
            </p>
          </div>


          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[#aadd00] text-sm font-medium">
              In Progress
            </p>

            <button className="
              px-6 py-2
              rounded-xl
              bg-[#aadd00]
              text-black
              font-bold
              cursor-pointer
              hover:scale-105
              transition
            ">
              Continue
            </button>
          </div>

        </div>


        {/* PROGRESS BAR */}
        <div className="w-full">
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
  );
}