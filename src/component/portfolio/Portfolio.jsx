import React from 'react';
import './portfolio.css';
import Img1 from '../../assets/todo.jpg';
import Img2 from '../../assets/htmlcsscapeston.jpg';
import Img3 from '../../assets/reactcapeston.jpg';
import Img4 from '../../assets/culculatorjs.jpg';
import Img5 from '../../assets/paifj.JPG';
import Img6 from '../../assets/mathmagican.JPG';

const data = [
  {
    id: 1,
    image: Img1,
    title: 'This is a To-Do list app',
    github: 'https://github.com/mrkamin/ToDoList',
    demo: 'https://mrkamin.github.io/ToDoList/dist/',
  },
  {
    id: 2,
    image: Img2,
    title: 'This is a web site for a siminar',
    github: 'https://github.com/mrkamin/Capeston-Project',
    demo: 'https://mrkamin.github.io/Capeston-Project/',
  },
  {
    id: 3,
    image: Img3,
    title: 'This is Stock Screener app',
    github: 'https://github.com/mrkamin/Metrics-webapp',
    demo: 'https://superb-puppy-322d9f.netlify.app/',
  },

  {
    id: 4,
    image: Img4,
    title: 'This is a calculater app in JS',
    github: 'https://github.com/mrkamin/calculator-JavaScript/tree/Dev',
    demo: 'https://mrkamin.github.io/calculator-JavaScript/',
  },

  {
    id: 5,
    image: Img5,
    title: 'This is a news website for PAIFJ',
    github: 'https://github.com/mrkamin/PAIFJ',
    demo: 'https://paifj.netlify.app/',
  },
  {
    id: 6,
    image: Img6,
    title: 'This is a math-magican app',
    github: 'https://github.com/mrkamin/math-magican',
    demo: 'https://musical-monstera-fb67ff.netlify.app/',
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {data.map(({
        id, image, title, github, demo,
      }) => (
        <div key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
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
      ))}
    </div>
  </section>
);

export default Portfolio;
