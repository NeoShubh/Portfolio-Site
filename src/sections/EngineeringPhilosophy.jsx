import { education } from '../data/engineeringPhilosophy';

const Education = () => {
  return (
    <section id="education" className="engineering-section">
      <div className="container section-container">
        <span className="section-label">05</span>
        <h2 className="section-title">{education.title}</h2>
        <div className="philosophy-grid">
          {education.items.map((item, index) => (
            <div key={index} className="philosophy-card">
              <h3 className="philosophy-title">{item.level}</h3>
              <p className="philosophy-description">
                {item.institution}
                {item.location ? ` · ${item.location}` : ''}
              </p>
              {(item.university || item.board || item.period || item.year) && (
                <p className="philosophy-description">
                  {[
                    item.university,
                    item.board,
                    item.period,
                    item.year
                  ]
                    .filter(Boolean)
                    .join(' · ')}
                </p>
              )}
              {item.score && (
                <p className="philosophy-description">
                  <strong>Result:</strong> {item.score}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="philosophy-description mt-4">
          {education.note}
        </p>
      </div>
    </section>
  );
};

export default Education;
