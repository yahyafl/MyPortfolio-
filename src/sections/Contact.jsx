import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact page-section">
      <div className="container">
        <div className="contact-header">
          <h2>Let's Connect & Build Amazing Things</h2>
          <p>
            I'm always open to discussing new opportunities, collaborations,
            or just chatting about tech and innovation.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>yehyafleifel@outlook.com</p>
              <a href="mailto:yehyafleifel@outlook.com" className="info-link">
                Send Email →
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>(+961) 03716108</p>
              <a href="tel:+96103716108" className="info-link">
                Call Me →
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Beirut, Lebanon</p>
              <p className="info-link">Available for Remote Work</p>
            </div>

            <div className="info-card">
              <div className="info-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>Connect professionally</p>
              <a
                href="https://www.linkedin.com/in/yahyafleifel"
                target="_blank"
                rel="noreferrer"
                className="info-link"
              >
                Visit Profile →
              </a>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Ready to Start a Project?</h3>
            <p>
              Whether it's AI solutions, backend development, or innovative
              tech projects, I'd love to hear about your ideas.
            </p>
            <div className="cta-buttons">
              <a href="mailto:yehyafleifel@outlook.com" className="cta-btn primary">
                Send Me a Message
              </a>
              <a
                href="https://www.linkedin.com/in/yahyafleifel"
                target="_blank"
                rel="noreferrer"
                className="cta-btn secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}