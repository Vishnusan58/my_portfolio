import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';
import {
  FaReact,
  FaAws,
  FaDocker,
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCloud,
  FaDatabase,
  FaPython,
  FaJava,
  FaRust,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTensorflow,
  SiPostgresql,
  SiMysql,
  SiKubernetes,
  SiGooglecloud,
  SiSpringboot,
  SiTableau,
  SiPowerbi,
  SiCsharp,
} from 'react-icons/si';
import { Skill } from '../types';

const iconMap: Record<string, JSX.Element> = {
  FaBrain: <FaBrain />,
  SiTensorflow: <SiTensorflow />,
  FaRobot: <FaRobot />,
  FaChartLine: <FaChartLine />,
  FaCloud: <FaCloud />,
  FaDatabase: <FaDatabase />,
  FaPython: <FaPython />,
  FaJava: <FaJava />,
  FaRust: <FaRust />,
  SiCsharp: <SiCsharp />,
  SiTableau: <SiTableau />,
  SiPowerbi: <SiPowerbi />,
  FaReact: <FaReact />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiTypescript: <SiTypescript />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiSpringboot: <SiSpringboot />,
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.entries(skillsByCategory).map(([category, skills], index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name" aria-label={skill.name}>
                  {Array.from(skill.name).map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className={`letter${char === ' ' ? ' letter-space' : ''}`}
                      style={{ animationDelay: `${charIndex * 0.05}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
