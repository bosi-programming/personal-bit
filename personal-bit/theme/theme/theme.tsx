import React, { createContext, useState } from 'react';
import { baseTheme, Theme, getTheme } from './baseTheme';
import { GlobalStyles } from './GlobalStyles';

export interface ThemeProps {
  children: JSX.Element;
  /** Select between the theme options that we have: 'light' | 'dark' */
  themeName?: Theme;
}

export const ThemeContext = createContext<typeof baseTheme>(baseTheme);

export function ThemeProvider({ children, themeName }: ThemeProps) {
  const handleThemeChange = (newThemeName: Theme) => {
    localStorage.setItem('themeName', newThemeName);
    const newTheme = getTheme(newThemeName);
    setState({ ...state, theme: newTheme, themeName: newThemeName });
  };

  const [state, setState] = useState({
    themeName: baseTheme.themeName,
    theme: themeName ? getTheme(themeName) : baseTheme.theme,
    setTheme: handleThemeChange,
  });

  return (
    <ThemeContext.Provider value={state}>
      <GlobalStyles />
      {children}
    </ThemeContext.Provider>
  );
}
