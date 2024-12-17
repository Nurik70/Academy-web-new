import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoAcademy from "../../images/icon-academy.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="contact-info">
          <a href="tel:+996312658538">+996 (312) 658-538</a> |{" "}
          <a href="mailto:info@salymbekov.com">info@salymbekov.com</a>
        </div>
        <div className="language-switcher">
          <span>EN</span> | <span>RU</span> | <span>KG</span>
        </div>
        <div className="link-ebilim">
          <a href="https://ebilim.ksapcs.kg/Account/Login?ReturnUrl=%2F">
            eBilim
          </a>
        </div>
      </div>

      <div className="navbar-bottom">
        <Link to="/">
          <div className="navbar-logo">
            <img src={logoAcademy} alt="Logo" className="logo" />
            <span className="logo-text">КГАФКиС</span>
          </div>
        </Link>
        <ul className="navbar-links">
          <li className="nav-item">
            <Link to="/">
              <button className="nav-button">Главная</button>
            </Link>
            <ul className="sub-links">
              <li>
                <Link to="/mission">Миссия академии</Link>
              </li>
              <li>
                <Link to="/accreditation">Аккредитация</Link>
              </li>
              <li>
                <Link to="/lizenz">Лицензия</Link>
              </li>
              <li>
                <Link to="/strategRaz">Стратегия и программы развития</Link>
              </li>
              <li>
                <Link to="/events">Нормативные акты КР</Link>
              </li>
              <li>
                <Link to="/lokalReg">Локальные нормативные деятельность</Link>
              </li>
              <li>
                <Link to="/vacancies">Вакансии</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <button className="nav-button">Об академии</button>
            <ul className="sub-links">
              <li>
                <Link to="/academy">Академия</Link>
              </li>
              <li>
                <Link to="/faculties">Факультеты и отделения</Link>
              </li>
              <li>
                <Link to="/trustees">Попечительский совет</Link>
              </li>
              <li>
                <Link to="/rectorat">Ректорат</Link>
              </li>
              <li>
                <Link to="/uchSovet">Ученный совет</Link>
              </li>
              <li>
                <Link to="/StructureA">Структура академии</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <button className="nav-button">Образование</button>
            <ul className="sub-links">
              <li>
                <Link to="/aCalendar">Академический календарь</Link>
              </li>
              <li>
                <Link to="/schedule">Расписание</Link>
              </li>
              <li>
                <Link to="/codeEthics">Кодекс профессиональной этики</Link>
              </li>
              <li>
                <Link to="/controlE">Контроль и оценка</Link>
              </li>
              <li>
                <Link to="/zayavStud">Образцы заявлений для студентов</Link>
              </li>
              <li>
                <Link to="/rekviz">Реквизиты</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <button className="nav-button">Наука</button>
            <ul className="sub-links">
              <li>
                <Link to="/nIR">Научно-. исследовательская работа(НИР)</Link>
              </li>
              <li>
                <Link to="pPS">Публикации ППС</Link>
              </li>
              <li>
                <Link to="/monographsAndGuides">
                  Изданные монографии, учебные, научно-методические пособии.
                </Link>
              </li>
              <li>
                <Link to="/studyTrips">Научные командировки и стажировки</Link>
              </li>
              <li>
                <Link to="/nTS">Научно-технический совет(HTC)</Link>
              </li>
              <li>
                <Link to="/ScienEvents">Научные мероприятия</Link>
              </li>
              <li>
                <Link to="/nIRS">
                  Научно-исследовательская работа студентов (НИРС)
                </Link>
              </li>
              <li>
                <Link to="/aStrategyKGAFCIS">
                  Стратегический план по научной работе КГАФКИС
                </Link>
              </li>
              <li>
                <Link to="/scienJournal">Научный журнал</Link>
              </li>
              <li>
                <Link to="/news">Новости</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <button className="nav-button">Диссовет К 13.22.653</button>
            <ul className="sub-links">
              <li>
                <Link to="/k1322653Members">Состав ДС К 13.22.653</Link>
              </li>
              <li>
                <Link to="/eQueue">Электронная очередь</Link>
              </li>
              <li>
                <Link to="/notice">Объявление</Link>
              </li>
              <li>
                <Link to="/dissertations">Авторефераты и диссертация</Link>
              </li>
              <li>
                <Link to="/expertOpinion">Экспертное заключение</Link>
              </li>
              <li>
                <Link to="/feedback">
                  Отзывы оппонентов и ведущей организации
                </Link>
              </li>
              <li>
                <Link to="/thesesList">Список научных трудов соискателей</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <button className="nav-button">Поступающим</button>
            <ul className="sub-links sub-links-last">
              <div>
                <li>
                  <Link to="/sportNorms">
                    Нормативные требования по видам спорта
                  </Link>
                </li>
                <li>
                  <Link to="/admissionRules2024">
                    Правила поступления в академию 2023 г.
                  </Link>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
