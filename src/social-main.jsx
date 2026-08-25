import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import SocialApp from './SocialApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialApp />
  </StrictMode>,
)