import React from "react";
import navbar from "./navbar.module.css";
import Logo from "../Logo/Logo";
import logo from "/Users/damien/Desktop/react/plants-at-home/src/assets/img/logo.png";
import Menu from "../Menu/Menu";
export function Navbar() {
  return (
    <div className={navbar.container}>
      <div className={navbar.logo}>
        <Logo image={logo} title="Flowra" />
      </div>
      <div className={navbar.menu}>
        <Menu />
      </div>
    </div>
  );
}
