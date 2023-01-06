import React, { createContext, ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme/generalColors';

type CreateContextInterface = {
  colors: {
    white: string;
    black: string;
    grayLight: string;
    gray: string;
    graySemiMedium: string;
    grayMedium: string;
    grayDark: string;
    grayDarker: string;
    primaryDefault: string;
    secondaryDefault: string;
    redLight: string;
    red: string;
    redDark: string;
    blueLight: string;
    blue: string;
    greenLight: string;
    green: string;
  };
};

type ThemeContextProps = {
  children: ReactNode;
};

const ThemeContext = createContext<CreateContextInterface | null>(null);

export function ThemeWrapper({ children }: ThemeContextProps) {
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => useContext(ThemeContext);

export default ThemeWrapper;
