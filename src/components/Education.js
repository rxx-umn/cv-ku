import React from 'react';
import '../styles/styles.css';

const Education = ({ institution, degree, year}) =>  {
    return (
        <div>
            <div className="section">
            <h3>Education</h3>
            <p>{institution}</p>
            <p>{degree} {year}</p>
            </div>
    
        </div>
    );
};

export default Education;