import React from 'react';
import { GlobalStyles } from './global-styles';

export const BasicGlobalStyles = () => (
  <>
    <GlobalStyles globalStyle={'.text { font-size: 30px; color: red}'} />
    <p className="text">Styles on GlobalStyles affects all your app</p>
  </>
);
