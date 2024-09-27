import React from 'react';
import SocialLinks from './SocialLinks';
import Intro from './Intro';
import ProfilePicture from './ProfilePicture';
import '../../CSS/Page1/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.PNG" alt="Logotype" />
      </div>
      <SocialLinks />
      <div className="sidebar">
        <p><b>TERRY DAVIS</b></p>
      </div>
      <Intro />
      <ProfilePicture />
    </header>
  );
}

export default Header;
