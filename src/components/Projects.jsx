import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.jsx';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="side-image"></div>
      <h2>Mes projets</h2>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </section>
  );
}

export default Projects;
