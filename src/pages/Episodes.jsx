import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { EPISODE_URL } from "../App";
import Loader from "../components/Loader/Loader";
import { useLastNodeRef } from "../hooks/useLastNodeRef";

export function Episodes() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error, hasMore } = useFetch(EPISODE_URL, {
    pageNumber,
  });

  const observer = useRef();
  const lastNodeRef = useLastNodeRef(observer, setPageNumber, {
    loading,
    hasMore,
  });

  return (
    <>
      <h1>Эпизоды</h1>
      <div className="episodes-wrapper">
        {data.map((episode, index) => {
          if (data.length - 10 === index + 1) {
            return (
              <Link
                ref={lastNodeRef}
                to={`/episodes/${episode.id}`}
                key={episode.id}
              >
                {episode.name} - {episode.episode}
              </Link>
            );
          } else {
            return (
              <Link to={`/episodes/${episode.id}`} key={episode.id}>
                {episode.name} - {episode.episode}
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
