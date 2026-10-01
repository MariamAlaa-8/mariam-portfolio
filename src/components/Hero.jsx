import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="greeting">Hello, I'm</p>
        <h1>
          Mariam <span>Alaa</span>
        </h1>
        <h2>Front-End Developer • React & Next.js</h2>
        <p className="hero-desc">
          Building responsive, modern & user-friendly web experiences with
          React.js, Next.js & Tailwind CSS.
        </p>

        <div className="hero-btns">
          <a href="#experience" className="btn primary">
            View My Work
          </a>
          <a href="#contact" className="btn secondary">
            Get In Touch
          </a>
        </div>

        <div className="socials">
          <a
            href="https://github.com/MariamAlaa-8"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mariam-alaa-98825a2a3"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:mariamalaa203030@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;