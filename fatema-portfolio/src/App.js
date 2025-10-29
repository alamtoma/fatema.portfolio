import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Fatema Alam</h1>
        <p>Fullstack Developer | Python | JavaScript | React | FastAPI</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am an IT student completing my bachelor's degree in Information
          Technology in spring 2026. I enjoy building full-stack solutions that
          make a real difference, especially within healthcare technology.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>📷 Raspberry Pi Camera App</h3>
          <p>Live streaming and image capture system built with Flask and OpenCV.</p>
          <a href="https://github.com/yourusername/raspberry-pi-camera" target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="project">
          <h3>🌐 Developer Portfolio</h3>
          <p>Responsive portfolio built with React and hosted on GitHub Pages.</p>
        </div>
      </section>

      <footer>
        <p>
          📧 faala1672@oslomet.no |{" "}
          <a href="https://github.com/yourusername">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
