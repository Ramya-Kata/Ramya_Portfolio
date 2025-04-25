type Project = {
    title: string;
    description: string;
    techStack: string[];
    link: string;
  };
  
  const ProjectCard = ({
    project,
    className = '',
  }: {
    project: Project;
    className?: string;
  }) => {
    return (
      <div className={`project-card ${className}`}>
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tech-stack">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project →
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
  