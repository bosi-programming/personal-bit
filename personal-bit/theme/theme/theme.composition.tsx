import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './theme';

const BasicProvider = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const TestComp = () => {
  const { state: theme } = useContext(ThemeContext);
  return (
    <p style={{ color: theme.colors.primary }}>
      Text getting red color from theme primary colors
    </p>
  );
};

export const ThemeProviderWithTheme = ({ theme }) => (
  <BasicProvider theme={theme ?? { colors: { primary: 'red' } }}>
    <TestComp />
  </BasicProvider>
);
