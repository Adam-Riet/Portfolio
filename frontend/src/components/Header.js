import React from 'react';
import Navbar from './Navbar';

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="header-container">
      <h1 className="header-title">
        <span className="bracket">{'{'}</span>
        <div className="header-content">
          <span className="name">Adam Riet</span>
          <span className="title">Web Developer</span>
        </div>
        <span className="bracket">{'}'}</span>
      </h1>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    
    </div>
  
  );
}

export default Header;

