import { useState } from "react";

export default function WorkoutControls() {
  const [status, setStatus] = useState("All");
  const [open, setOpen] = useState(false);

  const options = ["All", "In Progress", "Not Started", "Completed"];

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3 sm:gap-0">

      {/* Status Dropdown */}
      <div className="relative w-full sm:w-40">
        <button
          onClick={() => setOpen(!open)}
          className="
            w-full
            px-4 py-2.5 
            text-gray-950 
            font-semibold text-lg 
            rounded-xl 
            border-2 border-gray-950
            transition-all duration-200
            hover:bg-[#aadd00] hover:text-white hover:border-white
          "
        >
          {status}
        </button>

        {open && (
          <div className="
            absolute mt-2 w-full 
            bg-gray-950 
            border-2 border-white 
            rounded-xl 
            shadow-lg 
            overflow-hidden
            z-10
          ">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setStatus(option);
                  setOpen(false);
                }}
                className="
                  px-4 py-2 
                  text-white 
                  cursor-pointer 
                  hover:bg-[#aadd00] 
                  hover:text-black 
                  transition
                "
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-start sm:justify-end flex-wrap">
        <button className="relative group w-12 h-12 flex items-center justify-center border-2 rounded-full border-gray-950 transition-all duration-200 hover:border-blue-500">
          <img
            src="/assets/add.png"
            alt="add"
            className="w-6 h-6 absolute opacity-100 transition-all duration-200 group-hover:opacity-0"
          />
          <img
            src="/assets/add-fill-GR.png"
            alt="add hover"
            className="w-6 h-6 absolute opacity-0 transition-all duration-200 group-hover:opacity-100"
          />
        </button>

        <button className="relative group w-12 h-12 flex items-center justify-center border-2 rounded-full border-gray-950 transition-all duration-200 hover:border-amber-400">
          <img
            src="/assets/filter.png"
            alt="filter"
            className="w-6 h-6 absolute opacity-100 transition-all duration-200 group-hover:opacity-0"
          />
          <img
            src="/assets/filter-GR.png"
            alt="filter hover"
            className="w-6 h-6 absolute opacity-0 transition-all duration-200 group-hover:opacity-100"
          />
        </button>

        <button className="relative group w-12 h-12 flex items-center justify-center border-2 rounded-full border-gray-950 transition-all duration-200 hover:border-red-500">
          <img
            src="/assets/heart-fill.png"
            alt="heart"
            className="w-6 h-6 absolute opacity-100 transition-all duration-200 group-hover:opacity-0"
          />
          <img
            src="/assets/heart-fill-GR.png"
            alt="heart hover"
            className="w-6 h-6 absolute opacity-0 transition-all duration-200 group-hover:opacity-100"
          />
        </button>
      </div>

    </div>
  );
}