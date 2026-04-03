import { createContext, useState ,useEffect } from "react";
import { themes } from "./themes";

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {

  const savedSettings = JSON.parse(localStorage.getItem("settings"));

  const [name, setName] = useState(savedSettings?.name || "Mohammad");
  const [theme, setTheme] = useState(savedSettings?.theme || "default");
  const [timeFormat, setTimeFormat] = useState(savedSettings?.timeFormat || "12");

  const [unit, setUnit] = useState(savedSettings?.unit || "kg");
  const [restTime, setRestTime] = useState(savedSettings?.restTime || 60);
  const [defaultSets, setDefaultSets] = useState(savedSettings?.defaultSets || 3);
  const [defaultReps, setDefaultReps] = useState(savedSettings?.defaultReps ||  10);
  const [workoutReminder, setWorkoutReminder] = useState(savedSettings?.workoutReminder ?? true);

  const [email, setEmail] = useState(savedSettings?.email ??  "momo@example.com");

  const themeColors = themes[theme];

  useEffect(() => {
  const settings = {
    name,
    theme,
    timeFormat,
    unit,
    restTime,
    defaultSets,
    defaultReps,
    workoutReminder,
    email
  };

  localStorage.setItem("settings", JSON.stringify(settings));
}, [
  name,
  theme,
  timeFormat,
  unit,
  restTime,
  defaultSets,
  defaultReps,
  workoutReminder,
  email
]);

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