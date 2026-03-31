import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function About() {
  return (
    <section className="about-hero">
      <AnimatedBackground />
      <div className="about-container">
        <div className="about-photo">
          <img
            src={`${process.env.PUBLIC_URL}/images/profile_photo.png`}
            alt="Joshua Agyekum - People & AI Systems Partner"
          />
        </div>
        <div className="about-content">
          <h1>Joshua Agyekum</h1>
          <p className="subtitle">People &amp; AI Systems Partner</p>

          <p className="bio">
            I partner with technology and platform teams to close the gap between how people work today
            and how they need to work tomorrow. Over 5+ years I've built AI-powered systems that changed
            measurable behaviours in organisations — adaptive learning platforms, automated workflows,
            predictive analytics models, and performance-focused development programmes across
            manufacturing, EdTech, and sales environments.
          </p>

          <p className="bio">
            My edge is rare in People functions: I don't just recommend AI tools, I evaluate, build,
            and deploy them. I've shipped React applications, ML models, CI/CD pipelines, and xAPI
            analytics systems from scratch. When an organisation says it wants to move from AI
            experimentation to operational reality, I've already done that work.
          </p>

          <p className="bio">
            At JOMACS I built an adaptive platform that increased engagement by 40% and reduced support
            requests by 28% by embedding intelligent feedback directly into the workflow. At Tofflon Joy
            I partnered with sales and technical leaders to close capability gaps that had real commercial
            consequences — 88% completion rate and 82% of participants reporting increased confidence in
            customer-facing roles. The through-line is the same in every role: taking complex potential
            and turning it into systems people actually use.
          </p>

          <p className="bio">
            Currently based in Oslo. Norwegian B1. Open to People Partner, People Technology, and
            AI adoption roles in the Nordic market.
          </p>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/joshua-agyekum/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Kofijoo" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.credly.com/users/joshua-agyekum.7b55a7d0/badges#credly" target="_blank" rel="noopener noreferrer">Credly</a>
            <a href="https://kofijoo.github.io/Instructional_Design_Portfolio" target="_blank" rel="noopener noreferrer">L&amp;D Portfolio</a>
            <a href="mailto:joshuaagyekum21@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
