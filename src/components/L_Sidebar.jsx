import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SettingsContext } from "./settings/SettingsProvider";

function L_Sidebar() {

  const { themeColors } = useContext(SettingsContext);

  return (
    <aside
      className="w-64 sticky p-4 flex flex-col h-screen shrink-0 top-0"
      style={{ backgroundColor: themeColors.sidebar, color: themeColors.sidebarText }}
    >
      <div className="flex m-2 mb-4">
        <img src="/assets/hp-Logo.png" alt="HP Sidebar Logo" className="w-15 h-auto m-0.5" />
        <p
          className="text-2xl"
          style={{ fontFamily: "'Montserrat', sans-serif", color: themeColors.sidebarText }}
        >
          HeavyProg
        </p>
      </div>

      <div className="flex flex-col gap-8 mt-5 flex-1">
        <div className="flex flex-col gap-10 mt-6">


          <NavLink
            to="/"
            className={({ isActive }) => `
              group flex items-center cursor-pointer border-l-2 rounded-l-xl rounded-r-xl px-10 py-3 transition-all duration-200
              ${isActive ? "border-l-7 bg-white/5 rounded-l-xl" : "border-transparent"}
              hover:border-[#aadd00]
              hover:border-l-7 
              hover:bg-[#aadd00]/5
            `}
            style={({ isActive }) => ({
              borderColor: isActive ? themeColors.accent : undefined
            })}
          >
            {({ isActive }) => (
              <>
                <div className="relative w-5 h-5 mr-3 shrink-0">
                  <img src="/assets/home-outline-w.png"
                    className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 group-hover:opacity-0
                      ${isActive ? "opacity-0" : "group-hover:opacity-0"}`} />
                  <img src="/assets/home-fill-LG.png"
                    className={`absolute inset-0 w-5 h-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100
                      ${isActive ? "opacity-100" : "group-hover:opacity-100"}`} />
                </div>
                <span
                  className={`text-xl transition-all duration-200 group-hover:text-[#aaff00] group-hover:[text-shadow:0_0_10px_#aadd00]
                    ${isActive ? "text-[#aadd00] [text-shadow:0_0_10px_#aadd00]" : ""}`}
                  style={{ fontFamily: "'Montserrat', sans-serif", color: isActive ? themeColors.accent : themeColors.sidebarText }}
                >
                  Home
                </span>
              </>
            )}
          </NavLink>


          <NavLink
            to="/analytics"
            className={({ isActive }) => `
              group flex items-center cursor-pointer border-l-2 rounded-l-xl rounded-r-xl px-10 py-3 transition-all duration-200
              ${isActive ? "border-l-7 bg-white/5 rounded-l-xl" : "border-l-2 border-transparent"}
              hover:border-[#aadd00]
              hover:border-l-7 
              hover:bg-[#aadd00]/5
            `}
            style={({ isActive }) => ({
              borderColor: isActive ? themeColors.accent : undefined
            })}
          >
            {({ isActive }) => (
              <>
                <div className="relative w-5 h-5 mr-3 shrink-0">
                  <img src="/assets/analytics-outline-w.png"
                    className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 group-hover:opacity-0
                      ${isActive ? "opacity-0" : "group-hover:opacity-0"}`} />
                  <img src="/assets/analytics-fill-LG.png"
                    className={`absolute inset-0 w-5 h-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100
                      ${isActive ? "opacity-100" : "group-hover:opacity-100"}`} />
                </div>
                <span
                  className={`text-xl transition-all duration-200 group-hover:text-[#aaff00] group-hover:[text-shadow:0_0_10px_#aadd00]
                    ${isActive ? "text-[#aadd00] [text-shadow:0_0_10px_#aadd00]" : ""}`}
                  style={{ fontFamily: "'Montserrat', sans-serif", color: isActive ? themeColors.accent : themeColors.sidebarText }}
                >
                  Analytics
                </span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/news"
            className={({ isActive }) => `
              group flex items-center cursor-pointer border-l-2 rounded-l-xl rounded-r-xl px-10 py-3 transition-all duration-200
              ${isActive ? "border-l-7 bg-white/5 rounded-l-xl" : "border-l-2 border-transparent"}
              hover:border-[#aadd00]
              hover:border-l-7 
              hover:bg-[#aadd00]/5
            `}
            style={({ isActive }) => ({
              borderColor: isActive ? themeColors.accent : undefined
            })}
          >
            {({ isActive }) => (
              <>
                <div className="relative w-5 h-5 mr-3 shrink-0">
                  <img src="/assets/news-outline-w.png"
                    className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 group-hover:opacity-0
                      ${isActive ? "opacity-0" : "group-hover:opacity-0"}`} />
                  <img src="/assets/news-fill-LG.png"
                    className={`absolute inset-0 w-5 h-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100
                      ${isActive ? "opacity-100" : "group-hover:opacity-100"}`} />
                </div>
                <span
                  className={`text-xl transition-all duration-200 group-hover:text-[#aaff00] group-hover:[text-shadow:0_0_10px_#aadd00]
                    ${isActive ? "text-[#aadd00] [text-shadow:0_0_10px_#aadd00]" : ""}`}
                  style={{ fontFamily: "'Montserrat', sans-serif", color: isActive ? themeColors.accent : themeColors.sidebarText }}
                >
                  News
                </span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/schedule"
            className={({ isActive }) => `
              group flex items-center cursor-pointer border-l-2 rounded-l-xl rounded-r-xl px-10 py-3 transition-all duration-200
              ${isActive ? "border-l-7 bg-white/5 rounded-l-xl" : "border-l-2 border-transparent"}
              hover:border-[#aadd00]
              hover:border-l-7 
              hover:bg-[#aadd00]/5
            `}
            style={({ isActive }) => ({
              borderColor: isActive ? themeColors.accent : undefined
            })}
          >
            {({ isActive }) => (
              <>
                <div className="relative w-5 h-5 mr-3 shrink-0">
                  <img src="/assets/calendar-outline-w.png"
                    className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 group-hover:opacity-0
                      ${isActive ? "opacity-0" : "group-hover:opacity-0"}`} />
                  <img src="/assets/calendar-fill-LG.png"
                    className={`absolute inset-0 w-5 h-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100
                      ${isActive ? "opacity-100" : "group-hover:opacity-100"}`} />
                </div>
                <span
                  className={`text-xl transition-all duration-200 group-hover:text-[#aaff00] group-hover:[text-shadow:0_0_10px_#aadd00]
                    ${isActive ? "text-[#aadd00] [text-shadow:0_0_10px_#aadd00]" : ""}`}
                  style={{ fontFamily: "'Montserrat', sans-serif", color: isActive ? themeColors.accent : themeColors.sidebarText }}
                >
                  Schedule
                </span>
              </>
            )}
          </NavLink>
        </div>


        <div className="flex flex-col gap-6 mt-auto mb-10">
          <NavLink
            to="/profile"
            className={({ isActive }) => `
              group 
              flex items-center  
              cursor-pointer 
              border-l-2 
              rounded-l-xl
              rounded-r-xl
              px-10 py-3
              transition-all duration-200
              ${isActive ? "border-l-7 border-blue-400 bg-white/5 rounded-l-xl" : "border-l-2 border-transparent"}
             hover:border-blue-400
              hover:border-l-7 
             hover:bg-blue-400/5
             `}>

            {({ isActive }) => (
              <>
                <div className="relative w-5 h-5 mr-3 shrink-0">
                  <img src="/assets/user-outline-w.png"
                    className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 group-hover:opacity-100
                    ${isActive ? "opacity-0" : "group-hover:opacity-0"}`} />
                  <img src="/assets/user-fill-B.png"
                    className={`absolute inset-0 w-5 h-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100
                    ${isActive ? "opacity-100" : ""}`} />
                </div>
                <span className={`text-xl transition-all duration-200 group-hover:text-[#60A5FA] group-hover:[text-shadow:0_0_10px_#60A5FA]
                ${isActive ? "text-[#60A5FA] [text-shadow:0_0_10px_#60A5FA]" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Profile
                </span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) => `
              group 
              flex items-center  
              cursor-pointer 
              border-l-2 
              rounded-l-xl
              rounded-r-xl
              px-10 py-3
              transition-all duration-200
              ${isActive ? "border-l-7 border-blue-400 bg-white/5 rounded-l-xl" : "border-l-2 border-transparent"}
             hover:border-blue-400
              hover:border-l-7 
             hover:bg-blue-400/5
             `}>

            {({ isActive }) => (
              <>
                <div className="relative w-5 h-5 mr-3 shrink-0">
                  <img src="/assets/settings-outline-w.png"
                    className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 group-hover:opacity-100
                    ${isActive ? "opacity-0" : "group-hover:opacity-0"}`} />
                  <img src="/assets/settings-fill-B.png"
                    className={`absolute inset-0 w-5 h-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100
                    ${isActive ? "opacity-100" : ""}`} />
                </div>
                <span className={`text-xl transition-all duration-200 group-hover:text-[#60A5FA] group-hover:[text-shadow:0_0_10px_#60A5FA]
                ${isActive ? "text-[#60A5FA] [text-shadow:0_0_10px_#60A5FA]" : ""}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Settings
                </span>
              </>
            )}
          </NavLink>
        </div>

  
        <NavLink
          to="/logout"
          className={({ isActive }) => `
            group flex items-center cursor-pointer border-l-2 rounded-l-xl rounded-r-xl px-10 py-3 mb-8 transition-all duration-200
            ${isActive ? "border-l-7 border-red-500 bg-white/5 rounded-l-xl" : "border-l-2 border-transparent"}
            hover:border-[#ff0000] hover:border-l-7 hover:bg-red-500/5
          `}
        >
          {({ isActive }) => (
            <>
              <div className="relative w-5 h-5 mr-3 shrink-0">
                <img src="/assets/logout-outline-w.png"
                  className={`absolute inset-0 w-5 h-5 transition-opacity group-hover:opacity-0
                    ${isActive ? "opacity-0" : "group-hover:opacity-0"}`} />
                <img src="/assets/logout-outline-R.png"
                  className={`absolute inset-0 w-5 h-5 opacity-0 transition-opacity group-hover:opacity-100
                    ${isActive ? "opacity-100" : ""}`} />
              </div>
              <span className={`text-xl transition-all duration-200 group-hover:text-red-600 group-hover:[text-shadow:0_0_20px_#ff0000]
                ${isActive ? "text-[#ff0000] [text-shadow:0_0_10px_#ff0000]" : ""}`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Logout
              </span>
            </>
          )}
        </NavLink>

      </div>
    </aside>
  );
}

export default L_Sidebar;