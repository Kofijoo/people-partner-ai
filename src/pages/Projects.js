import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

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
      title: "Adaptive Learning System — JOMACS",
      period: "Jun 2024 – Jun 2025",
      challenge:
        "A digital education platform was losing learners mid-course. Facilitators had no visibility into where people were dropping off or why — they only saw completion rates after the fact.",
      solution:
        "Built an adaptive platform with embedded xAPI tracking and an analytics dashboard. The system adjusted content pacing based on performance signals and flagged at-risk learners before they dropped out. Automated the deployment pipeline using Docker, Kubernetes, and GitHub Actions.",
      outcomes: [
        "Learner engagement increased by 40%",
        "Course completion reached 85%",
        "Facilitator support requests reduced by 28%",
        "Infrastructure scaled to zero-downtime delivery"
      ]
    },
    {
      title: "Sales Enablement Programme — Tofflon Joy",
      period: "Jul 2025 – Present",
      challenge:
        "Sales and technical teams were inconsistent in how they presented complex machinery solutions to clients. Product knowledge existed, but confidence in customer conversations was low.",
      solution:
        "Partnered with senior leaders to map the capability gaps, then designed a structured programme covering product knowledge, consultative selling, and objection handling. Built 15+ modules with scenario-based practice and embedded feedback.",
      outcomes: [
        "88% completion rate in first quarter",
        "82% of participants reported increased confidence in customer-facing roles",
        "Recognised internally for cross-functional collaboration model",
        "Programme adopted as the standard approach for new product launches"
      ]
    },
    {
      title: "STEM Learning Platform — Alo7",
      period: "Jan 2020 – Feb 2021",
      challenge:
        "Abstract STEM concepts were disengaging students across 12 schools. Traditional classroom materials weren't translating to digital environments effectively.",
      solution:
        "Designed interactive 3D learning experiences using Three.js and WebGL, working directly with subject matter experts to transform complex content into immersive, interactive environments.",
      outcomes: [
        "STEM engagement increased by 75%",
        "92% learner satisfaction across the platform",
        "Adopted across 12 schools reaching 3,000+ students",
        "Concept comprehension time reduced by 35%"
      ]
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Projects &amp; AI Systems</h1>
        <p className="page-intro">
          A selection of AI systems, analytics platforms, and people-focused tools I've built from
          scratch. These aren't concepts or frameworks — they're working systems with measurable outcomes.
        </p>

        {/* Featured Projects */}
        <div className="section-block">
          {featuredProjects.map((project, index) => (
            <div key={index} className="featured-presentation">
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
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <h2 className="section-divider">Case Studies</h2>
        <p className="page-intro" style={{ marginTop: 0 }}>
          Three problems, three systems built to solve them — with the numbers to show what changed.
        </p>
        <div className="projects-grid">
          {caseStudies.map((cs, index) => (
            <div key={index} className="project-card case-study-card">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
