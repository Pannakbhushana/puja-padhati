import { createContext, useState } from "react";

export const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{
    const [isDark, setIsDark]=useState(true);

    const changeTheme=()=>{
        setIsDark(!isDark);
    }

    return <ThemeContext.Provider value={{isDark, changeTheme}}>{children}</ThemeContext.Provider>
}