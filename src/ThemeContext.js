import React, { useState } from 'react';
import { createTheming } from '@callstack/react-theme-provider';
import defaultTheme from 'assets/Themes/DefaultTheme';

const { ThemeProvider, useTheme } = createTheming(defaultTheme);

const Context = React.createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [theme, switchTheme] = useState(defaultTheme);
  const currentTheme = useTheme(theme);

  return (
    <Context.Provider value={{ switchTheme }}>
      <ThemeProvider theme={currentTheme} defaultTheme={defaultTheme}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};

export { ThemeProviderWrapper, useTheme, Context as ThemeContext };
