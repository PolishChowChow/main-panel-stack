import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import HomePage from './pages/home/HomePage'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './setup/queryClient'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  </StrictMode>,
)
