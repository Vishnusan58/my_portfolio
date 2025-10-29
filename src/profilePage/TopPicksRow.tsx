import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const bannerImages = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHlpdWVjM3d6eXB5bzc5ZWQ0ZnNzeHFvMG1lMTA5angxYWlvMDhtNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LQpCRK5tnJmNKxWoqZ/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHlpdWVjM3d6eXB5bzc5ZWQ0ZnNzeHFvMG1lMTA5angxYWlvMDhtNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VexReXhmpp3m5QXZCT/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHlpdWVjM3d6eXB5bzc5ZWQ0ZnNzeHFvMG1lMTA5angxYWlvMDhtNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dyF3a2v1qJTW8gbYfv/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MGRtOTBibzNtbDZmY20wZm5rMWh3eG8xbTVmNjJwZDMwbzF6amgwcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l49JTNDATP0adO8Xm/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHlpdWVjM3d6eXB5bzc5ZWQ0ZnNzeHFvMG1lMTA5angxYWlvMDhtNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mXuPwP0kxQqvu0M168/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHlpdWVjM3d6eXB5bzc5ZWQ0ZnNzeHFvMG1lMTA5angxYWlvMDhtNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7qDDquZ5Yi4ZlJ4I/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3emhyZHcxNDY2OTZ3ZHY2ajM1M2p1bmJ6dzNkdGRqdXRkanlmdDFqaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6cFcUiCG5eONW/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGpjdm81Ym12dWJkd3V6aHNxdGo2aWJzeGhpZjVmODQ1dHZmMTl3cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/o75ajIFH0QnQC3nCeD/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGpjdm81Ym12dWJkd3V6aHNxdGo2aWJzeGhpZjVmODQ1dHZmMTl3cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jp7jSyjNNz2ansuOS8/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGpjdm81Ym12dWJkd3V6aHNxdGo2aWJzeGhpZjVmODQ1dHZmMTl3cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cXblnKXr2BQOaYnTni/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGpjdm81Ym12dWJkd3V6aHNxdGo2aWJzeGhpZjVmODQ1dHZmMTl3cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IwAZ6dvvvaTtdI8SD5/giphy.gif",
] as const;

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: bannerImages[0], icon: <FaPassport />, route: "/work-permit" },
    { title: "Skills", imgSrc: bannerImages[1], icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: bannerImages[2], icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: bannerImages[3], icon: <FaCertificate />, route: "/certifications" },
    { title: "Recommendations", imgSrc: bannerImages[4], icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Projects", imgSrc: bannerImages[5], icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: bannerImages[6], icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: bannerImages[7], route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: bannerImages[8], route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: bannerImages[9], route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: bannerImages[10], route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: bannerImages[0], route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: bannerImages[1], route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Recommendations", imgSrc: bannerImages[2], route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: bannerImages[3], route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: bannerImages[4], route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: bannerImages[5], route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: bannerImages[6], route: "/certifications", icon: <FaCertificate /> },
  ],
  adventure: [
    { title: "Music", imgSrc: bannerImages[7], route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: bannerImages[8], route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: bannerImages[9], route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: bannerImages[10], route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: bannerImages[2], route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
