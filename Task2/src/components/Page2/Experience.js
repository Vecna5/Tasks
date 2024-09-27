
import React from 'react';
import Accordion from './Accordion';
import '../../CSS/Page2/Experience.css';
const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="vertical-line"></div>
      
      <div className="experience-item">
        <div className="position">
          <h3>System Developer</h3>
        </div>
        <p className="description">
          I started my career as a systems developer at Ticketmaster, where I worked on backend systems and got a taste of real-world software development. It was a solid job, but over time, I felt something deeper calling me something bigger than just another company’s codebase.
        </p>
      </div>

      <Accordion />
    </section>
  );
};

export default Experience;
