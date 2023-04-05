import "./App.css";
import React from "react";
import { Navigation } from "./containers/Navigation";
import { RedirectRouter } from "./containers/RedirectRouter";
import { AuthProvider } from "./context/AuthProvider";

export const CHARACTER_URL = "https://rickandmortyapi.com/api/character";
export const LOCATION_URL = "https://rickandmortyapi.com/api/location";
export const EPISODE_URL = "https://rickandmortyapi.com/api/episode";

function App() {
  return (
    <AuthProvider>
      <Navigation />
      <RedirectRouter />
    </AuthProvider>
  );
}

export default App;
