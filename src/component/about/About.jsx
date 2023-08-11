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

  const content = `𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 | 𝐌𝐞𝐧𝐭𝐨𝐫 | 🎓 Bachelor's in Computer Science 🖥️

  In my years of experience, I've developed extensive knowledge in:
  [+] Full-stack development (JavaScript, React & Redux, Next.js, Ruby on Rails, TypeScript, PostgreSQL, HTML/CSS).
  [+] Test Driven Development: RSpec and Jest.
  [+] Agile Sofware Development, Object-Oriented Programming, Pair-Programming, Test-driven development.
  [+] Strong communication skills working with remote teams across different cultures and countries.
  
  Over the last 3 years, I have developed not just my technical skills but communication, pair programming, technical writing, and problem-solving skills. I have successfully built 40+ amazing projects both collaboratively and that span across the tech stacks of HTML and CSS, Ruby, Ruby on Rails, JavaScript, React, Redux, WordPress, and over 100+ coding challenges with other developers around the world. I am a passionate, live long learner, and I would proudly add learning to be one of my most valuable skill sets.
  
  I'm always available to have a conversation, so feel free to contact me by mail (mrkamin2@gmail.com), or view some of my projects at my Github (https://github.com/mrkamin) or my portfolio (https://mohammadrafiamin.onrender.com).`;

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
          <p style={{ whiteSpace: 'pre-line' }}>
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
