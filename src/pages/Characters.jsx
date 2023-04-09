import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader/Loader";
import { CHARACTER_URL } from "../App";
import { useLastNodeRef } from "../hooks/useLastNodeRef";

export function Characters() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error, hasMore } = useFetch(CHARACTER_URL, {
    pageNumber,
  });

  const observer = useRef();
  const lastNodeRef = useLastNodeRef(observer, setPageNumber, {
    loading,
    hasMore,
  });

  return (
    <>
      <h1>Персонажи</h1>
      <div className="characters-wrapper">
        {data.map((character, index) => {
          if (data.length - 10 === index + 1) {
            return (
              <Link
                ref={lastNodeRef}
                to={`/characters/${character.id}`}
                className="character-card"
                key={character.id}
              >
                <img src={character.image} alt="name" />
                <div>{character.name}</div>
              </Link>
            );
          } else {
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
          }
        })}
      </div>
      {!loading && data.length === 0 && !error && <div>Нет данных</div>}
      {error && <div>Произошла ошибка загрузки данных</div>}
      {loading && <Loader />}
    </>
  );
}
