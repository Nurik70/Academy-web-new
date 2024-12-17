import React from "react";
import logo from "../../images/icon-academy.jpg"; 
import instagramLogo from "../../images/icon-instagram.png"; 
import facebookLogo from "../../images/icon-facebook.png"; 
import youtubeLogo from "../../images/icon-youtube.png"; 
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
        <div className="footer-logo">
          <div className="logo-and-name">
          <img src={logo} alt="Sport Logo" className="footer-logo-img" />
          <h3 className="footer-logo-text">Академия Спорта</h3>
          </div>
        </div>
          <div className="footer-section">
          <ul>
            <li><a href="#">Ассоциация Дордой</a></li>
            <li><a href="#">Dordoi Plaza</a></li>
            <li><a href="#">Cinematica</a></li>
            <li><a href="#">МОиН КР</a></li>
            <li><a href="#">МЗ КР</a></li>
          </ul>
        </div>
        </div>

        <div className="footer-section">
          <h4>Полезные ссылки</h4>
          <ul>
            <li><a href="#">Ассоциация Дордой</a></li>
            <li><a href="#">Dordoi Plaza</a></li>
            <li><a href="#">Cinematica</a></li>
            <li><a href="#">МОиН КР</a></li>
            <li><a href="#">МЗ КР</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Контакты</h4>
          <ul>
            <li><a href="#">Международный факультет медицины</a></li>
            <li><a href="#">Международный колледж IT и бизнеса</a></li>
            <li><a href="#">Бизнес школа Салымбекова</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Полезные ссылки</h4>
          <ul>
            <li><a href="#">Ассоциация Дордой</a></li>
            <li><a href="#">Dordoi Plaza</a></li>
            <li><a href="#">Cinematica</a></li>
            <li><a href="#">МОиН КР</a></li>
            <li><a href="#">МЗ КР</a></li>
          </ul>
        </div>
      </div>

      <div className="nij-footer">
        <div>
          <p>2023 © Кыргызская Государственная Академия Физической Культуры и Спорта им. Б.Т.Турсбекова</p>
        </div>
        <div className="bottom-footer">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtubeLogo} alt="YouTube" />
          </a>
        </div>

      </div>
    </footer>
    
  );
};

export default Footer
