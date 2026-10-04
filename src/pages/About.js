import React from 'react';
import { motion } from 'motion/react';
import AnimatedBackground from '../components/AnimatedBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};

function About() {
  return (
    <section className="about-hero">
      <AnimatedBackground />
      <div className="about-container">
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: -40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/profile_photo.png`}
            alt="Joshua Agyekum - People & AI Systems Partner"
          />
        </motion.div>

        <motion.div
          className="about-content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeUp}>Joshua Agyekum</motion.h1>
          <motion.p className="subtitle" variants={fadeUp}>People &amp; AI Systems Partner</motion.p>

          <motion.p className="bio" variants={fadeUp}>
            I partner with technology and platform teams to close the gap between how people work today
            and how they need to work tomorrow. I've built AI-powered systems that drive measurable
            behaviour change in organisations — adaptive learning platforms, automated workflows,
            predictive analytics models, and performance-focused development programmes across
            manufacturing and sales environments.
          </motion.p>

          <motion.p className="bio" variants={fadeUp}>
            My edge is rare in People functions: I don't just recommend AI tools, I evaluate, build,
            and deploy them. I've shipped React applications, ML models, CI/CD pipelines, and xAPI
            analytics systems from scratch. When an organisation says it wants to move from AI
            experimentation to operational reality, I've already done that work.
          </motion.p>

          <motion.p className="bio" variants={fadeUp}>
            At Tofflon Joy I partnered with sales and technical leaders to close capability gaps that had
            real commercial consequences — designing programmes to strengthen product knowledge and
            customer-facing confidence. The through-line is the same in every role: taking complex
            potential and turning it into systems people actually use.
          </motion.p>

          <motion.p className="bio" variants={fadeUp}>
            Currently based in Oslo. Norwegian B1. Open to People Partner, People Technology, and
            AI adoption roles in the Nordic market.
          </motion.p>

          <motion.div className="social-links" variants={fadeUp}>
            <a href="https://www.linkedin.com/in/joshua-agyekum/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Kofijoo" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.credly.com/users/joshua-agyekum.7b55a7d0/badges#credly" target="_blank" rel="noopener noreferrer">Credly</a>
            <a href="https://kofijoo.github.io/Instructional_Design_Portfolio" target="_blank" rel="noopener noreferrer">L&amp;D Portfolio</a>
            <a href="mailto:joshuaagyekum21@gmail.com">Email</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
