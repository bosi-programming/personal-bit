/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { baseTypography } from './typography.classes';

export type TypographyProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Typography({ text }: TypographyProps) {
  return <div css={baseTypography}>{text}</div>;
}
