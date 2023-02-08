import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png';
import './Header.css';

const Header = () => (
  <>
    <nav className="navbar">
      <div className="navLogo">
        <img className="navLogoImg" src={planet} alt="Header planet" />
        <h1 className="navLogoTxt">Space Travelers&apos; Hub</h1>
      </div>
      <div className="navLinks">
        <ul className="navLinksList">
          <li className="navLinksListItem">
            <NavLink to="/">Rocket</NavLink>
          </li>
          <li className="navLinksListItem">
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <span className="navVr" />
          <li className="navLinksListItem">
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
);
export default Header;
