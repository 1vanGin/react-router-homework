import React from "react";
import RickMorty404 from "../images/Rick&Morty_404.png";
import logo from "../images/logo.png";

export function NotFound() {
  return (
    <>
      <div className="images-wrapper">
        <img src={logo} alt="Rick and Morty" />
        <img src={RickMorty404} alt="Rick and Morty" />
      </div>
      <h1>404 - Страница не найдена</h1>
    </>
  );
}
