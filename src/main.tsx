import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 // @ts-ignore
import 'swiper/css';
 // @ts-ignore
import 'swiper/css/pagination';
 // @ts-ignore
import 'swiper/css/navigation';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
