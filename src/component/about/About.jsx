import React, { useState } from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Me from '../../assets/myprotfoliopicabout.png';

const About = () => {
  const [isFullContentVisible, setIsFullContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsFullContentVisible(!isFullContentVisible);
  };

  const content = `I am a full-stack web developer who graduated from Microverse, 
  which is a remote development school that uses pair programming and real-world projects to teach development. 
  Holding a bachelor's degree in computer science. With 2 years of experience in JavaScript, Ruby, HTML, CSS,
   ReactJS, NextJS, NodeJS, Redux, Ruby on Rails, Bootstrap, Tailwind, Postgres I have a demonstrated history 
   of crafting responsive and efficient web applications... 
   My Github Profile Link: | https://github.com/mrkamin | My Email Address: | mrkamin2@gmail.com`;

  const truncatedContent = isFullContentVisible
    ? content
    : content.slice(0, 460); // Adjust the character limit as needed

  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about__me">
          <img src={Me} alt="about img" className="about__me-image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>
          <p>
            {truncatedContent}
            {content.length > 200 && !isFullContentVisible && (
              <button type="button" className="btn btn-primary" onClick={toggleContentVisibility}>
                Read More
              </button>
            )}
            {content.length > 200 && isFullContentVisible && (
              <button type="button" className="btn btn-primary" onClick={toggleContentVisibility}>
                Read Less
              </button>
            )}
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
