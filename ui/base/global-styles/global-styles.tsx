import React from 'react';
import { Global } from '@emotion/react';
import { cssReset, globalStyles } from './global-css';

export function GlobalStyles() {
  return <Global styles={`${cssReset}${globalStyles}`} />;
}
