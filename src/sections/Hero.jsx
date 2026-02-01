import "../styles/hero.css";
import heroImg from "../assets/img2.jpeg";
import pdf from "../assets/Copy of Yehya Fleifel CV (2).pdf"

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Actively Seeking Full-time Opportunities
          </div>

          <h1 className="hero-name">Yehya Ayman Fleifel</h1>

          <h2 className="hero-title">Software Engineer (Backend & AI)</h2>

          <p className="hero-summary">
            Junior Software Engineer with strong skills in backend development,
            AI, and LLM technologies. Passionate about building intelligent
            systems and robust, scalable backend architectures.
          </p>

          <div className="hero-specialization">
            <span className="specialty-tag">
              <span className="tag-icon">⚙️</span> Laravel & FastAPI
            </span>
            <span className="specialty-tag">
              <span className="tag-icon">🤖</span> LLM Integration
            </span>
            <span className="specialty-tag">
              <span className="tag-icon">📊</span> RAG Systems
            </span>
            <span className="specialty-tag">
              <span className="tag-icon">🚀</span> Scalable Backends
            </span>
          </div>

          <div className="hero-quick-info">
            <div className="info-item">
              <span className="info-icon">📧</span>
              <span>yehyafleifel@outlook.com</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <span>(+961) 03716108</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span>Beirut, Lebanon</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn btn-primary">
              View My Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href={pdf}
              download="Yehya_Fleifel_CV.pdf"
              className="hero-btn btn-cv"
            >
              <span className="btn-icon">📄</span>
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/yahyafleifel"
              target="_blank"
              rel="noreferrer"
              className="hero-btn btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img src={heroImg} alt="Yehya Fleifel - Software Engineer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}