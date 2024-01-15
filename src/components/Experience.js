import React from 'react';
import '../styles/styles.css';

const Experience = ({ role, organization, year }) => {
    return (
        <div>
            <div className="section">
            <p><b>{role}</b></p>
            <p>{organization} {year}</p>
            </div>
        </div>
    );
};

export default Experience;