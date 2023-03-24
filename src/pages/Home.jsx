import React from "react";
import RickMorty from "../images/Rick&Morty.png";
import logo from "../images/logo.png";

export function Home() {
  return (
    <>
      <div className="images-wrapper">
        <img src={logo} alt="Rick and Morty" />
        <img src={RickMorty} alt="Rick and Morty" />
      </div>
      <h1>Добро пожаловать на фан-страницу по Рику и Морти</h1>
    </>
  );
}
