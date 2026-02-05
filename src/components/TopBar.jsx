import { useEffect, useState } from "react";


function TopBar() {

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const inteerval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(inteerval);
  }, []);

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  const date = now.toLocaleDateString([], {
    weekday: "short",
    day: "2-digit",
    month: "short"
  });

  return (
    <header className="relative z-20 flex justify-between items-center h-20 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.2)] px-4">
      <div>
        <h1 className="text-[30px] leading-none text-black" style={{ fontFamily: "'Montserrat', sans-serif" }} >Hi,Mohammad</h1>
      </div>
      <div className="relative">
        <img src="/assets/search-outline.png" alt="Search icon" className="absolute flex w-4 opacity-50 left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
        </img>
        <input type="text" placeholder="Search" className="w-100 h-10 rounded-2xl border-2 text-gray-950 border-gray-900/50 pl-10 pr-5 transition-all duration-400 hover:border-gray-900 focus:outline-none" style={{ fontFamily: "'Montserrat', sans-serif" }} />
      </div>
      <div className="flex items-center gap-4 mr-3">
        <div className="relative w-12 h-12 mr-3 shrink-0 cursor-pointer">
          <div className="absolute inset-0 rounded-full border-2 border-gray-600 transition-opacity duration-200 hover:opacity-100"></div>
          <img src="/assets/bell.png" alt="Notification icon" className="absolute inset-0 w-6 h-6 m-auto transition-opacity duration-200 hover:opacity-0" />
          <img src="/assets/notification.png" alt="Notification icon" className="absolute inset-0 w-7 h-7 m-auto opacity-0 transition-opacity duration-200 hover:opacity-100" />
        </div>
        <div className="text-right leading-tight text-lg text-gray-700 " style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <div className="font-semibold">{time}</div>
          <div className="text-sm opacity-80">{date}</div>
        </div>
      </div>

    </header>
  );
}

export default TopBar;
