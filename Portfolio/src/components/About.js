import React from 'react';
import myImage from '../assets/portfolio.jpg'; 
import '../styles/styles.css';

function About() {
    return (
        <div className="abcontainer">
            <h2>About Me</h2> 
            <div className="abimage">
                <img src={myImage} alt="About me" /> 
            </div>

            <div className="abparagraph">
                <p>With over a decade of experience in sales, I have developed a deep understanding of the importance of effective communication, relationship-building, and creative problem-solving. As a lifelong technology enthusiast, I am now channeling my passion into learning programming and expanding my skill set in the ever-evolving world of technology.</p>
            </div>

            <div className="abparagraph">
                <p>Driven by my innate curiosity, I am continually exploring new ways to innovate and apply my expertise to real-world challenges. In my spare time, I enjoy immersing myself in the gaming world, where I sharpen my strategic thinking and problem-solving skills. Outside of work and gaming, I cherish the moments spent with friends, sharing experiences and creating lasting memories.</p>
            </div>

            <div className="abparagraph">
                <p>With a foundation in sales and a newfound passion for programming, I am excited to embrace new opportunities, learn from diverse perspectives, and contribute to impactful projects in the technology sector.</p>
            </div>
        </div>
    );
}


export default About;
