import React from 'react';
import './experince.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experince = () => (
  <section id="experince">
    <h5>What I know</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Languages</h3>
        <div className="experience__content">
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Ruby</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              {' '}
              <h4>JavaScript</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="experience__frontend">
        <h3>Frameworks</h3>
        <div className="experience__content">
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Ruby on Rails</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              {' '}
              <h4>React</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>RSpec</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Capybara</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Tailwind</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Bootstrap</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Sass</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Skills</h3>
        <div className="experience__content">
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>PostgreSql</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Github</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Git</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Codepen</h4>
            </div>
          </div>
          <div className="experince__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              {' '}
              <h4>Gitlab</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experince;
