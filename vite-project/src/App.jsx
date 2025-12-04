import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero">Dahlia Nunn| Full Stack Developer</div>
      <aside className="sidebar">
        <img
          src="https://img.sunset02.com/sites/default/files/styles/1000x1000/public/image/dahlia-jitterbug.jpg"
          alt="DahliaFlower"
          height="150"
          width="150"
          className="profile-img"
        />
        <section>
          <h2>About Me</h2>
          <p>Hello my name is Dahlia. Dahlia is my name.</p>
        </section>
      </aside>
      <main className="main-content">
        <h2 id="mail-title">My Dev Log</h2>
      </main>
      <main>
        <section className="flower-section" aria-label="Interactive flower">
          <p className="visually-hidden" id="flower-desc">
            Use mouse or keyboard. Focus a petal and press Enter/Space to toggle
            it. Click center to spin. Buttons randomize or reset.
          </p>
          <div className="flower-wrapper">
            <svg
              className="interactive-flower"
              viewBox="0 0 200 200"
              width="220"
              height="220"
              role="img"
              aria-labelledby="flower-desc"
            >
              <title>Interactive stylized flower</title>
              <g id="flower-root" transform="translate(100,100)">
                <g className="petals" id="petals">
                  <ellipse
                    className="petal"
                    rx="22"
                    ry="54"
                    fill="#ff6fa3"
                    transform="rotate(0)"
                    data-index="1"
                    tabIndex="0"
                    role="button"
                    aria-pressed="false"
                  />
                  <ellipse
                    className="petal"
                    rx="22"
                    ry="54"
                    fill="#ff88b9"
                    transform="rotate(45)"
                    data-index="2"
                    tabIndex="0"
                    role="button"
                    aria-pressed="false"
                  />
                  <ellipse
                    className="petal"
                    rx="22"
                    ry="54"
                    fill="#ff6fa3"
                    transform="rotate(90)"
                    data-index="3"
                    tabIndex="0"
                    role="button"
                    aria-pressed="false"
                  />
                  <ellipse
                    className="petal"
                    rx="22"
                    ry="54"
                    fill="#ff88b9"
                    transform="rotate(135)"
                    data-index="4"
                    tabIndex="0"
                    role="button"
                    aria-pressed="false"
                  />
                  <ellipse
                    className="petal"
                    rx="22"
                    ry="54"
                    fill="#ff6fa3"
                    transform="rotate(180)"
                    data-index="5"
                    tabIndex="0"
                    role="button"
                    aria-pressed="false"
                  />
                  <ellipse
                    className="petal"
                    rx="22"
                    ry="54"
                    fill="#ff88b9"
                    transform="rotate(225)"
                    data-index="6"
                    tabIndex="0"
                    role="button"
                    aria-pressed="false"
                  />
                  <ellipse
                    className="petal"
                    rx="22"
                    ry="54"
                    fill="#ff6fa3"
                    transform="rotate(270)"
                    data-index="7"
                    tabIndex="0"
                    role="button"
                    aria-pressed="false"
                  />
                  <ellipse
                    className="petal"
                    rx="22"
                    ry="54"
                    fill="#ff88b9"
                    transform="rotate(315)"
                    data-index="8"
                    tabIndex="0"
                    role="button"
                    aria-pressed="false"
                  />
                </g>
                <g
                  id="center"
                  tabIndex="0"
                  role="button"
                  aria-label="Spin flower"
                  aria-pressed="false"
                >
                  <circle r="20" fill="#ffd166" />
                  <circle
                    r="7"
                    fill="#fff7d6"
                    transform="translate(6,-6)"
                    opacity="0.7"
                  />
                </g>
              </g>
            </svg>
          </div>

          <div className="flower-controls" aria-hidden="false">
            <button id="randomize-colors" className="button">
              Randomize colors
            </button>
            <button id="reset-flower" className="button">
              Reset
            </button>
          </div>

          <g>
            {" "}
            id="center" tabIndex="0" role="button" aria-label="Spin flower"
            aria-pressed="false"
            <circle r="20" fill="#ffd166" />
            <circle
              r="7"
              fill="#fff7d6"
              transform="translate(6,-6)"
              opacity="0.7"
            />
          </g>
        </section>
      </main>
    </>
  );
}

export default App;
