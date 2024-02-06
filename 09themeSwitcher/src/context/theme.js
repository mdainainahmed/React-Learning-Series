import React from 'react';

// create context
export const ThemeContext = React.createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
}) 

// context provider
export const ThemeProvider = ThemeContext.Provider

// useContext Hook
export function useTheme() {
    return React.useContext(ThemeContext);
}