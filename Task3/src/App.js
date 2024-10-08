
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Palettes from './components/Palettes/Palettes';
import ColorGrid from './components/ColorGrid';
import palettesData from './colors.json';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Palettes palettes={palettesData} />} />
        {palettesData.map((palette) => (
          <Route
            key={palette.id}
            path={`/palette/${palette.id}`}
            element={<ColorGrid colors={palette.colors} />} 
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Palettes palettes={palettesData} />} />
        {palettesData.map((palette) => (
          <Route
            key={palette.id}
            path={`/palette/${palette.id}`}
            element={<ColorGrid colors={palette.colors} />}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className='Background'>
        <Header />
        <AnimatedRoutes />
      </div>
      </div>
    </Router>
     
  );
}

export default App;
