import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Articles() {
  const publications = [
    {
      title: "Natural Science & Real Life Learning",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "2023",
      role: "Lead Author",
      focus: "Explores how real-life context improves understanding and retention.",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1737/#abstract"
    },
    {
      title: "STEAM Education Model",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "2023",
      role: "Sole Author",
      focus: "Examines integrated learning models that support problem-solving and applied skills.",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1728/#abstract"
    },
    {
      title: "Classroom Management & Student Well-being",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "2023",
      role: "Co-Author",
      focus: "Looks at learning environments that support engagement, safety, and well-being.",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1680/#abstract"
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Articles & Insights</h1>
        <p className="page-intro">
          Selected publications and written insights focused on learning, engagement, and real-world application.
        </p>

        <div className="section-block">
          <div className="articles-grid">
            {publications.map((pub, index) => (
              <div key={index} className="article-card">
                <h2>{pub.title}</h2>
                <p className="article-excerpt">{pub.focus}</p>
                <p className="article-date">{pub.journal} | {pub.year}</p>
                <p className="article-excerpt">
                  <strong>Contribution:</strong> {pub.role}
                </p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="article-link">
                  Read Publication →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="linkedin-cta">
          <p>Interested in more writing and reflections on learning and development?</p>
          <a
            href="https://www.linkedin.com/in/joshua-agyekum/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            View All Articles on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Articles;
