import { motion } from 'motion/react';
import AnimatedBackground from '../components/AnimatedBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

function Experience() {
  const alignmentHighlights = [
    {
      title: "AI adoption — from experiment to system",
      description:
        "I've moved AI tools from pilot to production in real organisations. I evaluate tools, configure them, build the workflows around them, and measure whether they're working. I don't hand this off to engineering — I do it."
    },
    {
      title: "Partnering with tech and platform teams",
      description:
        "My career has been spent working alongside developers, platform engineers, and product teams. I understand how they think, what slows them down, and how to design People programmes that actually fit the way they work."
    },
    {
      title: "Data-informed decisions",
      description:
        "I build analytics into everything I design — xAPI tracking, ML dashboards, predictive models. I don't rely on gut feel or survey scores alone. I measure behavioural change and use that data to improve systems iteratively."
    },
    {
      title: "Change enablement at scale",
      description:
        "I design interventions that help organisations adopt new tools, processes, and ways of working — reducing friction, building confidence, and getting people past the learning curve faster."
    },
    {
      title: "Human-centered systems thinking",
      description:
        "Every system I build starts with the human problem, not the technology. I ask what behaviour needs to change, what's blocking it, and what the simplest effective intervention looks like. Then I build that."
    }
  ];

  const experiences = [
    {
      title: "People & Learning Systems Partner",
      company: "Tofflon Joy",
      period: "Jul 2025 – Present",
      location: "Greater Accra Region, Ghana · Remote",
      description:
        "Partnered with sales and technical leaders in industrial manufacturing to identify capability gaps and design performance-focused development programmes. Built scalable systems covering product knowledge, consultative selling, and operational excellence across a complex machinery portfolio.",
      bullets: [
        "Designed 15+ learning modules adopted across sales and technical functions — 88% completion rate in Q1",
        "Drove measurable behaviour change in consultative selling: 82% of participants reported increased confidence in customer-facing roles",
        "Recognised internally as a best-practice model for cross-functional collaboration between People and commercial teams",
        "Partnered directly with senior leaders to align programme design to business outcomes, not just training completions"
      ],
      skills: ["Stakeholder partnership", "Performance consulting", "Programme design", "Cross-functional collaboration", "Learning analytics"]
    },
    {
      title: "Earlier Experience",
      company: "Brainhill International School · Kaneshie Awudome JHS · Global Access Academy",
      period: "2013 – 2019",
      location: "Ghana",
      description:
        "Foundational teaching and facilitation experience across primary and secondary education in Ghana. Developed core skills in understanding how people learn, designing structured activities, and adapting approaches based on real-time feedback.",
      bullets: [],
      skills: ["Facilitation", "Instructional design", "Learner engagement", "Creative pedagogy"]
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
          Experience
        </motion.h1>
        <motion.p
          className="page-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Building AI-powered systems, partnering with technology teams, and driving measurable
          behaviour change in organisations. My background sits at the intersection of People development
          and technical implementation.
        </motion.p>

        {/* Vipps Alignment Block */}
        <div className="section-block">
          <motion.h2
            className="section-divider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            What I bring to a People Partner + AI role
          </motion.h2>
          <motion.p
            className="page-intro"
            style={{ marginTop: 0 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            These are the capabilities I've built through real work — not theory. Each one maps directly
            to what technology-focused People teams need to move from AI experimentation to operational reality.
          </motion.p>

          <motion.div
            className="projects-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {alignmentHighlights.map((item, idx) => (
              <motion.div key={idx} className="project-card" variants={fadeUp}>
                <h2>{item.title}</h2>
                <p className="project-description">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="timeline"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} className="timeline-item" variants={slideLeft}>
              <div className="timeline-content">
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-location">{exp.location}</p>
                <p className="timeline-description">{exp.description}</p>

                {exp.bullets.length > 0 && (
                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}

                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
