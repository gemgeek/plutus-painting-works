import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
 // @ts-ignore
import 'swiper/css';
 // @ts-ignore
import 'swiper/css/pagination';
 // @ts-ignore
import 'swiper/css/navigation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* 2. Wrap App */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
