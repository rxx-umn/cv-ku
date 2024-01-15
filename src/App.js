import React from 'react';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Language from './components/Language';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  const aboutMeDescription = "I'm an active Informatics student at Multimedia Nusantara University, passionate about technology. Engaged in variouscampus organizations, I've developed leadership skills and received awards for my commitment. Actively involved in tech projects, I'm eager to leverage my skills in the professional world upon completing my studies.";
  const skillsList = ["HTML", "PHP", "VISUAL STUDIO"];
  const educationDetails = { institution: "Multimedia Nusantara University", degree: "Informatics", year: "(2022- now)"};
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
    {role: "Events division (Kampana)", organization: "Orientasi Mahasiswa Baru Universitas Multimedia Nusantara", year: "(2023)"},
    {role: "Coordinator of the Student Activity", organization: "Qorie", year: "(2023)"},
  ];
  const profileImage = process.env.PUBLIC_URL + '/images/me.jpeg';
  const textNama = "Rahmat Kurniawan";
  const achievementsList = ["2nd Place KomikVerse for the best website at CodeXpo IF 231 Multimedia Nusantara University 2023"];

  return (
    <div className="App">
            <AboutMe description={aboutMeDescription} profileImage={profileImage} textNama={textNama} className="section"/>
            <Skills skills={skillsList} className="section"/>
            <Education {...educationDetails} className="section" />
            <Language languages={languageList} className="section" />
            <h3>Organizational Experiences</h3>
            {experiencesList.map((experience, index) => (
                <Experience key={index} {...experience} className="section"/>
            ))}
            <Achievements achievements={achievementsList} className="section" />
            <Projects projects={projectList} className="section" />
            <div className="footer">
                <p>For More: rahmadkurniawan423@gmail.com</p>
            </div>
        
    </div>
  );
}

export default App;