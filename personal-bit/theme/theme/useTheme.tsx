import { useContext } from 'react';
import { ThemeContext } from './theme';
import { Theme, getTheme, baseTheme } from './baseTheme';

export const useTheme = (themeName?: Theme) => {
  const theme = useContext(ThemeContext);

  return themeName ? { ...baseTheme, theme: getTheme(themeName) } : theme;
};
