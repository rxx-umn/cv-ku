import React from 'react';
import '../styles/styles.css';

const Achievements = ({ achievements }) => {
    return (
        <div>
            <div className="section">
            <h3>Achievements</h3>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default Achievements;