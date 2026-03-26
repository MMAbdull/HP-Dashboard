export default function ProfileHeader() {
  return (
    <div className="flex justify-evenly items-center gap-5">

      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <img
            src="/assets/profilePic.png" alt="Profile-Pic" className="w-24 h-24 rounded-full object-cover"
          />

          <button className="absolute bottom-1 right-0 w-8 h-8 flex items-center justify-center border border-gray-950 bg-gray-950 text-white rounded-full transition-all duration-200 hover:bg-[#aadd00] hover:text-gray-950 hover:border-gray-950">
            <span className="text-3xl leading-none relative -top-px">+</span>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <p>-Body Building-</p>
          <p className="text-gray-400">Joined</p>
          <p className="text-white font-semibold">Feb-2026</p>
        </div>
      </div>


      <div className="flex flex-col gap-3">

        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-white">
            Mohammad Abdullah
          </h2>
        </div>



        <div className="flex gap-6 text-sm">
          <div className="flex flex-col items-center">
            <p className="font-semibold">21</p>
            <p className="text-gray-400">workouts</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold">317</p>
            <p className="text-gray-400">followers</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold">760</p>
            <p className="text-gray-400">following</p>
          </div>
        </div>


        <div className="flex gap-3 mt-1">

          <button className="px-4 py-1.5 bg-[#aadd00] text-gray-950 font-semibold rounded-lg text-sm transition-all duration-200 hover:bg-white">
            Edit Profile
          </button>

          <button className="px-4 py-1.5 bg-gray-700 text-white font-semibold rounded-lg text-sm transition-all duration-200 hover:bg-white hover:text-gray-950">
            Share Profile
          </button>

          <button className="w-8 h-8 flex items-center justify-center border border-gray-700 bg-gray-700 text-white rounded-xl transition-all duration-200 hover:bg-[#aadd00] hover:text-gray-950 hover:border-gray-950">
            <span className="text-3xl leading-none relative -top-px">+</span>
          </button>

        </div>

      </div>
    </div>
  );
}