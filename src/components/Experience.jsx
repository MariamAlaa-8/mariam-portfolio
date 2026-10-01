import { motion } from 'framer-motion';

function Experience() {
  const items = [
    {
      title: 'Front-End Development Trainee — Route Academy',
      date: '2025 – 2026',
      points: [
        'Completed professional Front-End Development training.',
        'Built responsive apps with HTML5, CSS3, JavaScript, React.js & Next.js.',
        'Designed modern UIs using Tailwind CSS.',
        'Used GitHub for version control & collaboration.',
      ],
    },
    {
      title: 'Real Estate Web Application — Graduation Project',
      date: 'Graduation Project',
      points: [
        'Responsive app to browse, buy, sell & register properties.',
        'Reusable UI components with React.js & Next.js.',
        'Responsive layouts using HTML5, CSS3, JS & Tailwind CSS.',
        'Modern, user-friendly interfaces.',
      ],
    },
  ];

  return (
    <section id="experience">
      <h2 className="section-title">Experience & Projects</h2>
      {items.map((item, i) => (
        <motion.div
          className="card"
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        >
          <h3>{item.title}</h3>
          <span className="date">{item.date}</span>
          <ul>
            {item.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
}

export default Experience;