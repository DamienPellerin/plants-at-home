import React from "react";
import navbar from "./navbar.module.css";
import Logo from "../Logo/Logo";
import logo from "/Users/damien/Desktop/plants-at-home/src/assets/img/logo.jpeg";
import Menu from "../Menu/Menu";
export function Navbar() {
  return (
    <div className={navbar.container}>
      <div className={navbar.logo}>
        <Logo image={logo} title="Plants At Home" />
      </div>
      <div className={navbar.menu}>
        <Menu />
      </div>
    </div>
  );
}
