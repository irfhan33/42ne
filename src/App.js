import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <h1>Tes</h1>
    </ThemeProvider>
  );
}

export default App;
