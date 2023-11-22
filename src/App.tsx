import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes";
import { initGA } from './google-analytics';
import { useEffect } from "react";


function App() {

  useEffect(() => {
    initGA();
  }, []);
  
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
