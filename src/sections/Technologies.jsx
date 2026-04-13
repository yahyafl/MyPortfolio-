import "../styles/tech.css";

export default function Technologies() {
  return (
    <section id="tech" className="tech">
      <div className="container">
        <h2>Technical Skills</h2>

        <div className="tech-categories">

          {/* Backend Technologies */}
          <div className="tech-category">
            <h3>
              <span className="category-icon">⚙️</span>
              Backend Technologies
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">🚀</div>
                <div className="tech-name">FastAPI</div>
                <div className="tech-level">Advanced</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🟢</div>
                <div className="tech-name">NestJS</div>
                <div className="tech-level">Intermediate</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🟠</div>
                <div className="tech-name">Laravel</div>
                <div className="tech-level">Intermediate</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🔷</div>
                <div className="tech-name">Express.js</div>
                <div className="tech-level">Intermediate</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🐍</div>
                <div className="tech-name">Django</div>
                <div className="tech-level">Familiar</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🔧</div>
                <div className="tech-name">REST APIs</div>
                <div className="tech-level">Design</div>
              </li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="tech-category">
            <h3>
              <span className="category-icon">🖥️</span>
              Frontend
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">▲</div>
                <div className="tech-name">Next.js</div>
                <div className="tech-level">Intermediate</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">⚛️</div>
                <div className="tech-name">React</div>
                <div className="tech-level">Intermediate</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🔷</div>
                <div className="tech-name">TypeScript</div>
                <div className="tech-level">Intermediate</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🟡</div>
                <div className="tech-name">JavaScript</div>
                <div className="tech-level">Intermediate</div>
              </li>
            </ul>
          </div>

          {/* AI & LLM Engineering */}
          <div className="tech-category">
            <h3>
              <span className="category-icon">🤖</span>
              AI & LLM Engineering
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">📚</div>
                <div className="tech-name">RAG</div>
                <div className="tech-level">Systems</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🔗</div>
                <div className="tech-name">LangChain</div>
                <div className="tech-level">Advanced</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🕸️</div>
                <div className="tech-name">LangGraph</div>
                <div className="tech-level">Advanced</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🔄</div>
                <div className="tech-name">MCP</div>
                <div className="tech-level">Protocol</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">✍️</div>
                <div className="tech-name">Prompt Eng.</div>
                <div className="tech-level">Expert</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🧬</div>
                <div className="tech-name">LLM Fine-tuning</div>
                <div className="tech-level">LoRA</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🧠</div>
                <div className="tech-name">AI Agents</div>
                <div className="tech-level">LLMOps</div>
              </li>
            </ul>
          </div>

          {/* Vector & Databases */}
          <div className="tech-category">
            <h3>
              <span className="category-icon">🗄️</span>
              Databases & Vector Stores
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">🐘</div>
                <div className="tech-name">PostgreSQL</div>
                <div className="tech-level">Advanced</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🔴</div>
                <div className="tech-name">Redis</div>
                <div className="tech-level">Caching</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🍃</div>
                <div className="tech-name">NoSQL</div>
                <div className="tech-level">Experience</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">📌</div>
                <div className="tech-name">Pinecone</div>
                <div className="tech-level">Vector DB</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🐬</div>
                <div className="tech-name">pgvector</div>
                <div className="tech-level">Vector DB</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">⚡</div>
                <div className="tech-name">Qdrant</div>
                <div className="tech-level">Vector DB</div>
              </li>
            </ul>
          </div>

          {/* ML & NLP Frameworks */}
          <div className="tech-category">
            <h3>
              <span className="category-icon">🧮</span>
              ML & NLP Frameworks
            </h3>
            <ul className="tech-items">
              <li className="tech-item">
                <div className="tech-icon">⚡</div>
                <div className="tech-name">TensorFlow</div>
                <div className="tech-level">Experience</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🔤</div>
                <div className="tech-name">NLP</div>
                <div className="tech-level">Experience</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🤖</div>
                <div className="tech-name">Gensim</div>
                <div className="tech-level">Word2Vec</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🐼</div>
                <div className="tech-name">Pandas/NumPy</div>
                <div className="tech-level">Advanced</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🔄</div>
                <div className="tech-name">RNN / LSTM</div>
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
                <div className="tech-icon">☁️</div>
                <div className="tech-name">GCP</div>
                <div className="tech-level">Deployment</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">📦</div>
                <div className="tech-name">Git</div>
                <div className="tech-level">Advanced</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">🔁</div>
                <div className="tech-name">CI/CD</div>
                <div className="tech-level">Pipelines</div>
              </li>
              <li className="tech-item">
                <div className="tech-icon">📋</div>
                <div className="tech-name">Jira</div>
                <div className="tech-level">Agile</div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}