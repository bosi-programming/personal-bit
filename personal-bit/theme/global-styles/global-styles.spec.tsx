import React from 'react';
import { render } from '@testing-library/react';
import { BasicGlobalStyles } from './global-styles.composition';

it('should render with the correct text color', () => {
  const { getByText } = render(<BasicGlobalStyles />);
  const rendered = getByText('Styles on GlobalStyles affects all your app');
  expect(rendered).toHaveStyle('color: red');
});
