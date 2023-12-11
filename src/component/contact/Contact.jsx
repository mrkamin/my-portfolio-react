import React, { useRef, useState } from 'react';
import './contact.css';
import { SiMinutemailer } from 'react-icons/si';
import { RiMessengerFill } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_kxwsuog',
      'template_zpovvd6',
      form.current,
      'N8cDZe2F2T0g3JvfC',
    ).then(() => {
      setIsEmailSent(true);
      e.target.reset();

      setTimeout(() => {
        setIsEmailSent(false);
      }, 4000);
    }).catch((error) => {
      console.error('Error Sending Email:', error);
    });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <SiMinutemailer className="contact__options-icon" />
            <h4>Email</h4>
            <h5>mrkamin2@gmail.com</h5>
            <a
              href="mailto:mrkamin2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send an Email
            </a>
          </div>
          <div className="contact__option">
            <RiMessengerFill className="contact__options-icon" />
            <h4>Messenger</h4>
            <h5>Linkdin</h5>
            <a
              href="https://www.linkedin.com/in/mohammad-rafi-amin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </div>
          <div className="contact__option">
            <BsWhatsapp className="contact__options-icon" />
            <h4>Whatsup</h4>
            <h5>+93797578699</h5>
            <a
              href="https://api.whatsapp.com//send?phone=0093797578699"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </div>
        </div>
        <div>
          {isEmailSent ? (
            <p>Email Successfully sent!</p>
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              />
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
