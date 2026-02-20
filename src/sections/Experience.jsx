import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container section-container">
        <span className="section-label">03</span>
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-company">{exp.company}</span>
                <span className="experience-period">{exp.period}</span>
              </div>
              
              <div className="system-overview">
                <h4 className="system-overview-title">System Overview</h4>
                <p className="system-description">{exp.systemOverview.description}</p>
                <div className="system-modules">
                  {exp.systemOverview.modules.map((module, idx) => (
                    <div key={idx} className="module-item">
                      <span className="module-bullet">•</span>
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="tech-used">
                <h4 className="tech-used-title">Tech Used:</h4>
                <div className="tech-used-items">
                  {exp.techUsed.map((tech, idx) => (
                    <span key={idx} className="tech-used-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
