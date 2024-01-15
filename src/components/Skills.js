import React from 'react';
import '../styles/styles.css';

const Skills = ({ skills }) => {
    return (
        <div>
            <div className="section">
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key ={index}>{skill}</li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default Skills;