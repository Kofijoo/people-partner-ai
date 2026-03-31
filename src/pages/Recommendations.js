import React, { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Recommendations() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const recommendations = [
    {
      name: "Dr. Sarah Chen",
      title: "Director of Learning & Development",
      company: "JOMACS Tech Academy",
      text:
        "Joshua strengthened our learning programs in a meaningful way. His work on a personalized learning experience contributed to a 40% increase in learner engagement and an 85% course completion rate. He brings a thoughtful, learner-centered approach and partners well with stakeholders to deliver practical outcomes."
    },
    {
      name: "Michael Zhang",
      title: "Head of Educational Technology",
      company: "Alo7 Education",
      text:
        "Working with Joshua on our STEM learning experience was excellent. His work helped boost learner engagement by 75% and supported delivery to over 3,000 learners across 12 schools. He combines creativity with a strong understanding of how to design digital learning that keeps people engaged and supports real understanding."
    }
  ];

  // Keep this list focused on identity/education/language documents that employers may ask to verify.
  const officialDocs = [
    { name: "Norwegian Language Proficiency (B1)", image: "Norwegian Language Proficiency.jpg" },
    { name: "English Language Proficiency", image: "English Language Proficiency.jpg" },
    { name: "Mandarin Language Proficiency", image: "Mandarin Language Proficiency.jpg" },
    { name: "HK-dir Recognition / Qualification Document", image: "HK-dir decision.jpg" }, // rename image if needed
    { name: "TEFL Certificate (120 hours)", image: "TEFL Certification.jpg" },
    { name: "National Teaching Certificate (Ghana)", image: "National Teaching Certificate.jpg" },
    { name: "Bachelor’s Degree", image: "Bachelor's Degree.jpg" },
    { name: "M.Ed. Education Technology", image: "Education Technology Degree.png" },
    { name: "MSc International Relations (NMBU)", image: "NMBU.jpg" }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Recommendations & Official Documents</h1>
        <p className="page-intro">
          A few professional recommendations, along with key documents that can be shared for verification when needed.
        </p>

        <div className="section-block">
          <h2 className="section-heading">Professional Recommendations</h2>
          <div className="recommendations-grid">
            {recommendations.map((rec, index) => (
              <div key={index} className="recommendation-card">
                <p className="recommendation-text">"{rec.text}"</p>
                <div className="recommendation-author">
                  <h3>{rec.name}</h3>
                  <p>{rec.title}</p>
                  <p className="company">{rec.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-block" style={{ marginTop: '4rem' }}>
          <h2 className="section-heading">Official Documents</h2>
          <p className="page-intro" style={{ marginTop: '0.5rem' }}>
            These are available upon request and can be verified through the relevant issuing bodies where applicable.
          </p>

          <div className="certifications-grid">
            {officialDocs.map((doc, index) => (
              <div key={index} className="cert-card">
                <div
                  className="cert-thumbnail"
                  onClick={() => setSelectedDoc(doc)}
                  style={{
                    background: 'linear-gradient(135deg, rgba(100,116,139,1) 0%, rgba(148,163,184,1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <div
                    className="cert-overlay"
                    style={{
                      opacity: 1,
                      position: 'static',
                      background: 'transparent',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}
                  >
                    Click to view
                  </div>
                </div>

                <div className="cert-content">
                  <h3>{doc.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedDoc && (
          <div className="cert-modal" onClick={() => setSelectedDoc(null)}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close" onClick={() => setSelectedDoc(null)}>×</button>
              <img src={`${process.env.PUBLIC_URL}/images/${selectedDoc.image}`} alt={selectedDoc.name} />
              <h3>{selectedDoc.name}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Recommendations;
