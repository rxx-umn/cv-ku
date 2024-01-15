import React from 'react';
import '../styles/styles.css';

const AboutMe = ({ description, profileImage, textNama }) =>  {
    const instagramUsername = "rxx.zip";
    return (
        <div>
            
            <div className="profile-image-container">
            <a href={`https://www.instagram.com/${instagramUsername}`} target="_blank" rel="noopener noreferrer">
                <img src={profileImage} alt="Profile" className="profile-img" />
            </a>
                <p className="name-text">{textNama}</p>
            </div>
           
           
            <div className="section">
            <h3>About Me</h3>
            <p>{description}</p>
            </div>
          
        </div>
    );
};

export default AboutMe;