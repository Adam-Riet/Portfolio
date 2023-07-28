import React from 'react';
import './styles/styles.css';
import backgroundImage from './assets/mainbackground.jpg'; // the path to the image relative to your App.js file

function App() {
    return (
    <div className="App" style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
    }}>
      
    </div>
  );
}

export default App;

