import React from 'react';
import { Global, css } from '@emotion/react';

const reset = css`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    font-size: 100%;
    list-style-type: none;
  }
`;

const fonts = css`
  @font-face {
    font-family: 'freight-sans-pro', sans-serif;
  }

  * {
    font-family: 'freight-sans-pro';
  }
`;

export const GlobalStyles = () => (
  <>
    <link rel="stylesheet" href="https://use.typekit.net/ddf6rro.css" />
    <Global
      styles={css`
        ${reset} ${fonts}
      `}
    />
  </>
);
