import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
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

const continueWatchingConfig = {
  recruiter: [
    { title: "Music", imgSrc: bannerImages[0], link: "/music" },
    { title: "Reading", imgSrc: bannerImages[2], link: "/reading" },
    { title: "Blogs", imgSrc: bannerImages[4], link: "/blogs" },
    { title: "Contact Me", imgSrc: bannerImages[6], link: "/contact-me" }
  ],
  developer: [
    { title: "Music", imgSrc: bannerImages[1], link: "/music" },
    { title: "Reading", imgSrc: bannerImages[3], link: "/reading" },
    { title: "Blogs", imgSrc: bannerImages[5], link: "/blogs" },
    { title: "Certifications", imgSrc: bannerImages[7], link: "/certifications" },
    { title: "Contact Me", imgSrc: bannerImages[9], link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: bannerImages[8], link: "/reading" },
    { title: "Blogs", imgSrc: bannerImages[10], link: "/blogs" },
    { title: "Contact Me", imgSrc: bannerImages[0], link: "/contact-me" }
  ],
  adventure: [
    { title: "Music", imgSrc: bannerImages[2], link: "/music" },
    { title: "Reading", imgSrc: bannerImages[4], link: "/reading" },
    { title: "Certifications", imgSrc: bannerImages[6], link: "/certifications" },
    { title: "Contact Me", imgSrc: bannerImages[8], link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
