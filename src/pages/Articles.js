import { motion } from 'motion/react';
import AnimatedBackground from '../components/AnimatedBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

function Articles() {
  const publications = [
    {
      title: "Natural Science & Real Life Learning",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "2021",
      role: "Lead Author",
      focus: "Explores how real-life context improves understanding and retention.",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1737/#abstract"
    },
    {
      title: "STEAM Education Model",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "2021",
      role: "Sole Author",
      focus: "Examines integrated learning models that support problem-solving and applied skills.",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1728/#abstract"
    },
    {
      title: "Classroom Management & Student Well-being",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "2021",
      role: "Co-Author",
      focus: "Looks at learning environments that support engagement, safety, and well-being.",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1680/#abstract"
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Articles & Insights
        </motion.h1>
        <motion.p
          className="page-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Selected publications and written insights focused on learning, engagement, and real-world application.
        </motion.p>

        <div className="section-block">
          <motion.div
            className="articles-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {publications.map((pub, index) => (
              <motion.div key={index} className="article-card" variants={fadeUp}>
                <h2>{pub.title}</h2>
                <p className="article-excerpt">{pub.focus}</p>
                <p className="article-date">{pub.journal} | {pub.year}</p>
                <p className="article-excerpt">
                  <strong>Contribution:</strong> {pub.role}
                </p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="article-link">
                  Read Publication →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="linkedin-cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>Interested in more writing and reflections on learning and development?</p>
          <a
            href="https://www.linkedin.com/in/joshua-agyekum/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            View All Articles on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Articles;
