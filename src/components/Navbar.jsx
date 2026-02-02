import "../styles/global.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <p className="navbar-brand">Yehya.Dev</p>
      <ul className="nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#tech">Technologies</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}