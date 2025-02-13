import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; // Ensure this matches your CSS filename
import App from './App';

// Optional: Remove this if not using performance monitoring
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance, uncomment below
// reportWebVitals(console.log);
