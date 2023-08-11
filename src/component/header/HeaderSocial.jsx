import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { FaAngellist } from 'react-icons/fa';

const HeaderSocial = () => (
  <div className="header__socials">
    <a
      href="https://github.com/mrkamin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/mohammad-rafi-amin/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiLinkedin />
    </a>
    <a
      href="https://wellfound.com/u/mohammad-rafi-amin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaAngellist />
    </a>
  </div>
);

export default HeaderSocial;
