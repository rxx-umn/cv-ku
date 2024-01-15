import React from 'react';
import '../styles/styles.css';

const Projects = ({ projects }) => {
    return (
        <div>
            <div className="section">
            <h3>Projects</h3>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <strong>{project.name}</strong>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default Projects;