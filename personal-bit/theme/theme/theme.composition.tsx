import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './theme';
import { Theme } from './baseTheme';
import { useTheme } from './useTheme';

export const BasicProvider = ({
  children,
  theme = 'light',
}: {
  children: JSX.Element;
  theme: Theme;
}) => <ThemeProvider themeName={theme ?? 'light'}>{children}</ThemeProvider>;

const TestComp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <p
      style={{
        color: theme.colors.primary,
        background: theme.colors.background,
      }}
    >
      Text getting color from theme primary color and background color
    </p>
  );
};

export const ThemeProviderWithTheme = ({
  children,
  theme,
}: {
  children?: any;
  theme?: Theme;
}) => (
  <BasicProvider theme={theme ?? 'light'}>
    {children ?? <TestComp />}
  </BasicProvider>
);

export const WithDarkTheme = () => <ThemeProviderWithTheme theme="dark" />;

export const ComponentWithUseTheme = () => {
  const { theme } = useTheme();

  return (
    <p
      style={{
        color: theme.colors.primary,
        background: theme.colors.background,
      }}
    >
      Hello
    </p>
  );
};

export const DarkComponentWithUseTheme = () => {
  const { theme } = useTheme('dark');

  return (
    <p
      style={{
        color: theme.colors.primary,
        background: theme.colors.background,
      }}
    >
      Hello
    </p>
  );
};

const TextThemedWithHook = () => {
  const { theme: themeFromHook } = useTheme();

  return (
    <p
      style={{
        color: themeFromHook.colors.primary,
        background: themeFromHook.colors.background,
      }}
    >
      Themed text
    </p>
  );
};

export const ComponentWithChangeTheme = () => (
  <ThemeProviderWithTheme theme={'light'}>
    <ThemeContext.Consumer>
      {({ themeName, theme, setTheme }) => (
        <button
          type="button"
          style={{
            color: theme.colors.primary,
            background: theme.colors.background,
          }}
          onClick={() => setTheme(themeName === 'light' ? 'dark' : 'light')}
        >
          Click to change theme
        </button>
      )}
    </ThemeContext.Consumer>
    <TextThemedWithHook />
  </ThemeProviderWithTheme>
);
