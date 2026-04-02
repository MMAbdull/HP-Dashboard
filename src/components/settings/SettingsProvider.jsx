import { createContext, useState } from "react";
import { themes } from "./themes";

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {

  const [name, setName] = useState("Mohammad");
  const [theme, setTheme] = useState("default");
  const [timeFormat, setTimeFormat] = useState("12");

  const [unit, setUnit] = useState("Kg");
  const [restTime, setRestTime] = useState(60);
  const [defaultSets, setDefaultSets] = useState(3);
  const [defaultReps, setDefaultReps] = useState(10);
  const [workoutReminder, setWorkoutReminder] = useState(true);

  const [email, setEmail] = useState("momo@example.com");

  const themeColors = themes[theme];

  return (
    <SettingsContext.Provider
      value={{
        name,
        setName,
        theme,
        setTheme,
        themeColors,
        timeFormat,
        setTimeFormat,
        unit,
        setUnit,
        restTime,
        setRestTime,
        defaultSets,
        setDefaultSets,
        defaultReps,
        setDefaultReps,
        workoutReminder,
        setWorkoutReminder,
        email,
        setEmail
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}