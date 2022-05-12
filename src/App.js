import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Home from "./pages/Home";

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
      <Home />
    </ThemeProvider>
  );
}

export default App;
