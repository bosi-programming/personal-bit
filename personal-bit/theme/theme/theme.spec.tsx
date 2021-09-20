import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';

import { baseTheme } from './baseTheme';

import {
  ComponentWithChangeTheme,
  ComponentWithUseTheme,
  ThemeProviderWithTheme,
} from './theme.composition';

describe('Test useTheme hook', () => {
  test('useTheme should return baseTheme if there is no context', () => {
    const { getByText } = render(<ComponentWithUseTheme />);
    const rendered = getByText('Hello');
    expect(rendered).toHaveStyle(`color: ${baseTheme.theme.colors.primary}`);
  });
});

describe('Test ThemeContext and ThemeProvider', () => {
  test('useContext with ThemeContext should return new theme if there is context and a new theme is added', () => {
    const { getByText } = render(<ThemeProviderWithTheme />);
    const rendered = getByText(
      'Text getting color from theme primary color and background color',
    );
    expect(rendered).toHaveStyle('color: rgb(36, 99, 71)');
  });

  test('Should return new theme if user click to change theme', async () => {
    render(<ComponentWithChangeTheme />);
    const button = screen.getByText('Click to change theme');
    expect(button).toHaveStyle('color: rgb(36, 99, 71)');

    fireEvent.click(button);
  });
});
