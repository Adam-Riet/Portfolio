import React from 'react';
import '../styles/styles.css';
import resume from '../assets/resume.pdf';

function Resume() {
    return (
        <div className="resumecontainer">
            <h2>Resume</h2>
            <a href={resume} download>Download my resume</a>
            <h3>Programming Proficiencies:</h3>
            <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>

               
            </ul>
        </div>
    );
}

export default Resume;
