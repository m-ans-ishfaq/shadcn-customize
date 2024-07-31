"use client";

import { createContext, ReactNode, useContext, useState } from "react";

const StyleContext = createContext({ 
    isDark: false,
    togglestyle: () => {}
});

export const StyleProvider = ({ children }: { children: ReactNode }) => {
    
    const [isDark, setIsDark] = useState(false);

    const togglestyle = () => {
        setIsDark(d => !d);
        const html = document.querySelector("html")!;
        html.classList.contains("dark") ?
        html.classList.remove("dark") :
        html.classList.add("dark");
    }

    return (
        <StyleContext.Provider value={{ isDark, togglestyle }}>
            {children}
        </StyleContext.Provider>
    )
}

export const useStyle = () => useContext(StyleContext);