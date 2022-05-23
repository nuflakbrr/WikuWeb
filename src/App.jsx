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
  ForgotPassword,
} from "./pages";

import {
  AdminLogin,
  Dashboard,
  Biodata as BiodataAdmin,
  EditBiodata,
  Image,
} from "./pages/admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/biodata" element={<Biodata />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/gallery" element={<Gallery />} />

      {/* Admin Side */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/biodata" element={<BiodataAdmin />} />
      <Route path="/admin/biodata/edit/:idUser" element={<EditBiodata />} />
      <Route path="/admin/image" element={<Image />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
