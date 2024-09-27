
import React from 'react';
import Header from './components/Page1/Header';
import About from './components/Page1/About';
import Experience from './components/Page2/Experience';
import Contact from './components/Page3/Contact.js';
import './App.css'

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
