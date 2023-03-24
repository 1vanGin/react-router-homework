import React from "react";
import episodes from "../data/episode.json";
import { Link } from "react-router-dom";

export function Episodes() {
  return (
    <>
      <h1>Эпизоды</h1>
      <div className="episodes-wrapper">
        {episodes.map((episode) => {
          return (
            <Link to={`/episodes/${episode.id}`} key={episode.id}>
              {episode.name} - {episode.episode}
            </Link>
          );
        })}
      </div>
    </>
  );
}
