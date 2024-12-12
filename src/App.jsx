import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import About from "./pages/About/About"; // Добавление Footer
import Education from "./pages/Education/Education";
import Science from "./pages/Science/Science";
import Dissovet from "./pages/Dissovet/Dissovet";
import Postupat from "./pages/Postupat/Postupat";
import Footer from "./components/Footer/Footer"


const NotFound = () => {
  return (
    <div>
      <h1>404 Страница не найдена</h1>
      <p>Извините, мы не смогли найти эту страницу.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/science" element={<Science />} />
          <Route path="/dissovet" element={<Dissovet />} />
          <Route path="/postupat" element={<Postupat />} />
          <Route path="*" element={<NotFound />} /> {/* Обработка несуществующих маршрутов */}
        </Routes>
      </div>
      <Footer /> {/* Добавление Footer */}
    </Router>
  )
}

export default App;
