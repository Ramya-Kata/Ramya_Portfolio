import contactInfo from '../data/Contact.json';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-message">{contactInfo.message}</p>

        <div className="contact-icons">
          <a href={`mailto:${contactInfo.email}`} title="Email">
            <FaEnvelope />
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
