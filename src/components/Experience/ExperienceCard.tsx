import { useState } from 'react';

type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  tasks: string[];
};

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  // Alternate card alignment
  const alignment = index % 2 === 0 ? 'right' : 'left';

  return (
    <div
      className={`timeline-entry ${alignment} ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <span className="timeline-dot" />
      <div className="experience-card">
        <h3 className="experience-role">{experience.role}</h3>
        <p className="experience-meta">
          {experience.company} · {experience.location}
        </p>
        <p className="experience-duration">{experience.duration}</p>

        {expanded && (
          <ul className="experience-tasks">
            {experience.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
