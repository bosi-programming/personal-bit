import { css } from '@emotion/react';
import { baseTheme } from '@ui/felipeb.personal-bit.base.theme';

export const baseTypography = (theme: typeof baseTheme) => css`
  font-family: Roboto;
  color: ${theme.colors.primary};
`;
