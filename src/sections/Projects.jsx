import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container section-container">
        <span className="section-label">04</span>
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="project-architecture">
                <h4 className="architecture-title">Architecture</h4>
                <p className="architecture-overview">{project.architecture.overview}</p>
                
                <div className="architecture-details">
                  <div className="architecture-section">
                    <h5>Backend Responsibilities</h5>
                    <ul>
                      {project.architecture.backend.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="architecture-section">
                    <h5>Auth Flow (JWT)</h5>
                    <ul>
                      {project.architecture.authFlow.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="architecture-section">
                    <h5>CI/CD Pipeline</h5>
                    <ul>
                      {project.architecture.cicd.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="architecture-section">
                    <h5>Deployment Flow (GKE)</h5>
                    <ul>
                      {project.architecture.deployment.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="project-tech">
                <h4>Technologies</h4>
                <div className="project-tech-items">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="project-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
