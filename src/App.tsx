// src/App.tsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
