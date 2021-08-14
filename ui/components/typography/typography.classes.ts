import { css, Theme } from '@emotion/react';

export const baseTypography = (theme: Theme) => css`
  font-family: Roboto;
  color: ${theme.colors.primary};
`;
