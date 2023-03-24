import "./App.css";
import React from "react";
import { Navigation } from "./containers/Navigation";
import { RedirectRouter } from "./containers/RedirectRouter";

function App() {
  return (
    <>
      <Navigation />
      <RedirectRouter />
    </>
  );
}

export default App;
