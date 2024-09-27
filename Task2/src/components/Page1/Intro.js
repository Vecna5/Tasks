import React from 'react';
import '../../CSS/Page1/Intro.css';

function Intro() {
  return (
    <div className="intro">
      <h1>Hello!<br />I'm Terry Davis</h1>
      <p>American electrical engineer and computer programmer best known for creating and designing <b>TempleOS</b>, an operating system in the public domain, by himself.</p>
      <a href="index.html" download="index.html" className="download-btn">DOWNLOAD CV</a>
    </div>
  );
}

export default Intro;
