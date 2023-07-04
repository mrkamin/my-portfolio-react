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

  const content = `My name is Mohmmad Rafi Amin.
    I have always been enthusiastic about programming from a very young age, making me curious and always eager to learn. Before hearing about Microverse, I was a self-taught software developer through consistent online research and also learning through some paid Udemy courses I spend most of my time building web applications and learning about the design and architecture of new technologies. I succeed in fast-paced environments as I love simple and elegant solutions to problems...
  
    I have a BSc. Computer Science. And 1 years+ of experience as a software engineer.
    I am goal-oriented and always focused on reaching or completing specific tasks to achieve a planned outcome. Working with a partner or a team is a quality I have, and my teammates have also commended that during the level-up program. Being punctual and always eager to abide by the code of conduct that guides an organization is something I do effortlessly. I also take corrections to improve myself better.

    Tech Stack:
    • Languages: JavaScript, Typescript. HTML, CSS, Ruby, Python, Go, Shell
    • Frameworks & Libraries: React, Next, Redux, Node, Rails, Bootstrap, Tailwind, Bulma
    • Databases: PSQL, MySQL (learning MongoDB and firebase)
    • Management & Deployment: Git, GitHub, Jira, Heroku, Netlify, Postman, Terminal
    • Tools & Methods: RSpec, Jest, TDD, Dev Tools, Gitflow

    Tools & Platforms: Git, Webpack, Jest, RSpec, Netlify, Heroku, Vercel, Test-Driven development, Mobile/Responsive Design, Agile methodologies

    Other: Remote Pair-Programming, Peer Code Reviews, Mentoring, Teamwork, Initiative, Grit, Resourcefulness
    Experienced Network Engineer with a demonstrated history of working in the broadcast media industry. Skilled in Active Directory, Windows Server, Networking, Team Leadership, Cisco Certified Network Association (CCNA), ITIL 4, and Oracle Cloud Infrastructure 2019 Certified Architect Associate. Strong information technology professional with a Bachelor's degree focused in Computer Science from Kabul education university.
    I am passionate about learning new technologies as well as building things.
    Always looking for new opportunities. 
    If you'd like to get in contact about potential job opportunities, please reach out via email (mrkamin2@gmail.com), and I will respond Promptly!`;

  const truncatedContent = isFullContentVisible
    ? content
    : content.slice(0, 518); // Adjust the character limit as needed

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
              <button type="button" onClick={toggleContentVisibility}>Read More</button>
            )}
            {content.length > 200 && isFullContentVisible && (
              <button type="button" onClick={toggleContentVisibility}>Read Less</button>
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
