import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoAcademy from "../../images/icon-academy.jpg";

const Navbar = () => {
  return (
    <div>
      {/* Верхняя часть с контактами и языками */}
      <div className="navbar-top">
        <div className="contact-info">
          <a href="tel:+996312658538">+996 (312) 658-538</a> |{" "}
          <a href="mailto:info@salymbekov.com">info@salymbekov.com</a>
        </div>
        <div className="language-switcher">
          <span>EN</span> | <span>RU</span> | <span>KG</span>
        </div>
        <div className="link-ebilim">
          <a href="/https://ebilim.ksapcs.kg/Account/Login?ReturnUrl=%2F">eBilim</a>
        </div>
      </div>

      {/* Нижняя часть с логотипом, текстом и ссылками */}
      <div className="navbar-bottom">
        <div className="navbar-logo">
          <img src={logoAcademy} alt="Logo" className="logo" />
          <span className="logo-text">КГАФКиС</span>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Об академии
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Образование
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/science"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Наука
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dissovet"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Диссовет К 13.22.653
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/postupat"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Поступающим
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
