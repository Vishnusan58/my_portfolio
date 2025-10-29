import React from 'react';
import './Recommendations.css';
import mentorProfilePic from '../images/chris.jpg';

const Recommendations: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={mentorProfilePic} alt="Deepa Raman" className="profile-pic" />
          <div>
            <h3>Deepa Raman</h3>
            <p>Head of Data Science - Neoware Technology Solutions</p>
            <p className="date">May 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>
            "Vishnu brings the rare combination of deep technical curiosity and product empathy. During his internship he
            owned the delivery of an insurance risk intelligence pipeline end to end - from data preparation to SHAP
            explainability - and communicated insights that our consulting teams could action immediately."
          </p>
          <p>
            "He is resourceful, comfortable experimenting with new tooling, and fast at translating ambiguous business
            questions into measurable experiments. The RAG prototypes he built with Azure, LangChain, and Pinecone have
            become the backbone of our customer success playbook."
          </p>
          <p>
            "Beyond the code, Vishnu elevates the team environment. He mentors peers on best practices, documents his
            learnings, and is generous with feedback. Any data and AI organisation would be lucky to have him."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
