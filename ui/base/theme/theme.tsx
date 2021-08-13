import React from 'react';
import { ThemeProvider } from '@emotion/react';

export const baseTheme = {
  colors: {
    primary: '#182538',
  },
};

export interface ThemeProps {
  children: JSX.Element;
}

export function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={baseTheme}>
      {children}
    </ThemeProvider>
  );
}
