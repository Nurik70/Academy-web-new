import React from "react";
import "./Founder.css"; // Импортируем стили
import founderImage1 from "../../images/foto-rector.jpg"; // Путь к первому изображению
import founderImage2 from "../../images/rector-sadyrAva.jpg"; // Путь ко второму изображению
import founderImage3 from "../../images/vse-foto.jpg"; // Путь к третьему изображению

const Founder = () => {
  return (
    <div className="founder-container">
      {/* Первая секция */}
      <div className="founder-content">
        <div className="founder-image">
          <img src={founderImage1} alt="Основатель" />
        </div>
        <div className="founder-text">
          <p>
            В видении каждого кыргызстанца, который питает надежду на лучшее,
            Кыргызстан к 2030 году станет страной конкурентоспособной, с
            диверсифицированной экономикой, высокими доходами на душу населения,
            полноправным и активным членом глобального сообщества. Для
            достижения этого необходимо делать упор на главное богатство –
            человеческие ресурсы.
          </p>
          <p>
            Движущей силой экономики, просвещенной элитой являются ученые,
            преподаватели, инвесторы, предприниматели и рабочие, которые создают
            знания, финансируют и развивают бизнес, обеспечивают экономику
            рабочей силой и создают фундамент конкурентоспособности на глобальном
            уровне.
          </p>
        </div>
      </div>

      {/* Вторая секция */}
      <div className="founder-content">
        <div className="founder-image">
          <img src={founderImage2} alt="Бизнес-школа" />
        </div>
        <div className="founder-text">
          <p>
            Предоставить возможность гражданам овладеть знаниями и навыками
            мирового уровня, способностями к критическому мышлению – это один из
            стратегических приоритетов университета.
          </p>
          <h3>В этом плане необходимо развивать следующие сферы:</h3>
          <ul>
            <li>
              Систему среднего образования, которая позволит молодым ребятам
              поступать в ведущие университеты мира.
            </li>
            <li>
              Национальные научно-исследовательские центры, которые позволяют
              отечественным ученым решать актуальные проблемы.
            </li>
            <li>
              Систему профессионально-технического образования для подготовки
              квалифицированных кадров.
            </li>
            <li>
              Систему высшего образования для подготовки лидеров и специалистов.
            </li>
          </ul>
        </div>
      </div>

      {/* Третья секция с текстом из изображения */}
      <div className="founder-content">
        <div className="founder-image">
          <img src={founderImage3} alt="Пример университета" />
        </div>
        <div className="founder-text">
          <p>
            Университет является наглядным примером инвестирования частных
            инициатив в институт, способный внести вклад в будущее страны. Для
            достижения успеха университет должен не только следовать своей
            миссии: «готовить выпускников, соответствующих высоким международным
            стандартам, способных внести вклад в научные исследования,
            образование и национальную экономику», но и всеми возможными путями
            доказать, что частные инициативы оказались оправданными и
            эффективными для решения задач глобального масштаба. Результаты
            исследований, их количество, качество и влияние на экономику станут
            реальным подтверждением этому.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;