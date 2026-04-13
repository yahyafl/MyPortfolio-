import "../styles/about.css";

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
                  Bachelor's degree in Computer Science at Beirut Arab
                  University — graduating May 2025. Awarded 1st place in the
                  senior projects competition.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>AI Engineering at IDS Fintech</h4>
                <p>
                  Researched and applied RAG techniques for financial AI
                  solutions. Built FastAPI backend services, implemented MCP
                  servers, and deployed via Docker and cloud environments.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Full Stack Intern — The Digital Hub UNRWA</h4>
                <p>
                  Engineering full-stack features with Next.js, NestJS, and
                  FastAPI. Enhancing AI retrieval pipelines with RAG and vector
                  databases, applying SOLID principles and Agile/Scrum
                  methodologies.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Real-world Impact</h4>
                <p>
                  Continuously building intelligent, scalable systems with real
                  impact — from AI-powered stock platforms to modular LLM
                  orchestration pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h3>Let's Build Something Amazing</h3>
          <a href="#contact" className="cta-button">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}