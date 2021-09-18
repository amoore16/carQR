import * as React from "react";
import logo from "../../logo.svg";
import Button from "@mui/material/Button";
import ButtonAppBar from "../../components/AppBar/AppBar";


export default function MainView() {
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });

  return (
    <>
      <ButtonAppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </>
  );
}
