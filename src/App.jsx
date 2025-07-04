import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Awards from "./components/Awards";
import Certificate from "./components/Certificate";
import ContactUs from "./components/ContactUs";
import FamilyProblemSolution from "./components/FamilyProblemSolution";
import HoroscopeReading from "./components/HoroscopeReading";
import HusbandWifeDispute from "./components/HusbandWifeDispute";
import LoveMarriageProblem from "./components/LoveMarriageProblem";
import LoveProblemSolution from "./components/LoveProblemSolution";
import MarriageProblemSolution from "./components/MarriageProblemSolution";
import PhotoGallery from "./components/PhotoGallery";
import VideoGallery from "./components/VideoGallery";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Inquiry from "./components/Inquiry";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/family-problem-solution"
            element={<FamilyProblemSolution />}
          />
          <Route path="/horoscope-reading" element={<HoroscopeReading />} />
          <Route
            path="/husband-wife-dispute-solution"
            element={<HusbandWifeDispute />}
          />
          <Route
            path="/love-marriage-problem-solution"
            element={<LoveMarriageProblem />}
          />
          <Route
            path="/love-problem-solution"
            element={<LoveProblemSolution />}
          />
          <Route
            path="/marriage-problem-solution"
            element={<MarriageProblemSolution />}
          />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
