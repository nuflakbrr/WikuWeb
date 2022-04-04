import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LandingPage, NotFound } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App