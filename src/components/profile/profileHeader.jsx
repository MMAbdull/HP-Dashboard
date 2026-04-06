export default function ProfileHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center gap-5 sm:gap-5">


      <div className="flex flex-col items-center gap-4 sm:gap-5 w-full sm:w-auto">
        <div className="relative">
          <img
            src="/assets/profilePic.png"
            alt="Profile-Pic"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
          />

          <button className="absolute bottom-1 right-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-gray-950 bg-gray-950 text-white rounded-full transition-all duration-200 hover:bg-[#aadd00] hover:text-gray-950 hover:border-gray-950">
            <span className="text-2xl sm:text-3xl leading-none relative -top-px">+</span>
          </button>
        </div>

        <div className="flex flex-col items-center text-center sm:text-left">
          <p className="text-sm sm:text-base">-Body Building-</p>
          <p className="text-gray-400 text-xs sm:text-sm">Joined</p>
          <p className="text-white font-semibold text-sm sm:text-base">Feb-2026</p>
        </div>
      </div>


      <div className="flex flex-col items-center sm:items-start gap-3 w-full sm:w-auto">


        <div className="flex items-center gap-3">
          <h2 className="text-lg sm:text-xl font-semibold text-white text-center sm:text-left">
            Mohammad Abdullah
          </h2>
        </div>


        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
          <div className="flex flex-col items-center">
            <p className="font-semibold">21</p>
            <p className="text-gray-400 text-xs sm:text-sm">workouts</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold">317</p>
            <p className="text-gray-400 text-xs sm:text-sm">followers</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold">760</p>
            <p className="text-gray-400 text-xs sm:text-sm">following</p>
          </div>
        </div>


        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-1">
          <button className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#aadd00] text-gray-950 font-semibold rounded-lg text-xs sm:text-sm transition-all duration-200 hover:bg-white">
            Edit Profile
          </button>

          <button className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-700 text-white font-semibold rounded-lg text-xs sm:text-sm transition-all duration-200 hover:bg-white hover:text-gray-950">
            Share Profile
          </button>

          <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-gray-700 bg-gray-700 text-white rounded-xl transition-all duration-200 hover:bg-[#aadd00] hover:text-gray-950 hover:border-gray-950">
            <span className="text-2xl sm:text-3xl leading-none relative -top-px">+</span>
          </button>
        </div>

      </div>
    </div>
  );
}