import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './theme';

// @ts-ignore
export const BasicThemeProvider = ({ children }) => (
  <ThemeProvider theme={{ colors: { primary: 'red' } }}>
    {children}
  </ThemeProvider>
);

export const ThemeProviderWithTheme = () => (
  <BasicThemeProvider>
    <p>test</p>
    <TestComp />
  </BasicThemeProvider>
);

const TestComp = () => {
  const state = useContext(ThemeContext);
  return <div />;
};
