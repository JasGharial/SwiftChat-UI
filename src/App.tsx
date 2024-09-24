// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AppProvider from './providers/app'
import AppRoutes from './routes'
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from './components/ui/toaster';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Sonner />
      <Toaster />
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  )
}

export default App
