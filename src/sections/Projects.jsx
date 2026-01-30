import "../styles/projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Experience & Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <div className="card-header">
              <h3 className="project-title">IDS Fintech</h3>
              <h4 className="project-subtitle">AI Engineer</h4>
              <p className="project-date">
                <span>📅</span> September 2025 – November 2025
              </p>
            </div>

            <div className="card-content">
              <p className="project-description">
                Researched and implemented AI solutions for financial
                applications, focusing on Retrieval-Augmented Generation (RAG)
                techniques and prompt engineering for optimized model outputs.
              </p>

              <ul className="feature-list">
                <li>Researched RAG techniques for financial AI solutions</li>
                <li>Applied prompt engineering for optimized model outputs</li>
                <li>
                  Developed and optimized LLM-based features for fintech
                  workflows
                </li>
                <li>
                  Built backend services using FastAPI and implemented MCP
                  servers
                </li>
                <li>
                  Deployed services using Docker containers and cloud
                  deployments
                </li>
              </ul>
            </div>

            <div className="tech-tags">
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">LLM</span>
              <span className="tech-tag">RAG</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Cloud</span>
              <span className="tech-tag">Python</span>
            </div>
          </div>

          <div className="project-card">
            <div className="card-header">
              <h3 className="project-title">Stoxify</h3>
              <h4 className="project-subtitle">
                AI-Powered Stock Prediction Platform
              </h4>
              <p className="project-date">
                <span>📅</span> Ongoing Project
              </p>
            </div>

            <div className="card-content">
              <p className="project-description">
                Developed a web application that predicts stock market trends
                using news sentiment analysis and historical data with a team of
                four.
              </p>

              <ul className="feature-list">
                <li>Built AI model to enhance trading decision accuracy</li>
                <li>Minimized financial risks through predictive analysis</li>
                <li>Developed Laravel backend for real-time stock analysis</li>
                <li>Optimized PostgreSQL for high-frequency data processing</li>
                <li>Team collaboration with four developers</li>
              </ul>
            </div>

            <div className="tech-tags">
              <span className="tech-tag">Laravel</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">AI/ML</span>
              <span className="tech-tag">Sentiment Analysis</span>
              <span className="tech-tag">Real-time</span>
              <span className="tech-tag">Team Project</span>
            </div>

            <div className="project-links">
              <a
                href="http://www.stoxify.trade"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <span className="link-icon">🌐</span>
                Live Demo
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="card-header">
              <h3 className="project-title">Word2Vec NLP Analysis</h3>
              <h4 className="project-subtitle">
                Amazon Reviews Semantic Analysis
              </h4>
              <p className="project-date">
                <span>📅</span> March 2025
              </p>
            </div>

            <div className="card-content">
              <p className="project-description">
                Developed a Word2Vec model on 194K+ Amazon reviews achieving 92%
                semantic accuracy in capturing word relationships and meaningful
                patterns.
              </p>

              <ul className="feature-list">
                <li>Processed 194K+ Amazon reviews dataset</li>
                <li>Achieved 92% semantic accuracy in word relationships</li>
                <li>Applied advanced NLP techniques with Python and Gensim</li>
                <li>Used TensorFlow and pandas/NumPy for preprocessing</li>
                <li>
                  Visualized word embeddings to reveal meaningful patterns
                </li>
                <li>
                  Improved text data understanding for real-world NLP tasks
                </li>
              </ul>
            </div>

            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Word2Vec</span>
              <span className="tech-tag">TensorFlow</span>
              <span className="tech-tag">Gensim</span>
              <span className="tech-tag">NLP</span>
              <span className="tech-tag">Data Analysis</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/yahyafl/Word2Vec-Project"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <span className="link-icon">📂</span>
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
