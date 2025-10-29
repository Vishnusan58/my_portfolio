import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
import { getContactMe } from '../queries/getContactMe';

const ContactMe: React.FC = () => {
  const [userData, setUserData] = useState<IContactMe>();

  useEffect(() => {
    async function fetchUserData() {
      const data = await getContactMe();
      setUserData(data);
    }

    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={userData.profilePicture.url} alt={userData.name} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a href={userData.linkedinLink} target="_blank" rel="noopener noreferrer" className="badge-link">
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I love connecting with people who are building data and AI products. Drop a note anytime.</p>
      </div>
      <div className="contact-details">
        {userData.email && (
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href={`mailto:${userData.email}`} className="contact-link">
              {userData.email}
            </a>
          </div>
        )}
        {userData.phoneNumber && (
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href={`tel:${userData.phoneNumber}`} className="contact-link">
              {userData.phoneNumber}
            </a>
          </div>
        )}
        <div className="contact-fun">
          <p>Always up for a conversation over filter coffee or a brainstorming session.</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
