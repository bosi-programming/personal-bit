import { Theme } from './baseTheme';

export const updateTheme = (
  partialTheme: Theme,
  newPartialTheme: Theme | undefined,
) => {
  if (!newPartialTheme) {
    return partialTheme;
  }
  const updatedTheme = {};
  Object.keys(partialTheme).forEach((key) => {
    if (partialTheme[key] && typeof partialTheme[key] === 'object') {
      updatedTheme[key] = updateTheme(partialTheme[key], newPartialTheme[key]);
    } else {
      updatedTheme[key] = newPartialTheme[key] ?? partialTheme[key];
    }
  });

  return updatedTheme;
};
