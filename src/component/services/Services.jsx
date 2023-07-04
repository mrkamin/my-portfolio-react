import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => (
  <section id="services">
    <h5>What I Offer</h5>
    <h2>Servises</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>User-Centric: Prioritizing user needs.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Visual Appeal: Engaging visual experiences.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Consistency and Simplicity: Unified and intuitive design.</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Dynamic Interactivity: Real-time user engagement.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Cross-Platform Compatibility: Seamless multi-device access.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>
              Scalability and Flexibility: Adaptable and responsive web
              solutions.
            </p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <ul className="service_list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Relevance and Value: Audience-centric content creation.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Creativity and Originality: Engaging unique and innovative content.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Consistency and Strategy: Planned, strategic, and cohesive content.</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
