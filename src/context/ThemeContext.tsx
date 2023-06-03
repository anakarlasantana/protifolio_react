import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { DarkTheme, LightTheme } from '../shared/themes';

interface IThemeContextData {
  themeName: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

interface IAppThemeProviderProps {
  children: React.ReactNode
}
export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');
  
  

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'dark' ? 'light' : 'dark');
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'dark') return DarkTheme;

    return LightTheme;
  }, [themeName]);


  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.paper}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};