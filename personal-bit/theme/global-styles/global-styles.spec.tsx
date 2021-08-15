import React from 'react';
import { render } from '../../../setupTests';
import { BasicGlobalStyles } from './global-styles.composition';

it('should render with the correct border without GlobalStyles component on test suite', () => {
  const { getByText } = render(<button type="button">Test Button</button>);
  const rendered = getByText('Test Button');
  expect(rendered).toHaveStyle('border: 0');
});

it('should render with the correct text color', () => {
  const { getByText } = render(<BasicGlobalStyles />);
  const rendered = getByText('Styles on GlobalStyles affects all your app');
  expect(rendered).toHaveStyle('color: red');
});
