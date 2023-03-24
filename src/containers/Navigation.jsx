import React from "react";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Персонажи</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Локации</NavLink>
        </li>
        <li>
          <NavLink to="/episodes">Эпизоды</NavLink>
        </li>
      </ul>
    </div>
  );
}
