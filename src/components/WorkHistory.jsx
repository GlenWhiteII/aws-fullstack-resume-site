import { workHistory } from "../data/workHistory";

export default function WorkHistory() {
  return (
    <div className="work-list">
      {workHistory.map((job, index) => (
        <div key={index} className="work-card">
          <h3>{job.company}</h3>
          <p>
            <strong>{job.role}</strong>
          </p>
          <p>{job.location}</p>
          <p className="dates">{job.dates}</p>

          <ul>
            {job.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
