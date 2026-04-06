import { useState } from "react";

export default function ChangePassword() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg p-4 sm:p-6 border border-gray-600 mt-5 gap-3">


      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-1">
          Password
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          Change your account password.
        </p>
      </div>


      <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-end">
        {show ? (
          <>
            <input
              type="password"
              placeholder="New password"
              className="border border-gray-600 rounded px-2 py-1 text-sm text-gray-950"
            />
            <input
              type="password"
              placeholder="Confirm"
              className="border border-gray-600 rounded px-2 py-1 text-sm text-gray-950"
            />

            <button className="px-3 py-1 bg-gray-950 text-white rounded cursor-pointer transition-all duration-200 hover:bg-gray-800">
              Save
            </button>

            <button
              onClick={() => setShow(false)}
              className="px-3 py-1 border rounded text-gray-950 cursor-pointer transition-all duration-200 hover:bg-gray-100"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setShow(true)}
            className="text-sm sm:text-lg font-semibold border border-gray-950 px-3 py-2 rounded-lg text-gray-600 cursor-pointer transition-all duration-200 hover:text-white hover:bg-gray-950"
          >
            Change
          </button>
        )}
      </div>

    </div>
  );
}