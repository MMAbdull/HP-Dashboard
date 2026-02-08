import { useState } from "react";

export default function AnalyticsHeader(){
  const [open ,setOpen] = useState(false);
  const [selected , setSelected] = useState("Last 7 Days");

  const options=["Last 7 Days","Last 30 Days","This Month","This Year"];

  return (
    <section className="mx-6 mt-8 flex justify-between gap-4">
      <div>
        <h1 className="text-3xl font-semibold text-gray-950">AHahaahahahaha</h1>
        <p className="mt-1 text-gray-950/80">ystem performance overview</p>
      </div>

      <div className="relative">

      <button onClick={() => setOpen(!open)}
      className="
      group
      flex items-center gap-2
      rounded-xl
      bg-gray-950 px-4 py-2
      text-lg text-white
      transition-all duration-400
      hover:bg-[#aadd00] hover:text-gray-950
      "  
      >
        {selected}
        <span className="text-white transition-all duration-400 group-hover:text-gray-950">▾</span>

      </button>
      {open && (
        <ul className="absoulute mt-2 w-44 rounded-lg bg-gray-950 shadow-lg z-10">
          {options.map((option) => (
            <li
            key={option}
            onClick={() => {
              setSelected(option);
              setOpen(false);
            }}
            className="cursor-pointer px-4 py-2 text-white/80 rounded-lg transition-all duration-200 hover:bg-[#aadd00] hover:text-gray-950"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      </div>
    </section>
  );
}


