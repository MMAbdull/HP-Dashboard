import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "./settings/SettingsProvider";

function TopBar({ setIsOpen }) {
  const { name, timeFormat, themeColors } = useContext(SettingsContext);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: timeFormat === "12",
  });

  const date = now.toLocaleDateString([], {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  return (
    <header
      className="relative z-20 flex justify-between items-center h-20 shadow-[0_5px_15px_rgba(0,0,0,0.2)] px-4"
      style={{ backgroundColor: themeColors.topBar }}
    >

      <button
        className="lg:hidden mr-4 text-gray-950 text-2xl"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      <div className="flex-1 flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:gap-4">
        <h1
          className="text-[30px] leading-none text-left"
          style={{ color: themeColors.text, fontFamily: "'Montserrat', sans-serif" }}
        >
          Hi, {name}
        </h1>

        <div className="relative w-11/12 max-w-xs lg:w-64">
          <img
            src="/assets/search-outline.png"
            alt="Search icon"
            className="absolute w-4 opacity-50 left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search"
            className={`w-full h-9 rounded-2xl border-2 pl-10 pr-4 transition-all duration-300
        focus:outline-none focus:ring-1 focus:ring-offset hover:border-gray-950
        ${themeColors.text === "#ffffff" ? "placeholder-gray-600" : "placeholder-gray-700"}`}
            style={{
              color: themeColors.text,
              backgroundColor: themeColors.bg,
              borderColor: themeColors.border,
              fontFamily: "'Montserrat', sans-serif",
            }}
          />
        </div>
      </div>


      <div className="flex flex-col items-end gap-1 lg:flex-row lg:items-center lg:gap-4">
        <div
          className="relative w-10 h-10 shrink-0 cursor-pointer rounded-full border-2 transition-all duration-200"
          style={{ borderColor: themeColors.border, backgroundColor: themeColors.bg }}
        >
          <img
            src="/assets/bell.png"
            alt="Notification icon"
            className="absolute inset-0 w-5 h-5 m-auto transition-opacity duration-200 hover:opacity-0"
          />
          <img
            src="/assets/notification.png"
            alt="Notification icon"
            className="absolute inset-0 w-6 h-6 m-auto opacity-0 transition-opacity duration-200 hover:opacity-100"
          />
        </div>

        <div
          className="text-right leading-tight text-sm lg:text-lg"
          style={{ color: themeColors.text, fontFamily: "'Montserrat', sans-serif" }}
        >
          <div className="font-semibold">{time}</div>
          <div className="opacity-80">{date}</div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;