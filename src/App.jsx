
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/footer.jsx'
import About from './sections/About.jsx';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Technologies from './sections/Technologies.jsx';
import Contact from './sections/Contact.jsx';
import './styles/global.css';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
    <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default App
