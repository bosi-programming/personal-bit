import React from 'react';
import { Global, css } from '@emotion/react';
import { cssReset } from './global-css';

interface GlobalStylesProps {
  /** Any style that you want to apply in a global matter witten as common css */
  globalStyle?: string;
}

export const GlobalStyles: React.FC<GlobalStylesProps> = ({ globalStyle }) => (
  <Global
    styles={css`
      ${cssReset}${globalStyle}
    `}
  />
);
