import ProfileHeader from "../components/profile/profileHeader";
import ProfileInfo from "../components/profile/profileInfo";
import StatsWidget from "../components/profile/StatsWidget";
import ActivityPanel from "../components/profile/ProfileActivityWidget";
import WorkoutCards from "../components/profile/WorkoutWidget";
import WidgetControls from "../components/profile/WidgetsControls";

export default function Profile() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-gray-950 mb-6">Profile</h1>

      <div className="flex gap-8">


        <div className="flex flex-col w-150">

          <div className="bg-gray-950 border border-[#aadd00] rounded-2xl p-6 w-150 shadow-2xl shadow-black">
            <ProfileHeader />
          </div>

          <div className="bg-gray-950 border border-[#aadd00] rounded-2xl p-6 w-150 shadow-2xl shadow-black mt-5">
            <p className="mb-5 font-semibold text-xl">Detailed Information</p>
            <ProfileInfo />
          </div>

        </div>

        <div className=" rounded-2xl flex flex-col gap-6">
          <div className="border border-gray-950 flex flex-col rounded-2xl p-5 gap-3">
            <WidgetControls />
            <StatsWidget />
            <WorkoutCards />
          </div>
          <div className="bg-emerald-200 p-6 rounded-2xl">
            <ActivityPanel />
          </div>
        </div>

      </div>
    </div>
  );
}