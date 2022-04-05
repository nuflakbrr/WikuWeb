import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LandingPage, Login, NotFound, Register } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App