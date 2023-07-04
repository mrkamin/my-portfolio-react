import React from 'react';
import './experince.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experince = () => (
  <section id="experince">
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              {' '}
              <h4>Css</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Redux</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>PostgreSql</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Ruby</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Ruby on Rails</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Node JS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              {' '}
              <h4>PHP</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experince;
