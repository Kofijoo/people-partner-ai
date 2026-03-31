import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Contact() {
  return (
    <section className="page-section contact-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Let’s Connect</h1>
        <p className="page-intro">
          If you’re looking for L&D support — leadership development, enablement, learning journeys, facilitation, or change
          learning — I’d love to connect. I’m happy to share work samples, walk through case studies, or discuss how I can
          support your team’s goals.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h2>Location</h2>
            <p>Oslo, Norway</p>
            <p className="contact-note">Permanent residence + Valid work permit</p>
          </div>

          <div className="contact-card">
            <h2>Email</h2>
            <a href="mailto:joshuaagyekum21@gmail.com">joshuaagyekum21@gmail.com</a>
          </div>

          <div className="contact-card">
            <h2>Phone</h2>
            <a href="tel:+4746399384">+47 463 99 384</a>
          </div>

          <div className="contact-card">
            <h2>LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/joshua-agyekum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/joshua-agyekum
            </a>
          </div>

          {/* Optional: Keep GitHub only if you want to highlight digital learning build skills */}
          <div className="contact-card">
            <h2>Work Samples</h2>
            <a
              href="https://github.com/Kofijoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Kofijoo
            </a>
            <p className="contact-note">Digital learning builds and prototypes</p>
          </div>

          <div className="contact-card">
            <h2>Credentials</h2>
            <a
              href="https://www.credly.com/users/joshua-agyekum.7b55a7d0/badges"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credly Badges
            </a>
          </div>

          {/* W3Profile is more developer-facing; keep only if you want */}
          <div className="contact-card">
            <h2>Professional Profile</h2>
            <a
              href="https://www.w3profile.com/kofijoo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              w3profile.com/kofijoo
            </a>
            <p className="contact-note">Optional (developer profile)</p>
          </div>

          <div className="contact-card">
            <h2>Languages</h2>
            <p>English (Fluent)</p>
            <p>Norwegian (B1)</p>
            <p>Mandarin (HSK 3)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
