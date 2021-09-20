import { tokens } from './tokens';

export type Theme = 'light' | 'dark';

export const getTheme = (theme: Theme) => ({
  colors: {
    black: tokens.colors.neutrals.black.value,
    gray15: tokens.colors.neutrals['gray-15'].value,
    gray68: tokens.colors.neutrals['gray-68'].value,
    gray93: tokens.colors.neutrals['gray-93'].value,
    white: tokens.colors.neutrals.white.value,
    primary: tokens.colors.brand[`primary-on-${theme}`].value,
    secondary: tokens.colors.brand[`secondary-on-${theme}`].value,
    background: tokens.colors.background[`on-${theme}`].value,
    successBackground: tokens.colors['attention-backgrounds'].success.value,
    errorBackground: tokens.colors['attention-backgrounds'].error.value,
    warningBackground: tokens.colors['attention-backgrounds'].warning.value,
    infoBackground: tokens.colors['attention-backgrounds'].info.value,
  },
  typography: {
    body: {
      fontFamily: tokens.typography.body.fontFamily.value,
      fontWeight: tokens.typography.body.fontWeight.value,
      lineHeight: tokens.typography.body.lineHeight.value,
      fontSize: tokens.typography.body.fontSize.value,
      marginBottom:
        parseFloat(tokens.typography.body.fontSize.value) *
        parseFloat(tokens.typography.body.paragraphSpacing.value),
    },
    heading1: {
      fontFamily: tokens.typography.heading1.fontFamily.value,
      fontWeight: tokens.typography.heading1.fontWeight.value,
      lineHeight: tokens.typography.heading1.lineHeight.value,
      fontSize: tokens.typography.heading1.fontSize.value,
      marginBottom:
        parseFloat(tokens.typography.heading1.fontSize.value) *
        parseFloat(tokens.typography.heading1.paragraphSpacing.value),
    },
    heading2: {
      fontFamily: tokens.typography.heading2.fontFamily.value,
      fontWeight: tokens.typography.heading2.fontWeight.value,
      lineHeight: tokens.typography.heading2.lineHeight.value,
      fontSize: tokens.typography.heading2.fontSize.value,
      marginBottom:
        parseFloat(tokens.typography.heading2.fontSize.value) *
        parseFloat(tokens.typography.heading2.paragraphSpacing.value),
    },
    heading3: {
      fontFamily: tokens.typography.heading3.fontFamily.value,
      fontWeight: tokens.typography.heading3.fontWeight.value,
      lineHeight: tokens.typography.heading3.lineHeight.value,
      fontSize: tokens.typography.heading3.fontSize.value,
      marginBottom:
        parseFloat(tokens.typography.heading3.fontSize.value) *
        parseFloat(tokens.typography.heading3.paragraphSpacing.value),
    },
    heading4: {
      fontFamily: tokens.typography.heading4.fontFamily.value,
      fontWeight: tokens.typography.heading4.fontWeight.value,
      lineHeight: tokens.typography.heading4.lineHeight.value,
      fontSize: tokens.typography.heading4.fontSize.value,
      marginBottom:
        parseFloat(tokens.typography.heading4.fontSize.value) *
        parseFloat(tokens.typography.heading4.paragraphSpacing.value),
    },
    details: {
      fontFamily: tokens.typography.details.fontFamily.value,
      fontWeight: tokens.typography.details.fontWeight.value,
      lineHeight: tokens.typography.details.lineHeight.value,
      fontSize: tokens.typography.details.fontSize.value,
      marginBottom:
        parseFloat(tokens.typography.details.fontSize.value) *
        parseFloat(tokens.typography.details.paragraphSpacing.value),
    },
  },
  spacing: {
    unit: tokens.spacing.unit.value,
  },
});

const selectedTheme = localStorage.getItem('themeName') as Theme;

export const baseTheme = {
  themeName: selectedTheme,
  theme: getTheme(selectedTheme || 'light'),
  setTheme: (_: Theme) => {},
};
