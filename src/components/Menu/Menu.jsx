import React from "react";
import menu from "./menu.module.css";

const Menu = () => {
  return (
    <div className={menu.container}>
      <ul className={menu.list}>
        <li>Accueil</li>
        <li>Plantes</li>
        <li></li>
      </ul>
    </div>
  );
};

export default Menu;
