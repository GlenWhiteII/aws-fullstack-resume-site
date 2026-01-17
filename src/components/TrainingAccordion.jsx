import { useState } from "react";
import { trainingTopics } from "../data/trainingTopics";

function AccordionItem({ title, level, items, isOpen, onToggle }) {
  return (
    <div className="acc-item">
      <button className="acc-header" onClick={onToggle} type="button">
        <div className="acc-title-row">
          <span className="acc-title">{title}</span>
          {level && <span className="acc-level">{level}</span>}
        </div>
        <span className="acc-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="acc-panel">
          <ul className="acc-list">
            {items.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function TrainingAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="acc">
      {trainingTopics.map((topic, index) => (
        <AccordionItem
          key={topic.title}
          title={topic.title}
          level={topic.level}
          items={topic.items}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}
