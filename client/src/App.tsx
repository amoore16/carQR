import "./App.css";

import { Switch, Route } from "react-router-dom";

import Home from "./modules/Home/Home";
import Login from "./modules/Login/Login";
import ButtonAppBar from "./components/AppBar/AppBar";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Signup from "./modules/Signup/Signup";
import Gallery from "./modules/Gallery/Gallery";
const isDarkModeOn = true;

const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#56c7d6",
      main: "#0096a5",
      dark: "#006876",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bef67a",
      main: "#8bc34a",
      dark: "#5a9216",
      contrastText: "#000",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#006876" },
    primary: {
      light: "#56c7d6", 
      main: "#0096a5",
      dark: "#006876",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bef67a",
      main: "#8bc34a",
      dark: "#5a9216",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <CssBaseline />
      <ButtonAppBar />
      <Container>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
