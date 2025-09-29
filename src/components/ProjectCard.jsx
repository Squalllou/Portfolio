import { useState } from 'react';
import ProjectModal from './ProjectModal';
import '../styles/ProjectCard.css';

function ProjectCard({ project, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const isReversed = index % 2 === 1;

  return (
    <>
      <div className="project-wrapper">
        <div className={`project-card ${isReversed ? 'reversed' : ''}`}>
          <div className="project-text">
            <h3 className="title">{project.title}</h3>
            <p className="text">{project.description}</p>
          </div>
          <div className={`project-image ${isReversed ? 'left-shadow' : 'right-shadow'}`} onClick={() => setIsOpen(true)}>
            <img src={project.screenshot} alt={project.title} />
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        src={project.src}
        title={project.title}
        details={project.details}
      >
        {!project.src && project.details}
      </ProjectModal>
    </>
  );
}

export default ProjectCard;
