import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import Language from './Language';
import Projects from './Projects';
import Experience from './Experience';
import Achievements from './Achievements';
import '../styles/styles.css';

const Resume = () => {
    const aboutMeDescription = "I'm an active Informatics student at Multimedia Nusantara University, passionate about technology. Engaged in variouscampus organizations, I've developed leadership skills and received awards for my commitment. Actively involved in tech projects, I'm eager to leverage my skills in the professiona world upon completing my studies.";
    const skillsList = ["HTML", "PHP", "VISUAL STUDIO"];
    const educationDetails = { institution: "Multimedia Nusantara University", degree: "Informatics", year: "2022- now"};
    const languageList = ["Indonesian (Native)", "English (Intermediate)"];
    const projectList = [
        {name: "Idle Clicker Game", description: "HTML, JS"},
        {name: "UMNGotcha", description: "HTML, JS"},
        {name: "KomikVerse", description: "HTML,JS"},
        {name: "Restoran IF330", description: "PHP"},
        {name: "To-Do list", description: "PHP"},
        {name: "PT TRI DAYA LANGGENG", description: "Laravel"},
    ];
    const experiencesList = [
        {role: "Events dvision", organization: "Orientasi Mahasiswa Baru Universitas Multimedia Nusantara 2023", year: "2023"},
        {role: "Coordinator of the Student Activity", organization: "Qorie", year: "2023"},
    ];
    const profileImage = process.env.PUBLIC_URL + 'images/me.jpg';
    const achievementsList = ["2nd Place for the best website at CodeXpo IF 231 Multimedia Nusantara University 2023"];

    return (
        <div className="cv-container">
            <h1>Curriculum Vitae</h1>
            <AboutMe description={aboutMeDescription} profileImage={profileImage} />
            <Skills skills={skillsList} />
            <Education {...educationDetails} />
            <Language languages={languageList} />
            <Achievements achievements={achievementsList} />
            <Projects projects={projectList} />
            <h2>Organizational Experiences</h2>
            {experiencesList.map((experience, index) => (
                <Experience key={index} {...experience} />
            ))}
        </div>
    );
};

export default Resume;
