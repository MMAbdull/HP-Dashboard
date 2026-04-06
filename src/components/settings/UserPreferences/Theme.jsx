import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";
import { themes } from "../themes";

export default function Theme() {
  const { theme, setTheme } = useContext(SettingsContext);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-lg p-4 sm:p-6 border border-gray-500">


      <div className="text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-2 sm:mb-4">
          Theme
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-gray-600">
          Choose a theme to personalize the look and feel of your dashboard.
        </p>
      </div>


      <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 justify-items-center sm:justify-start">
        {Object.keys(themes).map((key) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            style={{ backgroundColor: themes[key].topBar }} 
            className={`
              w-9 h-9 sm:w-10 sm:h-10 rounded-full
              border-2 transition-all duration-200
              ${theme === key ? "border-gray-950 scale-110" : "border-gray-400"}
            `}
          />
        ))}
      </div>

    </div>
  );
}