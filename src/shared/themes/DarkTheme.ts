import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#282C33',
            dark: '#4c6355',
            contrastText: '#42a96d',
            light: '#5d856d'
            
        },
        background: {
            paper: '#282C33',
        }
    }
})