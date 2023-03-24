import React from "react";
import characters from "../data/characters.json";
import { Link } from "react-router-dom";

export function Characters() {
  return (
    <>
      <h1>Персонажи</h1>
      <div className="characters-wrapper">
        {characters.map((character) => {
          return (
            <Link
              to={`/characters/${character.id}`}
              className="character-card"
              key={character.id}
            >
              <img src={character.image} alt="name" />
              <div>{character.name}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
