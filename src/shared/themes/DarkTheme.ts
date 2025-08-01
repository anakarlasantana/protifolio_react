import { createTheme } from '@mui/material/styles';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#282C33',
            dark: '#4c6355',
            contrastText: '#42a96d',
            light: '#5d856d',
        },
        secondary: {
            main: '#42a96d',
        },
        background: {
            paper: '#282C33',
            default: '#282C33',
        },
        text: {
            primary: '#42a96d',
            secondary: '#f0f5f0',
            disabled: '#ABB2BF',
        },
        divider: '#42a96d',
        action: {
            active: '#42a96d',
            hover: 'rgba(66, 169, 109, 0.1)',
            selected: 'rgba(66, 169, 109, 0.2)',
            disabled: '#c3d6c6',
            disabledBackground: '#f0f5f0',
        },
    },
    typography: {
        fontFamily: `'Fira Code', monospace`,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                    padding: '8px 16px',
                    fontWeight: 500,
                    '&:hover': {
                        opacity: 0.9,
                    },
                    '&:disabled': {
                        backgroundColor: '#4c6355',
                        color: '#666666',
                    },
                },
                contained: {
                    backgroundColor: '#42a96d',
                    color: '#282C33',
                    '&:hover': {
                        backgroundColor: '#3a8f5e',
                    },
                },
                outlined: {
                    borderColor: '#42a96d',
                    color: '#42a96d',
                    '&:hover': {
                        backgroundColor: 'rgba(66, 169, 109, 0.1)',
                        borderColor: '#3a8f5e',
                    },
                },
                text: {
                    color: '#42a96d',
                    '&:hover': {
                        backgroundColor: 'rgba(66, 169, 109, 0.1)',
                    },
                },
            },
        },
    },
});