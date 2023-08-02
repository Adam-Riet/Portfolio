import React from 'react';
import myImage from '../assets/portfolio.jpg'; 
import '../styles/styles.css';

function About() {
    return (
        <div className="main-container">
            <div className="left-content">
                {/* Your left-side content will go here */}
            </div>
            <div className="abcontainer">
                <div className="abparagraph">
                    <p>Recently, I completed a Full Stack Web Development Bootcamp at the University of Utah. Leveraging a decade of sales experience, I am excited to transition into tech, where my expertise in communication, relationship-building, and problem-solving can shine.</p>
                </div>

                <div className="abparagraph">
                    <p>My Github and LinkedIn profiles are linked below. Please check out my portfolio for examples of my work. I look forward to connecting with you!
                    </p>
                </div>
                <div className="abimage">
                    <img src={myImage} alt="About me" /> 
                </div>
            </div>
        </div>
    );
}




export default About;
