import { motion } from 'motion/react';
import AnimatedBackground from '../components/AnimatedBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

function Projects() {
  const featuredProjects = [
    {
      title: "EduAnalytics Pro",
      subtitle: "ML-powered dropout prediction & learning analytics platform",
      description:
        "Built a machine learning platform using Random Forest classification to predict learner dropout risk before it happens. The system surfaces at-risk learners to facilitators in real time, enabling targeted intervention. Includes a full analytics dashboard with cohort comparisons, engagement trends, and outcome tracking.",
      thumbnail: `${process.env.PUBLIC_URL}/images/EduAnalytics.png`,
      link: "https://eduanalytics-pro-garcy4kzhdd9nhuy3ffvgr.streamlit.app/",
      tags: ["Python", "Machine Learning", "Streamlit", "People Analytics", "Random Forest"]
    },
    {
      title: "AI Adaptive Learning Platform",
      subtitle: "Real-time adaptive system with SCORM/xAPI and teacher dashboard",
      description:
        "A React-based learning platform that adapts content difficulty in real time based on learner performance data. Includes a live teacher dashboard showing individual and cohort progress, intervention signals, and completion analytics. Fully SCORM/xAPI compatible for LMS integration.",
      thumbnail: `${process.env.PUBLIC_URL}/images/learning_island.png`,
      link: "https://kofijoo.github.io/AI-Driven-Adaptive-Learning-Game.github.io/",
      tags: ["React", "xAPI", "SCORM", "Adaptive Systems", "Learning Analytics"]
    },
    {
      title: "CRM Opportunity Tracker",
      subtitle: "Full-stack business application — Oslo/Bergen market",
      description:
        "A full-stack React/TypeScript CRM application with sales pipeline management, opportunity tracking, revenue forecasting, and regional analytics for the Oslo and Bergen markets. Built with a focus on clean data visualisation and actionable business insights.",
      thumbnail: `${process.env.PUBLIC_URL}/images/sales.png`,
      link: "https://github.com/Kofijoo/CRM-Opportunity-Tracker",
      tags: ["React", "TypeScript", "CRM", "Business Analytics", "Full-Stack"]
    },
    {
      title: "AI Video Automation Pipeline",
      subtitle: "End-to-end AI content production system",
      description:
        "Built an end-to-end AI pipeline that converts a topic into a fully produced video — research via DeepSeek, script via OpenRouter, character-consistent scene visuals via AI image generation, narration via TTS, automated captioning, and final assembly. Designed as a scalable production workflow, not a one-off demo.",
      thumbnail: `${process.env.PUBLIC_URL}/images/design_process.png`,
      link: "https://github.com/Kofijoo",
      tags: ["DeepSeek", "OpenRouter", "AI Pipelines", "Prompt Engineering", "Automation"]
    },
    {
      title: "Shift Worker Onboarding System",
      subtitle: "Automated onboarding workflow for deskless workers",
      description:
        "Designed and built a structured onboarding system for shift workers — a group traditionally underserved by digital HR tools. Focused on mobile-first delivery, low-friction completion, and automated progress tracking without requiring manager intervention at every step.",
      thumbnail: `${process.env.PUBLIC_URL}/images/eco_explorers.png`,
      link: "https://github.com/Kofijoo/shift-worker-onboarding",
      tags: ["Onboarding", "Workflow Automation", "People Systems", "Mobile-First"]
    },
    {
      title: "Legal Writing Training Simulation",
      subtitle: "React-based scenario simulation with AI assistant",
      description:
        "A professional React-based training simulation featuring 8 interactive scenes with an embedded AI assistant (ALEX). Demonstrates how AI can be integrated into performance support tools — not as a chatbot bolt-on, but as a contextual guide embedded in the workflow.",
      thumbnail: `${process.env.PUBLIC_URL}/images/jus.png`,
      link: "https://kofijoo.github.io/legal-writing-101-simulation/",
      tags: ["React", "AI Integration", "Scenario Design", "Performance Support"]
    }
  ];

  const caseStudies = [
    {
      title: "Sales Enablement Programme — Tofflon Joy",
      period: "Jul 2025 – Present",
      challenge:
        "Sales and technical teams were inconsistent in how they presented complex machinery solutions to clients. Product knowledge existed, but confidence in customer conversations was low.",
      solution:
        "Partnered with senior leaders to map the capability gaps, then designed a structured programme covering product knowledge, consultative selling, and objection handling. Built modules with scenario-based practice and embedded feedback.",
      outcomes: [
        "Designed learning programme adopted across sales and technical functions",
        "Recognised internally for cross-functional collaboration model"
      ]
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
          Projects &amp; AI Systems
        </motion.h1>
        <motion.p
          className="page-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          A selection of AI systems, analytics platforms, and people-focused tools I've built from
          scratch. These aren't concepts or frameworks — they're working systems with measurable outcomes.
        </motion.p>

        {/* Featured Projects */}
        <div className="section-block">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="featured-presentation"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="presentation-thumbnail">
                <img src={project.thumbnail} alt={project.title} />
              </div>
              <div className="presentation-content">
                <h2>{project.title}</h2>
                <p className="presentation-subtitle">{project.subtitle}</p>
                <p className="presentation-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="presentation-button"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.h2
          className="section-divider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Case Studies
        </motion.h2>
        <motion.p
          className="page-intro"
          style={{ marginTop: 0 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          A real programme, a real problem, and what changed.
        </motion.p>
        <motion.div
          className="projects-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {caseStudies.map((cs, index) => (
            <motion.div key={index} className="project-card case-study-card" variants={fadeUp}>
              <h2>{cs.title}</h2>
              <p className="project-meta">{cs.period}</p>

              <div className="case-block">
                <p className="case-label">The problem</p>
                <p className="project-description">{cs.challenge}</p>
              </div>

              <div className="case-block">
                <p className="case-label">What I built</p>
                <p className="project-description">{cs.solution}</p>
              </div>

              <div className="project-metrics">
                <p className="case-label">Outcomes</p>
                <ul>
                  {cs.outcomes.map((outcome, i) => (
                    <li key={i}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
