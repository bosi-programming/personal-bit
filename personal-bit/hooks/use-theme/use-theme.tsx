import { useContext } from 'react';
import { ThemeContext } from '@felipeb/personal-bit.theme.theme';

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
