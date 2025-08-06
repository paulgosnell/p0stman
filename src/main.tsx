import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './lib/i18n/LanguageContext';
import App from './App';
import './index.css';
import './test-env.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
      <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);