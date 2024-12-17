import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../../images/zdanie-home.jpg";
import Slide2 from "../../images/run-home.jpg";
import Slide3 from "../../images/karate-home.jpg";
import FotoRector from "../../images/foto-rector.jpg"
import News1 from "../../images/news-1-home.jpg"
import News2 from "../../images/news-2-home.jpg"
import News3 from "../../images/news-3-home.jpg"
import "./Home.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Автоматическое переключение
    autoplaySpeed: 2000, // Интервал (в миллисекундах) между переключениями
    cssEase: "ease-in-out", // Плавность переключения
    nextArrow: <CustomNextArrow />, // Пользовательская кнопка "Вперед"
    prevArrow: <CustomPrevArrow />, // Пользовательская кнопка "Назад"
  };

  const slides = [
    { id: 1, image: Slide1 },
    { id: 2, image: Slide2},
    { id: 3, image: Slide3 },
  ];

  const newsData = [
    { id: 1, title: "Ректор встретился с послом Азербайджана", description: "Ректор университета встретился с послом Азербайджана для обсуждения укрепления сотрудничества в области образования, научных исследований и культурного обмена. В ходе встречи обсудили совместные проекты и перспективы партнерства.", image: News1 },
    { id: 2, title: "Ректор обсудил с Президентом дальнейшие планы по строительствы спортивного зала", description: "Ректор провёл встречу с Президентом, на которой обсудили дальнейшие планы по строительству современного спортивного зала, его инфраструктуру, сроки реализации и важность проекта для развития студентов.", image: News2 },
    { id: 3, title: "Ректор и делегация Турции потписали договор", description: "Ректор университета и делегация Турции подписали договор о сотрудничестве, направленный на развитие образовательных программ, научных исследований и культурного обмена, укрепляя международное партнёрство между странами и вузами.", image: News3 },
    { id: 4, title: "Новость 4", description: "Описание новости 4", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Новость 5", description: "Описание новости 5", image: "https://via.placeholder.com/150" },
    { id: 6, title: "Новость 6", description: "Описание новости 6", image: "https://via.placeholder.com/150" },
  ];
  return (
    <>
      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="dear-main">
        <div className="dear-left">
          <img src={FotoRector} alt="foto rectora" />
        </div>
        <div className="dear-right">  
          <h1>Обращение учредителя</h1>
          <p>В видении каждого кыргызстанца, который питает надежду на лучшее, Кыргызстан к 2030 году станет страной конкурентоспособной, с диверсифицированной экономикой, высокими доходами на душу населения, полноправным и активным членом глобального сообщества. Для достижения этого необходимо делать упор на главное богатство - человеческие ресурсы.</p>
          <p>Движущей силой экономики, просвещенной элитой являются ученые, преподаватели, инвесторы, предприниматели и рабочие, которые создают знания, финансируют и развивают бизнес, обеспечивают экономику рабочей силой и создают фундамент конкурентоспособности на глобальном уровне.</p>
          <ul>
            <li>
              <Link to="/faunder">ПОДРОБНЕЕ</Link>
            </li>
          </ul>
          
        </div>
      </div>
      <div className="news-container">
      {newsData.map((news) => (
        
        <div key={news.id} className="news-card">
          <img src={news.image} alt={news.title} className="news-image" />
          <div className="news-content">
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

// Кастомная кнопка "Вперед"
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      &gt;
    </div>
  );
};

// Кастомная кнопка "Назад"
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &lt;
    </div>
  );
};

export default Home;
