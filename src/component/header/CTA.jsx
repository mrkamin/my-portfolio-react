import React from 'react';
import CV from '../../assets/Mohammad_Rafi_Resume.pdf';

const CTA = () => (
  <div className="cta">
    <a href={CV} download className="btn">
      Download CV
    </a>
    <a href="#contact" className="btn btn-primary">
      Lets Talk
    </a>
  </div>
);

export default CTA;
