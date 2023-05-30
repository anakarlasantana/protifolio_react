import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ThemeProvider } from "@emotion/react";
import { DarkTheme} from './shared/themes/';

function App() {
  return (
    <ThemeProvider theme={DarkTheme} >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
