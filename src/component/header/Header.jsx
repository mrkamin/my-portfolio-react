import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';

const Header = () => (
  <header>
    <div className="container header__container">
      <h5>Hello Im</h5>
      <h1>Mohammad Rafi Amin</h1>
      <h5 className="text-light">Full-Stack Developer</h5>
      <CTA />
      <HeaderSocial />
      <div className="me">
        <h3>
          I can help you build a product, feature, or website
          Look through some of my work and experience! If you have a project that needs coding,
          do not hesitate to contact me.
        </h3>
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  </header>
);

export default Header;
