import React, { useState } from 'react';
import './styles/styles.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <PortfolioContainer currentPage={currentPage} />
      <div className="FooterWrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;

