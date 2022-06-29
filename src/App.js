import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./pages/Privacy";
function App() {
  const theme = {
    colors: {
      dark: "#3A3A3A",
      lightdark: "#5E5E5E",
      blue: "#587AD1",
      lightblue: "#D9E7FC",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
