import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function DisplayName() {

  const { name, setName } = useContext(SettingsContext);

  return (
    <div className="border border-gray-500 rounded-lg mt-5 p-4 sm:p-6 shadow-md">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

        <h3 className="text-base sm:text-lg font-semibold text-gray-950">
          Display Name
        </h3>

        <input
          type="text"
          value={name}
          maxLength={12}
          onChange={(i) => setName(i.target.value)}
          className="w-full sm:w-auto text-gray-950 font-semibold px-3 py-2 border border-gray-950 rounded-lg outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
          placeholder="Enter your name"
        />

      </div>

      <p className="text-xs text-gray-600 font-semibold mt-2">
        Preview: Hi, {name}
      </p>

    </div>
  );
}