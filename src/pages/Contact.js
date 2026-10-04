import { motion } from 'motion/react';
import AnimatedBackground from '../components/AnimatedBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

function Contact() {
  return (
    <section className="page-section contact-section">
      <AnimatedBackground />
      <div className="page-container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Let's Connect
        </motion.h1>
        <motion.p
          className="page-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          If you're looking for L&D support — leadership development, enablement, learning journeys, facilitation, or change
          learning — I'd love to connect. I'm happy to share work samples, walk through case studies, or discuss how I can
          support your team's goals.
        </motion.p>

        <motion.div
          className="contact-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div className="contact-card" variants={fadeUp}>
            <h2>Location</h2>
            <p>Oslo, Norway</p>
            <p className="contact-note">Permanent residence + Valid work permit</p>
          </motion.div>

          <motion.div className="contact-card" variants={fadeUp}>
            <h2>Email</h2>
            <a href="mailto:joshuaagyekum21@gmail.com">joshuaagyekum21@gmail.com</a>
          </motion.div>

          <motion.div className="contact-card" variants={fadeUp}>
            <h2>Phone</h2>
            <a href="tel:+4746399384">+47 463 99 384</a>
          </motion.div>

          <motion.div className="contact-card" variants={fadeUp}>
            <h2>LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/joshua-agyekum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/joshua-agyekum
            </a>
          </motion.div>

          <motion.div className="contact-card" variants={fadeUp}>
            <h2>Work Samples</h2>
            <a
              href="https://github.com/Kofijoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Kofijoo
            </a>
            <p className="contact-note">Digital learning builds and prototypes</p>
          </motion.div>

          <motion.div className="contact-card" variants={fadeUp}>
            <h2>Credentials</h2>
            <a
              href="https://www.credly.com/users/joshua-agyekum.7b55a7d0/badges"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credly Badges
            </a>
          </motion.div>

          <motion.div className="contact-card" variants={fadeUp}>
            <h2>Professional Profile</h2>
            <a
              href="https://www.w3profile.com/kofijoo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              w3profile.com/kofijoo
            </a>
            <p className="contact-note">Optional (developer profile)</p>
          </motion.div>

          <motion.div className="contact-card" variants={fadeUp}>
            <h2>Languages</h2>
            <p>English (Fluent)</p>
            <p>Norwegian (B1)</p>
            <p>Mandarin (HSK 3)</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
