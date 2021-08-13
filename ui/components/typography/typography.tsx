/** @jsx jsx */
import React from 'react';
import { jsx, useTheme } from '@emotion/react';
import { baseTheme } from '@ui/felipeb.personal-bit.base.theme';
import { baseTypography } from './typography.classes';

export type TypographyProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Typography({ text }: TypographyProps) {
  let theme = useTheme();

  if (!theme || Object.keys(theme).length === 0) {
    theme = baseTheme;
  }
  return <div css={baseTypography(theme)}>{text}</div>;
}
