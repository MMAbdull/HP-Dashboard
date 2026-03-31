import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";
import { themes } from "../themes";

export default function Theme() {
  const { theme, setTheme } = useContext(SettingsContext);

  return (
    <div className="flex items-center justify-between rounded-lg p-6 border border-gray-500">
      <div>
        <h3 className="text-lg font-semibold text-gray-950 mb-4">
          Theme
        </h3>
        <p className="text-sm font-semibold text-gray-600">
          Choose a theme to personalize the look and feel of your dashboard.
        </p>
      </div>


      <div className="grid grid-cols-3 gap-4">
        {Object.keys(themes).map((key) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            style={{ backgroundColor: themes[key].topBar }} // ✅ THIS FIXES IT
            className={`
            w-10 h-10 rounded-full
            border-2 transition-all duration-200
            ${theme === key ? "border-gray-950 scale-110" : "border-gray-400"}
            `}
          />
        ))}
      </div>
    </div>
  );
}