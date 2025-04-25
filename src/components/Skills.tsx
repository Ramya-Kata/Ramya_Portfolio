import skillsData from '../data/Skills.json';
import '../styles/skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        <h2 className="skills-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div key={index}>
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
