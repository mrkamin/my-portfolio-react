import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/myPortfoliopic.png';
import HeaderSocial from './HeaderSocial';

const Header = () => (
  <header>
    <div className="container header__container">
      <h5>Hello Im</h5>
      <h1>Mohammad Rafi Amin</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA />
      <HeaderSocial />
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  </header>
);

export default Header;
