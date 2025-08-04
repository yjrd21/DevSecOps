import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import AppRouter from './routes/AppRouter.tsx'

createRoot(document.getElementById('root')!).render(
    <AppRouter />
)
