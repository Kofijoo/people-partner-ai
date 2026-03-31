import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Toolkit from './pages/Toolkit';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
import Recommendations from './pages/Recommendations';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME}>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/toolkit" element={<Toolkit />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/education" element={<Education />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
