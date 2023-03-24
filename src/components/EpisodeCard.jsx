import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import episodes from "../data/episode.json";

export function EpisodeCard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const currEpisode = episodes.find((episode) => episode.id === Number(id));
  if (currEpisode === undefined) {
    return <Navigate to="/episodes" />;
  }
  const { name, air_date, episode, created } = currEpisode;

  const localedDate = new Date(created).toLocaleString();
  return (
    <div className="episode-card">
      <div className="episode-card__name">
        <span>Имя:</span> {name}
      </div>
      <div className="episode-card__type">
        <span>Дата выхода:</span> {air_date}
      </div>
      <div className="episode-card__dimension">
        <span>Эпизод:</span> {episode}
      </div>
      <div className="episode-card__created">
        <span>Создан:</span> {localedDate}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}
