import { techStack } from '../data/techStack';

const TechStack = () => {
  const categories = [
    { name: 'Backend', items: techStack.backend },
    { name: 'Frontend', items: techStack.frontend },
    { name: 'Database', items: techStack.database },
    { name: 'Cloud/DevOps', items: techStack.cloudDevOps }
  ];

  return (
    <section id="tech-stack" className="tech-stack-section">
      <div className="container section-container">
        <span className="section-label">02</span>
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-stack-grid">
          {categories.map((category) => (
            <div key={category.name} className="tech-category">
              <h3 className="tech-category-title">{category.name}</h3>
              <div className="tech-items">
                {category.items.map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
