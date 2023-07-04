import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

import { BiBookAlt, BiMessageRoundedDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/');
  return (
    <nav>
      <a href="/" className={activeNav === '/' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experince"
        onClick={() => setActiveNav('#experince')}
        className={activeNav === '#experince' ? 'active' : ''}
      >
        <BiBookAlt />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Nav;
