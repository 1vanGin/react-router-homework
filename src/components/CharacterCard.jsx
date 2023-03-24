import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import characters from "../data/characters.json";
export function CharacterCard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const currCharacter = characters.find(
    (character) => character.id === Number(id)
  );
  if (currCharacter === undefined) {
    return <Navigate to="/characters" />;
  }
  const { name, status, species, type, gender, image, created } = currCharacter;
  const localedDate = new Date(created).toLocaleString();

  return (
    <div className="character-card">
      <img className="character-card__image" src={image} alt="name" />
      <div className="character-card__name">
        <span>Имя:</span> {name}
      </div>
      <div className="character-card__status">
        <span>Статус:</span> {status}
      </div>
      <div className="character-card__species">
        <span>Раса:</span> {species}
      </div>
      {type && (
        <div className="character-card__type">
          <span>Вид:</span> ${type}
        </div>
      )}
      <div className="character-card__gender">
        <span>Гендер:</span> {gender}
      </div>
      <div className="character-card__created">
        <span>Создан:</span> {localedDate}
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}
