import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./modules/Home/Home";
import Login from "./modules/Login/Login";
import ButtonAppBar from "./components/AppBar/AppBar";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
