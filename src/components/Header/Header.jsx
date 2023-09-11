import React, { useState } from "react";
// import { ReactComponent as Icon} from "./language-icon1.png";
import "./Header.css";

export const Header = () => {
  const [isOpen, setOpen] = useState();
  return (
      <div className="header">
      <span className="header_logo"><b>2KPDonate</b></span>
      <nav className={`header_nav ${isOpen ? "active": ""} `}>
        <ul className="header_nav_list">
          <li className="header_nav_item">Цільові збори</li>
          <li className="header_nav_item">Зробити внесок</li>
          <li className="header_nav_item">Про нас</li>
          <li className="header_nav_item">Сервіси</li>
          <div className="header_language">
            {/* <button className="header_button_language"><Icon /></button> */}
            <button className="header_button_language">мова</button>
          </div>
        </ul>
      </nav>
      <button className="header_button_help">Допомоги</button>
      <button className="header_button_profile">Профіль</button>
      <button className="header_menu_button" onClick={() => setOpen(!isOpen)}></button>
    </div>
  );
};
