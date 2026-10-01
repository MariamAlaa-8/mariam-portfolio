import { motion } from 'framer-motion';

function Education() {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3>MTI University — Faculty of Computers & AI</h3>
        <span className="date">Graduated 2026</span>
        <ul>
          <li>Specialization: Information Systems (IS)</li>
          <li>
            Cumulative Grade: <strong>Very Good</strong>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

export default Education;