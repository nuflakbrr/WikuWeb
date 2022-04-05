import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LandingPage, Login, NotFound } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App