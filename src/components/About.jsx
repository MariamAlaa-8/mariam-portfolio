import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <motion.p
        className="about-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Computer Science graduate from <strong>MTI University</strong>, Faculty
        of Computers and Artificial Intelligence, specializing in{' '}
        <strong>Information Systems (IS)</strong> with a Very Good grade.
        Passionate about Front-End Web Development using{' '}
        <strong>React.js, Next.js, JavaScript, HTML5, CSS3 & Tailwind CSS</strong>
        . Completed professional training at <strong>Route Academy</strong> and
        built a full Real Estate Web Application as my graduation project.
      </motion.p>
    </section>
  );
}

export default About;