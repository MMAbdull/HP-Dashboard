import { createContext, useState } from "react";
import { themes } from "./themes";

export const SettingsContext = createContext();

export function SettingsProvider({ children }){

  const [name,setName] = useState("Mohammad");
  const [theme,setTheme] = useState("default"); 
  const [timeFormat,setTimeFormat] = useState("12");

  const themeColors = themes[theme]; 

  return(
    <SettingsContext.Provider
      value={{
        name,
        setName,
        theme,
        setTheme,
        themeColors,
        timeFormat,
        setTimeFormat
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}