import React, { createContext, useState } from 'react';
import { updateTheme, baseTheme } from '.';
import { Theme } from './baseTheme';

export interface ThemeProps {
  children: JSX.Element;
  theme?: Theme;
}

export const ThemeContext = createContext<typeof baseTheme>(baseTheme);

export function ThemeProvider({ children, theme }: ThemeProps) {
  const [state, setState] = useState(updateTheme(baseTheme.theme, theme));

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
}
