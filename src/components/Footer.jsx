import "../styles/global.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <p className="footer-title">Connect with me on:</p>
        <ul className="footer-links">
          <li>
            <a
              href="https://www.linkedin.com/in/yahyafleifel"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yahyafl"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <ul className="footer-info">
          <li>📧 yehyafleifel@outlook.com</li>
          <li>📍 Beirut, Lebanon</li>
        </ul>
      </div>

      <div className="footer-section footer-bottom">
        <p className="footer-copy">
          © 2026 Yehya Ayman Fleifel. All rights reserved.
        </p>
        <p className="footer-credit">Designed and built by me</p>
      </div>
    </footer>
  );
}
