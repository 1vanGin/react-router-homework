import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import locations from "../data/location.json";

export function LocationCard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const currLocation = locations.find((location) => location.id === Number(id));
  if (currLocation === undefined) {
    return <Navigate to="/locations" />;
  }
  const { name, type, dimension, created } = currLocation;
  const localedDate = new Date(created).toLocaleString();
  return (
    <div className="location-card">
      <div className="location-card__name">
        <span>Имя:</span> {name}
      </div>
      <div className="location-card__type">
        <span>Тип:</span> {type}
      </div>
      <div className="location-card__dimension">
        <span>Измерение:</span> {dimension}
      </div>
      <div className="location-card__created">
        <span>Создан:</span> {localedDate}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}
