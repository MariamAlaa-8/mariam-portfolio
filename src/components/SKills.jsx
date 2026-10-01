import { motion } from 'framer-motion';

function Skills() {
  const tech = [
    'React.js',
    'Next.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'GitHub',
  ];
  const langs = ['Arabic (Native)', 'English (Good)'];

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>

      <h3 className="sub">Technical</h3>
      <div className="skills-grid">
        {tech.map((s, i) => (
          <motion.span
            key={s}
            className="skill"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            {s}
          </motion.span>
        ))}
      </div>

      <h3 className="sub">Languages</h3>
      <div className="skills-grid">
        {langs.map((l, i) => (
          <motion.span
            key={l}
            className="skill"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

export default Skills;