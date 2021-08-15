import React from 'react';
import { Global, css } from '@emotion/react';
import { cssReset } from './global-css';

export interface GlobalStylesProps {
  /** Any style that you want to apply in a global matter witten as common css */
  globalStyle?: string;
}

export const GlobalStyles = ({ globalStyle }: GlobalStylesProps) => (
  <Global
    styles={css`
      ${cssReset}${globalStyle}
    `}
  />
);
