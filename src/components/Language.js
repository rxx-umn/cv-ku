import React from 'react';
import '../styles/styles.css';

const Language = ({ languages }) => {
    return (
        <div>
            <div className="section">
            <h3>Languages</h3>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default Language;