import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './styles/styles.css';
import { ThemeProvider } from './context/themeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
  <App />
</ThemeProvider>,
);

