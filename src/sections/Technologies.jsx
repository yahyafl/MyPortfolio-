import "../styles/tech.css";

export default function Technologies() {
  return (
    <section id="tech" className="tech">
      <div className="container">
        <h2>Technical Skills</h2>
        
        <div className="tech-categories">
          <div className="tech-category">
            <h3>
              <span className="category-icon">⚙️</span>
              Backend Technologies
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">🟢</div>
                <div className="tech-name">Laravel</div>
                <div className="tech-level">Advanced</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">🚀</div>
                <div className="tech-name">FastAPI</div>
                <div className="tech-level">Advanced</div>
              </li>
            
              
              <li className="tech-item">
                <div className="tech-icon">🔧</div>
                <div className="tech-name">API Design</div>
                <div className="tech-level">REST</div>
              </li>
            </ul>
          </div>
          
          <div className="tech-category">
            <h3>
              <span className="category-icon">🤖</span>
              AI & LLM Technologies
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">🧠</div>
                <div className="tech-name">LLM</div>
                <div className="tech-level">Integration</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">📚</div>
                <div className="tech-name">RAG</div>
                <div className="tech-level">Systems</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">✍️</div>
                <div className="tech-name">Prompt</div>
                <div className="tech-level">Engineering</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">🔄</div>
                <div className="tech-name">LLM Routes</div>
                <div className="tech-level">Expert</div>
              </li>
            </ul>
          </div>
          
          <div className="tech-category">
            <h3>
              <span className="category-icon">🧮</span>
              ML & Neural Networks
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">🧠</div>
                <div className="tech-name">Neural</div>
                <div className="tech-level">Networks</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">🔄</div>
                <div className="tech-name">RNN</div>
                <div className="tech-level">Advanced</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">⏳</div>
                <div className="tech-name">LSTM</div>
                <div className="tech-level">Advanced</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">📈</div>
                <div className="tech-name">Machine</div>
                <div className="tech-level">Learning</div>
              </li>
            </ul>
          </div>
          
          <div className="tech-category">
            <h3>
              <span className="category-icon">🗄️</span>
              Databases
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">🐘</div>
                <div className="tech-name">PostgreSQL</div>
                <div className="tech-level">Advanced</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">🐬</div>
                <div className="tech-name">MySQL</div>
                <div className="tech-level">Advanced</div>
              </li>
              
              
            </ul>
          </div>
          
          <div className="tech-category">
            <h3>
              <span className="category-icon">🔤</span>
              NLP & ML Frameworks
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">🔤</div>
                <div className="tech-name">NLP</div>
                <div className="tech-level">Experience</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">⚡</div>
                <div className="tech-name">TensorFlow</div>
                <div className="tech-level">Experience</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">🤖</div>
                <div className="tech-name">Gensim</div>
                <div className="tech-level">Word2Vec</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">🐼</div>
                <div className="tech-name">Pandas/Numpy</div>
                <div className="tech-level">Advanced</div>
              </li>
            </ul>
          </div>
          
          {/* Tools & DevOps */}
          <div className="tech-category">
            <h3>
              <span className="category-icon">🛠️</span>
              Tools & DevOps
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">🐳</div>
                <div className="tech-name">Docker</div>
                <div className="tech-level">Experience</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">📦</div>
                <div className="tech-name">Git</div>
                <div className="tech-level">Advanced</div>
              </li>
              
              <li className="tech-item">
                <div className="tech-icon">☁️</div>
                <div className="tech-name">Google Cloud</div>
                <div className="tech-level">Deployment</div>
              </li>
              
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}