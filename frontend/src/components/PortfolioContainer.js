import React from 'react';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume';

export default function PortfolioContainer({ currentPage }) {

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio')
            return <Project />;
        if (currentPage === 'Contact')
            return <Contact />;
        return <Resume />;
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}

