import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WorkHistory from "./components/WorkHistory";
import TrainingAccordion from "./components/TrainingAccordion";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="title">Glen White</h1>
        <p className="subtitle">
          Field Service Engineer • Mechanical/Electrical Troubleshooting •
          Learning Cloud/Dev
        </p>
      </header>

      <main className="main">
        <section className="section">
          <h2>Work History</h2>
          <WorkHistory />
        </section>

        <section className="section">
          <h2>FSE Training Topics</h2>
          <TrainingAccordion />
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Glen White</small>
      </footer>
    </div>
  );
}
