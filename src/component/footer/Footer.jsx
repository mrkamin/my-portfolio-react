import React from 'react';
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

const Footer = () => (
  <footer>
    <a href="/" className="footer__logo">
      MRKAMIN
    </a>
    <ul className="permalinks">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experince">Expeirience</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="footer-socials">
      <a href="https://www.facebook.com/mrkamin2">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/rafikambiz/?hl=en">
        <ImInstagram />
      </a>
    </div>
    <div className="footer__copywrite">
      <small>&copy; MRKAMIN</small>
    </div>
  </footer>
);

export default Footer;
