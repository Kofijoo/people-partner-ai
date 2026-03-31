import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Toolkit() {
  const categories = [
    {
      title: "AI & Automation",
      icon: "⚙",
      items: [
        "DeepSeek",
        "OpenRouter",
        "n8n",
        "GitHub Actions",
        "Prompt Engineering",
        "AI Video Pipelines",
        "TTS Systems"
      ]
    },
    {
      title: "People Analytics & Data",
      icon: "📊",
      items: [
        "Python (Pandas, scikit-learn)",
        "Power BI",
        "Tableau",
        "SQL",
        "xAPI / Learning Record Stores",
        "Excel (Advanced)",
        "Streamlit"
      ]
    },
    {
      title: "Development & Deployment",
      icon: "🚀",
      items: [
        "React.js",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "Terraform",
        "AWS (EC2, S3, CloudWatch)",
        "GitHub Pages",
        "CI/CD"
      ]
    },
    {
      title: "People & HR Systems",
      icon: "🤝",
      items: [
        "Adaptive Learning Systems",
        "SCORM / xAPI",
        "Performance Support Design",
        "Onboarding Workflow Design",
        "Change Enablement"
      ]
    },
    {
      title: "Collaboration & Workflow",
      icon: "💬",
      items: [
        "Slack",
        "Microsoft Teams",
        "Notion",
        "Asana",
        "Zoom",
        "Agile / Scrum",
        "Figma"
      ]
    },
    {
      title: "Languages",
      icon: "🌍",
      items: [
        "English (Native)",
        "Norwegian (B1)",
        "Mandarin (HSK III)",
        "Ghanaian (Native)"
      ]
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">People Tech &amp; AI Stack</h1>
        <p className="page-intro">
          The tools and technologies I use to build AI systems, analyse people data, and deploy
          solutions that change how organisations work — not what I know in theory, but what I've
          shipped in practice.
        </p>

        <div className="toolkit-grid">
          {categories.map((cat, index) => (
            <div key={index} className="toolkit-category">
              <h2>
                <span className="toolkit-icon" aria-hidden="true">{cat.icon}</span>
                {cat.title}
              </h2>
              <div className="tools-list">
                {cat.items.map((item, i) => (
                  <span key={i} className="tool-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Toolkit;
