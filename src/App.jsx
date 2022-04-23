import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {
  LandingPage,
  Login,
  NotFound,
  Register,
  Biodata,
  Profile,
  Gallery,
  AdminDashboard,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/biodata" element={<Biodata />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
