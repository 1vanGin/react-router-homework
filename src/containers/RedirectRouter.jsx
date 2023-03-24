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

export function RedirectRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterCard />} />

        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<LocationCard />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<EpisodeCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
