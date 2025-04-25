import aboutData from '../data/AboutMe.json';
import '../styles/about.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        <h2 className="about-title">{aboutData.section_name}</h2>

        <div className="about-content">
          {/* Profile Picture */}
          <motion.div
            className="about-image-container"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`/images/${aboutData.image}`}
              alt="Profile"
              className="about-image"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="about-text-box"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="about-text">
              <p className="about-header">{aboutData.description_header} 👋</p>
              <p className="about-description">{aboutData.description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
