const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container section-container">
        <span className="section-label">01</span>
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I specialize in building enterprise-grade banking systems with a focus on scalability,
              security, and maintainability. My expertise lies in designing and implementing
              microservices architectures that handle critical financial operations with high
              reliability.
            </p>
            <p className="about-paragraph">
              With deep experience in secure API development, I architect systems that prioritize
              data protection and compliance. Alongside backend engineering, I build responsive and
              data-driven frontend applications using React, creating intuitive dashboards and
              workflow interfaces that integrate seamlessly with scalable backend services.
            </p>
            <p className="about-paragraph">
              My approach combines system design thinking with practical problem-solving skills,
              leveraging data structures and algorithms to optimize performance across both
              distributed systems and modern web applications.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <h3>Enterprise Banking Systems</h3>
                <p>Designing and implementing secure, scalable financial platforms</p>
              </div>
              <div className="highlight-item">
                <h3>Microservices Architecture</h3>
                <p>Building distributed systems with clear service boundaries</p>
              </div>
              <div className="highlight-item">
                <h3>Secure API Development</h3>
                <p>Implementing authentication, authorization, and data protection</p>
              </div>
              <div className="highlight-item">
                <h3>System Design</h3>
                <p>Architecting solutions for scalability and performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
