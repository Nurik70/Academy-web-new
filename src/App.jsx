import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import Mission from "./pages/Mission/Mission";
import Accreditation from "./pages/Accreditation/Accreditation";
import Lizenz from "./pages/Lizenz/Lizenz";
import StrategRaz from "./pages/StrategRaz/StrategRaz";
import Events from "./pages/Events/Events";
import LokalReg from "./pages/LokalReg/LokalReg"
import Vacancies from "./pages/Vacancies/Vacancies"
import Academy from "./pages/Academy/Academy"
import Faculties from "./pages/Faculties/Faculties"
import Trustees from "./pages/Trustees/Trustees"
import Rectorat from "./pages/Rectorat/Rectorat"
import UchSovet from "./pages/UchSovet/UchSovet"
import StructureA from "./pages/StructureA/StructureA"
import ACalendar from "./pages/ACalendar/ACalendar"
import Schedule from "./pages/Schedule/Schedule"
import СodeEthics from "./pages/СodeEthics/СodeEthics"
import ControlE from "./pages/ControlE/ControlE"
import ZayavStud from "./pages/ZayavStud/ZayavStud"
import Rekviz from "./pages/Rekviz/Rekviz"
import NIR from "./pages/NIR/NIR"
import PPS from "./pages/PPS/PPS"
import MonographsAndGuides from "./pages/MonographsAndGuides/MonographsAndGuides"
import StudyTrips from "./pages/StudyTrips/StudyTrips"
import NTS from "./pages/NTS/NTS"
import ScienEvents from "./pages/ScienEvents/ScienEvents"
import NIRS from "./pages/NIRS/NIRS"
import AStrategyKGAFCIS from "./pages/AStrategyKGAFCIS/AStrategyKGAFCIS"
import ScienJournal from "./pages/ScienJournal/ScienJournal"
import News from "./pages/News/News"
import K1322653Members from "./pages/K1322653Members/K1322653Members"
import EQueue from "./pages/EQueue/EQueue"
import Notice from "./pages/Notice/Notice"
import Dissertations from "./pages/Dissertations/Dissertations"
import ExpertOpinion from "./pages/ExpertOpinion/ExpertOpinion"
import Feedback from "./pages/Feedback/Feedback"
import ThesesList from "./pages/ThesesList/ThesesList"
import SportNorms from "./pages/SportNorms/SportNorms"
import AdmissionRules2024 from "./pages/AdmissionRules2024/AdmissionRules2024"
import Faunder from "./pages/Founder/Founder"
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
          <Route path="/mission" element={<Mission />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/lizenz" element={<Lizenz />} />
          <Route path="/strategRaz" element={<StrategRaz />} />
          <Route path="/events" element={<Events />} />
          <Route path="/lokalReg" element={<LokalReg />} />
          <Route path='/vacancies' element={<Vacancies />} />
          <Route path='/academy' element={<Academy />} />
          <Route path='/faculties' element={<Faculties />} />
          <Route path='/trustees' element={<Trustees />} />
          <Route path='/rectorat' element={<Rectorat />} />
          <Route path='/uchSovet' element={<UchSovet />} />
          <Route path='/structureA' element={<StructureA />} />
          <Route path='/aCalendar' element={<ACalendar />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/codeEthics' element={<СodeEthics />} />
          <Route path='/controlE' element={<ControlE />} />
          <Route path='/zayavStud' element={<ZayavStud />} />
          <Route path='/rekviz' element={<Rekviz />} />
          <Route path='/nIR' element={<NIR />} />
          <Route path='/pPS' element={<PPS />} />
          <Route path='/monographsAndGuides' element={<MonographsAndGuides />} />
          <Route path='/studyTrips' element={<StudyTrips />} />
          <Route path='/nTS' element={<NTS />} />
          <Route path='/ScienEvents' element={<ScienEvents />} />
          <Route path='/nIRS' element={<NIRS />} />
          <Route path='/aStrategyKGAFCIS' element={<AStrategyKGAFCIS />} />
          <Route path='/scienJournal' element={<ScienJournal />} />
          <Route path='/news' element={<News />} />
          <Route path='/k1322653Members' element={<K1322653Members />} />
          <Route path='/eQueue' element={<EQueue />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/dissertations" element={<Dissertations />} />
          <Route path="/expertOpinion" element={<ExpertOpinion />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/ThesesList" element={<ThesesList />} />
          <Route path="/sportNorms" element={<SportNorms />} />
          <Route path="/admissionRules2024" element={<AdmissionRules2024 />} />
          <Route path="/faunder" element={<Faunder />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
