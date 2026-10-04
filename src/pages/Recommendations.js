import { useState } from 'react';
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

function Recommendations() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const recommendations = [];

  // Keep this list focused on identity/education/language documents that employers may ask to verify.
  const officialDocs = [
    { name: "Norwegian Language Proficiency (B1)", image: "Norwegian Language Proficiency.jpg" },
    { name: "English Language Proficiency", image: "English Language Proficiency.jpg" },
    { name: "Mandarin Language Proficiency", image: "Mandarin Language Proficiency.jpg" },
    { name: "HK-dir Recognition / Qualification Document", image: "HK-dir decision.jpg" },
    { name: "TEFL Certificate (120 hours)", image: "TEFL Certification.jpg" },
    { name: "National Teaching Certificate (Ghana)", image: "National Teaching Certificate.jpg" },
    { name: "Bachelor's Degree", image: "Bachelor's Degree.jpg" },
    { name: "M.Ed. Education Technology", image: "Education Technology Degree.png" },
    { name: "MSc International Relations (NMBU)", image: "NMBU.jpg" }
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
          Recommendations & Official Documents
        </motion.h1>
        <motion.p
          className="page-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          A few professional recommendations, along with key documents that can be shared for verification when needed.
        </motion.p>

        <div className="section-block">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Professional Recommendations
          </motion.h2>
          <motion.div
            className="recommendations-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {recommendations.map((rec, index) => (
              <motion.div key={index} className="recommendation-card" variants={fadeUp}>
                <p className="recommendation-text">"{rec.text}"</p>
                <div className="recommendation-author">
                  <h3>{rec.name}</h3>
                  <p>{rec.title}</p>
                  <p className="company">{rec.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="section-block" style={{ marginTop: '4rem' }}>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Official Documents
          </motion.h2>
          <motion.p
            className="page-intro"
            style={{ marginTop: '0.5rem' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            These are available upon request and can be verified through the relevant issuing bodies where applicable.
          </motion.p>

          <motion.div
            className="certifications-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {officialDocs.map((doc, index) => (
              <motion.div key={index} className="cert-card" variants={fadeUp}>
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
              </motion.div>
            ))}
          </motion.div>
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
