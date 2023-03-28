import "./App.css";
import React from "react";
import { Navigation } from "./containers/Navigation";
import { RedirectRouter } from "./containers/RedirectRouter";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Navigation />
      <RedirectRouter />
    </AuthProvider>
  );
}

export default App;
