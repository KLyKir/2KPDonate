import React, { useState } from "react";
// import { ReactComponent as Icon} from "./language-icon1.png";
import "./Header.css";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <nav className="header">
        <div
          className={`header_menu_button ${isOpen ? "rotated" : ""}`}
          onClick={toggleMenu}
        >
          ☰
        </div>
        <div className="header_logo">2KPDonate</div>
        <nav className="header_nav">
          <div className="header_nav_list">
            <div className="header_nav_item">Цільові збори</div>
            <div className="header_nav_item">Зробити внесок</div>
            <div className="header_nav_item">Про нас</div>
            <div className="header_nav_item">Сервіси</div>
            <div className="header_language">
              {/* <button className="header_button_language"><Icon /></button> */}
              <div className="header_button_language">мова</div>
            </div>
          </div>
        </nav>
        <a className="header_button_help">
          <div className="menuButt">Допомоги</div>
        </a>
        <a className="header_button_profile">
          <div className="menuButt">Профіль</div>
        </a>
      </nav>
      <nav
        className={`phoneMenu ${isOpen ? "open" : ""}`}
        style={{ left: isOpen ? "0%" : "100%" }}
      >
        <a className="menuBarA">
          <div className="menuBar">Цільові збори</div>
        </a>
        <a className="menuBarA">
          <div className="menuBar">Зробити внесок</div>
        </a>
        <a className="menuWBarA">
          <div className="menuBar">Про нас</div>
        </a>
        <a className="menuBarA">
          <div className="menuBar">Сервіси</div>
        </a>
        <a className="menuBarA">
          <div className="header_button_language">мова</div>
        </a>
      </nav>
    </>
  );
};
