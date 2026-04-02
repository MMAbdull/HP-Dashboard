import { useState } from "react";

export default function ChangePassword() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center justify-between rounded-lg p-6 border border-gray-600 mt-5">

      <div>
        <h3 className="text-lg font-semibold text-gray-950 mb-2">
          Password
        </h3>
        <p className="text-sm text-gray-600">
          Change your account password.
        </p>
      </div>

      {show ? (
        <div className="flex gap-2">
          <input type="password" placeholder="New password" className="border px-2 py-1 rounded text-sm text-gray-950" />
          <input type="password" placeholder="Confirm" className="border px-2 py-1 rounded text-sm text-gray-950" />

          <button className="px-3 py-1 bg-gray-950 text-white rounded cursor-pointer">
            Save
          </button>

          <button onClick={() => setShow(false)} className="px-3 py-1 border rounded text-gray-950 cursor-pointer">
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShow(true)}
          className="text-lg font-semibold border border-gray-950 p-2 rounded-lg text-gray-600 cursor-pointer transition-all duration-200 hover:text-white hover:bg-gray-950"
        >
          Change
        </button>
      )}

    </div>
  );
}