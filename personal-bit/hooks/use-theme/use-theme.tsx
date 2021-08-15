import { useContext } from 'react';
import { ThemeContext } from '@ui/felipeb.personal-bit.base.theme';

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
