import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Education() {
  const education = [
    {
      degree: "Master of Education (Education Technology)",
      institution: "Huzhou University, China",
      period: "2019–2022",
      highlights: [
        "Focus areas: digital learning design, learning platforms (LMS), content development, and learning research"
      ],
      verificationLabel: "Verify Degree →",
      link: "https://www.chsi.com.cn/xlrz/bgcx.jsp?v=12846877-223-F82B0102",
      recognition: {
        label: "Recognised by HK-dir",
        detail: "Equivalent to a Norwegian 2-year Master’s degree (120 ECTS), plus 1 additional year of master’s-level education."
        // Add HK-dir document link here if you have a view-only URL
      }
    },
    {
      degree: "Master of Science (International Relations)",
      institution: "Norwegian University of Life Sciences (NMBU), Norway",
      period: "2022–2024",
      grade: "Distinction",
      highlights: [
        "Master’s-level training at a Norwegian public university",
        "Focus on cross-cultural communication and global policy (useful for global L&D environments)"
      ],
      verificationLabel: "Verify Credential →",
      link: "https://app.vitnemalsportalen.no/vp/shared/CB4FE2E65C384FFD9D37D41C780F362A"
    },
    {
      degree: "Bachelor of Education (Early Childhood Education)",
      institution: "University of Education, Winneba, Ghana",
      period: "2014–2018",
      grade: "First Class Honours",
      highlights: [
        "Strong foundation in learning principles, facilitation, and learner support"
      ],
      recognition: {
        label: "Recognised by HK-dir",
        detail: "Equivalent to a Norwegian Bachelor’s degree (180 ECTS) and aligned with Norway’s academic requirements for teaching-related roles."
        // Add HK-dir document link here if you have a view-only URL
      }
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Education</h1>
        <p className="page-intro">
          Academic background supporting Learning & Development work across digital learning, facilitation, and global collaboration.
        </p>

        <div className="cards-grid">
          {education.map((edu, index) => (
            <div key={index} className="info-card">
              <h3>{edu.degree}</h3>
              <p className="card-institution">{edu.institution}</p>
              <p className="card-period">{edu.period}</p>
              {edu.grade && <p className="card-grade">{edu.grade}</p>}

              {edu.highlights && (
                <ul className="card-description" style={{ marginTop: '0.75rem' }}>
                  {edu.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {edu.recognition && (
                <div style={{ marginTop: '0.9rem' }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{edu.recognition.label}</p>
                  <p className="card-description" style={{ marginTop: 0 }}>{edu.recognition.detail}</p>
                </div>
              )}

              {edu.link && (
                <p style={{ marginTop: '1rem' }}>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-link"
                  >
                    {edu.verificationLabel || "Verify Credential →"}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Optional: If you want a short callout for Norway context */}
        <div className="section-block" style={{ marginTop: '2rem' }}>
          <p className="page-intro" style={{ marginBottom: 0 }}>
            Note: HK-dir recognition documents and supporting certificates can be shared upon request.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
