import ProfileHeader from "../components/profile/profileHeader";
import ProfileInfo from "../components/profile/profileInfo";
import StatsWidget from "../components/profile/StatsWidget";
import ActivityPanel from "../components/profile/ProfileActivityWidget";
import WorkoutCards from "../components/profile/WorkoutWidget";
import WidgetControls from "../components/profile/WidgetsControls";

export default function Profile() {
  return (
    <div className="p-4 sm:p-6 md:p-8">

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-950 mb-6 text-center sm:text-left">
        Profile
      </h1>


      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">


        <div className="flex flex-col w-full lg:w-150">

          <div className="bg-gray-950 border border-[#aadd00] rounded-2xl p-5 sm:p-6 w-full shadow-2xl shadow-black">
            <ProfileHeader />
          </div>

          <div className="bg-gray-950 border border-[#aadd00] rounded-2xl p-5 sm:p-6 w-full shadow-2xl shadow-black mt-5">
            <p className="mb-5 font-semibold text-lg sm:text-xl text-center sm:text-left">
              Detailed Information
            </p>
            <ProfileInfo />
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full lg:w-auto gap-5 lg:gap-6">

          <div className="border border-gray-950 flex flex-col rounded-2xl p-4 sm:p-5 gap-3">
            <WidgetControls />
            <StatsWidget />
            <WorkoutCards />
          </div>

          <div className="bg-emerald-200 p-4 sm:p-6 rounded-2xl">
            <ActivityPanel />
          </div>

        </div>

      </div>
    </div>
  );
}