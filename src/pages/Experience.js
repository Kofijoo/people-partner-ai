import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

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
      title: "AI & Learning Systems Developer",
      company: "JOMACS",
      period: "Jun 2024 – Jun 2025",
      location: "Alberta, Canada · Remote",
      description:
        "Built and scaled an adaptive learning platform from the ground up, then automated its infrastructure for enterprise-level reliability. Worked at the intersection of people development and technical implementation — designing the experience while owning the deployment pipeline.",
      bullets: [
        "Built adaptive learning system that increased engagement by 40% and achieved 85% course completion through personalised content delivery",
        "Reduced instructor support requests by 28% by embedding intelligent feedback and analytics directly into the platform",
        "Automated infrastructure using Docker, Kubernetes, and GitHub Actions CI/CD — enabling scalable, zero-downtime content delivery",
        "Implemented xAPI and SCORM tracking to surface learner behaviour data and give instructors actionable analytics dashboards"
      ],
      skills: ["AI systems", "Docker", "Kubernetes", "CI/CD", "xAPI", "Python", "Learning analytics", "Platform design"]
    },
    {
      title: "Digital Learning Systems Designer",
      company: "First Talk Education",
      period: "Mar 2021 – Apr 2022",
      location: "Changxing County, Zhejiang, China · Hybrid",
      description:
        "Implemented a full digital skills learning system from methodology to interface — integrating a structured framework into interactive, age-appropriate digital experiences. Focused on reducing teacher workload while improving learner outcomes.",
      bullets: [
        "Improved phonics recognition scores by 45%",
        "Reduced teacher preparation time by 60% through systematised digital content",
        "78% of learners reached proficiency 3 months ahead of schedule",
        "94% parent satisfaction rate"
      ],
      skills: ["Digital learning systems", "UX for learning", "Content design", "Outcome measurement"]
    },
    {
      title: "EdTech Platform Designer",
      company: "Alo7",
      period: "Jan 2020 – Feb 2021",
      location: "Ningbo, Zhejiang, China · Hybrid",
      description:
        "Designed and built interactive learning experiences using Three.js and WebGL, transforming abstract concepts into immersive digital environments. Collaborated directly with subject matter experts to translate complex content into learner-centred experiences.",
      bullets: [
        "Increased engagement by 75% through interactive 3D educational content",
        "92% learner satisfaction across the platform",
        "Platform adopted across 12 schools reaching 3,000+ learners",
        "Reduced concept comprehension time by 35%"
      ],
      skills: ["Three.js", "WebGL", "Platform design", "SME collaboration", "3D visualisation"]
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
        <h1 className="page-title">Experience</h1>
        <p className="page-intro">
          5+ years building AI-powered systems, partnering with technology teams, and driving measurable
          behaviour change in organisations. My background sits at the intersection of People development
          and technical implementation.
        </p>

        {/* Vipps Alignment Block */}
        <div className="section-block">
          <h2 className="section-divider">What I bring to a People Partner + AI role</h2>
          <p className="page-intro" style={{ marginTop: 0 }}>
            These are the capabilities I've built through real work — not theory. Each one maps directly
            to what technology-focused People teams need to move from AI experimentation to operational reality.
          </p>

          <div className="projects-grid">
            {alignmentHighlights.map((item, idx) => (
              <div key={idx} className="project-card">
                <h2>{item.title}</h2>
                <p className="project-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
