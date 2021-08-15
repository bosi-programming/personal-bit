import { updateTheme } from './updateTheme';

export interface Theme {
  colors?: {
    base?: string;
    text?: string;
    background?: string;
    primary?: string;
    secondary?: string;
    accent?: string;
  };
}

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
  setState: (theme: Partial<typeof baseTheme.theme>) =>
    updateTheme(baseTheme.theme, theme),
};
