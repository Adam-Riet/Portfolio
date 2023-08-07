import React, { useState } from 'react';
import './styles/styles.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import PortfolioContainer from './components/PortfolioContainer';

import { useEffect } from 'react';
import { useTheme } from './context/themeContext';

function App() {
  const { theme } = useTheme();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <hr />
      <PortfolioContainer currentPage={currentPage} />
      <hr />
      <div className="FooterWrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;

