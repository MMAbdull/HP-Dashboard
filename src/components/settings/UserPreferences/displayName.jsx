import { useContext } from "react";
import { SettingsContext } from "../SettingsProvider";

export default function DisplayName() {

  const { name, setName } = useContext(SettingsContext);

  return (
    <div className="border border-gray-500 rounded-lg mt-5 p-6 shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-950 mb-4">
          Display Name
        </h3>
          <input
            type="text"
            value={name}
            maxLength={12}
            onChange={(i) => setName(i.target.value)}
            className="text-gray-950 font-semibold px-3 py-2 border border-gray-950 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your name"
          />
        </div>
        <p className="text-xs text-gray-600 font-semibold">
          Preview: Hi, {name}
        </p>
    </div>
  );
}
