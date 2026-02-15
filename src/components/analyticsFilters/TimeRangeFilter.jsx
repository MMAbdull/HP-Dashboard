import { useState } from "react";

export default function TimeRangeFilter({value,onChange}) {
  const [open,setOpen] = useState(false);

  const options =[
    "Today",
    "Last 7 Days",
    "Last 30 Days",
    "Last Month",
    "Last Year",
  ];
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}
        className="
        group
        flex items-center gap-2
        rounded-xl
        bg-gray-950 px-4 py-2
        text-lg text-white font-medium
        transition-all duration-200
        hover:bg-[#aadd00] hover:text-gray-950
        "
        >
          {value}
          <span className="text-white transition-all duration-200 group-hover:text-gray-950">▾</span>
      </button>

      {open && (
        <ul className="absolute mt-2 w-40 rounded-xl bg-gray-950 shadow-xl z-10">
          {options.map((option) => (
            <li
            key={option}
            onClick={() =>{
              onChange(option);
              setOpen(false);
            }}
            className="
            cursor-pointer
            px-4 py-2
            text-white/80
            rounded-xl
            transition-all duration-200
            hover:bg-[#aadd00] hover:text-gray-950
            "
            >
            {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}