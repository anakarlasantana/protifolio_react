import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Box, Container, ThemeProvider } from '@mui/material';

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
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'dark' ? 'light' : 'dark');
  }, []);

  const theme = useMemo(() => {
    return themeName === 'dark' ? DarkTheme : LightTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: '100vh',
            bgcolor: theme.palette.background.paper,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Container maxWidth="lg">
            {children}
          </Container>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
