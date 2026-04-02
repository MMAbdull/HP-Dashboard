export default function DangerZone() {
  return (
    <div className="rounded-lg p-6 border border-red-500 mt-5">

      <h3 className="text-lg font-semibold text-red-600 mb-2">
        Danger Zone
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        These actions are irreversible. Please be careful.
      </p>

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer border transition-all duration-200 hover:bg-red-900 hover:text-red-600 hover:border-red-600 ">
          Delete Account
        </button>

        <button className="px-4 py-2 border border-red-600 text-red-600 rounded cursor-pointer transition-all duration-200 hover:bg-red-800 hover:text-white">
          Logout
        </button>
      </div>

    </div>
  );
}