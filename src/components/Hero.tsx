

import '../styles/hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side (Text) */}
      <div className="z-10 space-y-4">
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ramya Kata
        </motion.h1>

        <motion.h2
          className="hero-role"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Full Stack Developer | Java, Spring Boot, React, Scalable Systems
        </motion.h2>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="btn-outline"
          >
            Projects
          </a>
        </motion.div>
      </div>

      {/* Right Side (Image) */}
      <motion.div
        className="image-container"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <div className="image-background shadow-xl dark:shadow-lg">
          <img
            src="/images/11447057_20424735.svg"
            alt="Developer Portrait"
            className="hero-image styled-image"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;