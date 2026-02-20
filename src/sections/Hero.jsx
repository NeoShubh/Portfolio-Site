import { personalInfo } from '../data/personalInfo';

const Hero = () => {

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-role">{personalInfo.role}</h2>
          <p className="hero-value">{personalInfo.valueStatement}</p>
          
          <div className="hero-actions">
            <a 
              href={personalInfo.resume} 
              download="Shubham_Rathore_Resume.pdf"
              className="btn btn-primary"
            >
              Download Resume
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
          </div>
          
          <button 
            onClick={scrollToProjects}
            className="btn btn-cta"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
