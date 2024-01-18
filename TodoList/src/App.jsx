import "./App.css";
import Home from "./Home";
import { Paper, Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          style={{
            padding: 10,
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom></Typography>

          <Home />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
