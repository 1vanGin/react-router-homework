import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Characters } from "./Characters";
import { Locations } from "./Locations";
import { Episodes } from "./Episodes";
import { NotFound } from "../pages/NotFound";
import { CharacterCard } from "../components/CharacterCard";
import { LocationCard } from "../components/LocationCard";
import { EpisodeCard } from "../components/EpisodeCard";
import { Login } from "../pages/Login";
import { PrivateRoute } from "../components/PrivateRoute";

export function RedirectRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <PrivateRoute>
              <Characters />
            </PrivateRoute>
          }
        />
        <Route
          path="/characters/:id"
          element={
            <PrivateRoute>
              <CharacterCard />
            </PrivateRoute>
          }
        />

        <Route
          path="/locations"
          element={
            <PrivateRoute>
              <Locations />
            </PrivateRoute>
          }
        />
        <Route
          path="/locations/:id"
          element={
            <PrivateRoute>
              <LocationCard />
            </PrivateRoute>
          }
        />

        <Route
          path="/episodes"
          element={
            <PrivateRoute>
              <Episodes />
            </PrivateRoute>
          }
        />
        <Route
          path="/episodes/:id"
          element={
            <PrivateRoute>
              <EpisodeCard />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
