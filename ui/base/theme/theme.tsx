import React, { createContext, useState } from 'react';

const updateTheme = (
  partialTheme: Record<string, unknown>,
  newPartialTheme: Record<string, unknown>,
) => {
  const updatedTheme = {};
  Object.keys(partialTheme).forEach((key) => {
    if (partialTheme[key] && typeof partialTheme[key] === 'object') {
      updatedTheme[key] = updateTheme(
        partialTheme[key] as Record<string, unknown>,
        newPartialTheme[key] as Record<string, unknown>,
      );
    } else {
      updatedTheme[key] = newPartialTheme[key] ?? partialTheme[key];
    }
  });

  return updatedTheme;
};

export const baseTheme = {
  theme: {
    colors: {
      base: '#fff',
      text: '#333432',
      background: '#333432',
      primary: '#333432',
      secondary: '#333432',
      accent: '#333432',
    },
  },
  setState: (theme: Partial<typeof baseTheme.theme>) => updateTheme(baseTheme.theme, theme),
};

export interface ThemeProps {
  children: JSX.Element;
  theme?: Partial<typeof baseTheme.theme>;
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
