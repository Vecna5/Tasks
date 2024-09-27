import React from 'react';
import ContactForm from './ContactForm';
import FooterLinks from './FooterLinks';
import '../../CSS/Page3/Contact.css';  

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-section">
        <h1>Contact</h1>
        <div className="line"></div>
        <div className="contact-info">
          <p><big><b>M'ROHOI ueniet et in sacro eius corpore ueniemus.</b></big></p>
          <p>Extra tenebras enim non est salus, sicut nec vita est extra lucem. Per chaos noctis tantum intelligimus diei essentiam. Libertas in alis meis est.</p>
          <p><b>EMAIL:</b> company@youremail.com</p>
          <p><b>WEBSITE:</b> www.yourwebsite.com</p>
        </div>
        <ContactForm />
        <FooterLinks/>
      </div>
    </div>
  );
}

export default Contact;
