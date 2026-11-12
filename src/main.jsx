import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';

// Strict Mode is being used to highlight potential problems in the app.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);