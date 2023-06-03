import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { DarkTheme} from './shared/themes/';
import { ThemeProvider } from "@mui/material";
import { AppThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
