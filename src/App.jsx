import "./App.css";
import WorkHistory from "./components/WorkHistory";
import TrainingAccordion from "./components/TrainingAccordion";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-top">
          <div>
            <h1 className="title">Glen White</h1>
            <p className="subtitle">
              Field Service Engineer • Mechanical/Electrical Troubleshooting •
              Learning Cloud/Dev
            </p>
          </div>

          <nav className="nav">
            <a href="#work">Work</a>
            <a href="#training">Training</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section id="work" className="section">
          <h2>Work History</h2>
          <WorkHistory />
        </section>

        <section id="training" className="section">
          <h2>FSE Training Topics</h2>
          <TrainingAccordion />
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <Contact />
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Glen White</small>
      </footer>
    </div>
  );
}
