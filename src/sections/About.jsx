import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about page-section">
      <div className="container">
        {/* Header */}
        <div className="about-header">
          <h2>My Professional Journey</h2>
          <p>
            A blend of technical expertise and passion for innovation in backend
            systems and AI
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card card-1">
            <div className="card-header">
              <div className="card-icon">👨‍💻</div>
              <h3>Who I Am</h3>
            </div>
            <p>
              I'm a passionate software engineer specialized in backend
              development and artificial intelligence. My focus is on building
              scalable systems and LLM-powered solutions that transform complex
              ideas into practical, real-world applications.
            </p>
          </div>

          <div className="about-card card-2">
            <div className="card-header">
              <div className="card-icon">🎯</div>
              <h3>My Mission</h3>
            </div>
            <p>
              To design reliable architectures and intelligent systems that
              solve real-world problems. I believe in the power of well-crafted
              backend systems combined with AI to create meaningful impact.
            </p>
          </div>
        </div>

        <div className="journey-timeline">
          <div className="timeline-header">
            <h3>My Learning Path</h3>
            <p>
              From academic foundations to hands-on expertise in AI and backend
              systems
            </p>
          </div>

          <div className="timeline">
            {/* Timeline Item 1 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Academic Foundation</h4>
                <p>
                  Building a solid foundation in computer science principles,
                  algorithms, and software engineering practices.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Backend Development</h4>
                <p>
                  Hands-on experience building scalable backend services with
                  modern frameworks like FastAPI and Laravel, working with
                  databases like PostgreSQL.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>AI & LLM Integration</h4>
                <p>
                  Specializing in AI-driven platforms and Retrieval-Augmented
                  Generation (RAG) solutions using cutting-edge AI frameworks
                  and tools.
                </p>
              </div>
            </div>

            {}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Real-world Impact</h4>
                <p>
                  Continuously learning and refining skills to build
                  intelligent, scalable systems with real impact in the
                  industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="about-cta">
          <h3>Let's Build Something Amazing</h3>
          <a href="#contact" className="cta-button">
            Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
