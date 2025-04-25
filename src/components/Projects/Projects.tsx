import { useState, useEffect } from 'react';
import projectData from '../../data/Projects.json';
import ProjectCard from './ProjectCard';
import '../../styles/projects.css';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const projectsPerPage = isMobile ? 1 : 6;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalPages = Math.ceil(projectData.length / projectsPerPage);
  const start = (currentPage - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  const currentProjects = projectData.slice(start, end);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">
        <h2 className="projects-title">Projects</h2>

        {!isMobile && (
          <div className="custom-grid-layout">
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                className={`card-${index + 1}`}
              />
            ))}
          </div>
        )}

        {isMobile && (
          <div className="project-scroll">
            {projectData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}

        {!isMobile && (
          <div className="pagination-controls">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ←
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
