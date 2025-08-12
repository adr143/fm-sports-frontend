import './index.css'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client'
import App from './App'

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
