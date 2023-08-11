import React from 'react';
import './portfolio.css';
import data from '../../Data';

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {data.map(({
        id, image, title, description, tech, github, demo,
      }) => (
        <div key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <h3>{tech}</h3>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
