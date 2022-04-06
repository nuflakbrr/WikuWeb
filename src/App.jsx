import React from "react";
import { Routes, Route } from "react-router-dom";

import { LandingPage, Login, NotFound, Register, Biodata } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/biodata" element={<Biodata />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
