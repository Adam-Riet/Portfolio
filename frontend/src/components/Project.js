import React from 'react';
import '../styles/styles.css';
import githubLogo from '../assets/github-mark.svg';
import sleepshop from '../assets/sleepshop.jpg';
import socialmedia from '../assets/socialmedia.jpg';
import notetaker from '../assets/notetaker.jpg';
import blog from '../assets/blog.jpg';
import ecommerce from '../assets/ecommerce.jpg';
import readme from '../assets/readme.png';
import dayplanner from '../assets/dayplanner.jpg';
import book from '../assets/book.jpg';

function Project() {
    return (
        <div className="projectcontainer">
            <h2>Portfolio</h2>
            <p>Hover over a project to see its name and GitHub logo. Click on the name for the live site or the logo for its repository.</p>

                <div className="grid-container">
                <div className="grid-item" style={{ backgroundImage: `url(${socialmedia})` }}>
                    <a href="https://github.com/Luis6400/Brrdi" target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                    <a href="https://brrdi-aeb82933537b.herokuapp.com/login" target="_blank" rel="noopener noreferrer" className="project-title">Brrdi</a>
                </div>
                <div className="grid-item" style={{ backgroundImage: `url(${sleepshop})` }}>
                    <a href="https://github.com/Luis6400/SleepShop" target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                    <a href="https://sleepshop.herokuapp.com/login" target="_blank" rel="noopener noreferrer" className="project-title">sleepshop</a>
                </div>
                <div className="grid-item" style={{ backgroundImage: `url(${book})` }}>
                    <a href="https://github.com/Adam-Riet/Book-Search-Engine" target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                    <a href="https://book-search-engine2023-f067c82bf9e1.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-title">Book Search</a>
                </div>
                <div className="grid-item" style={{ backgroundImage: `url(${notetaker})` }}>
                    <a href="https://github.com/Adam-Riet/Note-Taker" target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                    <a href="https://note-taker-express-v1.herokuapp.com/notes" target="_blank" rel="noopener noreferrer" className="project-title">Note Taker</a>
                </div>
                
                <div className="grid-item" style={{ backgroundImage: `url(${ecommerce})` }}>
                    <a href="https://github.com/Adam-Riet/Social-Network-API" target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                </div>
                <div className="grid-item" style={{ backgroundImage: `url(${readme})` }}>
                    <a href="https://github.com/Adam-Riet/README.generator" target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                </div>
                <div className="grid-item" style={{ backgroundImage: `url(${dayplanner})` }}>
                    <a href="https://github.com/Adam-Riet/Day-Planner" target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                    <a href="https://adam-riet.github.io/Day-Planner/" target="_blank" rel="noopener noreferrer" className="project-title">Day Planner</a>
                </div>

            </div>
            
            
        </div>
    );
}
 

export default Project;