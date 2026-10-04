import { motion } from 'motion/react';
import AnimatedBackground from '../components/AnimatedBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

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
        "English (Professional)",
        "Norwegian (B1, Listening B2)",
        "Mandarin (HSK 3)",
        "Akan/Twi (Heritage)"
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
          People Tech &amp; AI Stack
        </motion.h1>
        <motion.p
          className="page-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          The tools and technologies I use to build AI systems, analyse people data, and deploy
          solutions that change how organisations work — not what I know in theory, but what I've
          shipped in practice.
        </motion.p>

        <motion.div
          className="toolkit-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {categories.map((cat, index) => (
            <motion.div key={index} className="toolkit-category" variants={fadeUp}>
              <h2>
                <span className="toolkit-icon" aria-hidden="true">{cat.icon}</span>
                {cat.title}
              </h2>
              <div className="tools-list">
                {cat.items.map((item, i) => (
                  <span key={i} className="tool-tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Toolkit;
