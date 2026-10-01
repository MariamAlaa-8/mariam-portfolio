import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-info">
        <a href="mailto:mariamalaa203030@gmail.com">
          <FaEnvelope /> mariamalaa203030@gmail.com
        </a>
        <a href="tel:+201272205580">
          <FaPhone /> +20 127 220 5580
        </a>
        <a
          href="https://github.com/MariamAlaa-8"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mariam-alaa-98825a2a3"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
      <p className="copyright">© 2026 Mariam Alaa — Made with 💗</p>
    </footer>
  );
}

export default Footer;