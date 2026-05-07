import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App';
import UnsubscribePage from './components/pages/UnsubscribePage';

const path = window.location.pathname;
const Component = path === '/unsubscribe' ? UnsubscribePage : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Component />
  </StrictMode>
);
