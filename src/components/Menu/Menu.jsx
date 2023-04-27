import React from "react";
import menu from "./menu.module.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className={menu.container}>
      <ul className={menu.list}>
        <li onClick={() => navigate("/")}>Accueil</li>
        <li>Plantes</li>
        <li></li>
      </ul>
    </div>
  );
};

export default Menu;
