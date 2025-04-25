import experienceData from '../../data/Experience.json';
import ExperienceCard from './ExperienceCard';
import '../../styles/experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-wrapper">
        <h2 className="experience-title">Experience</h2>
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
