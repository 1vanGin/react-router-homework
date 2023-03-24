import React from "react";
import locations from "../data/location.json";
import { Link } from "react-router-dom";

export function Locations() {
  return (
    <>
      <h1>Локации</h1>
      <div className="locations-wrapper">
        {locations.map((location) => {
          return (
            <Link to={`/locations/${location.id}`} key={location.id}>
              {location.id} - {location.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
