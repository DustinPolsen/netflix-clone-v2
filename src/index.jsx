import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvidersNest } from './context/ContextProvidersNest';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

createRoot(root).render(
  <Router>
    <ContextProvidersNest>
      <App />
    </ContextProvidersNest>
  </Router>
);
