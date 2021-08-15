import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GlobalStyles } from './personal-bit/theme/global-styles/global-styles';

interface AddGlobalStylesProps {
  children: JSX.Element;
}

export const AddGlobalStyles: React.FC<AddGlobalStylesProps> = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

const customRender = (ui: JSX.Element, options?: any) =>
  render(ui, { wrapper: AddGlobalStyles, ...options });

export * from '@testing-library/react';
export { customRender as render };
