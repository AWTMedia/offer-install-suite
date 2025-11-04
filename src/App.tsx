// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function getBase() {
  // Vite sets this to "/offer-install-suite/" in production
  const raw = import.meta.env.BASE_URL || "/";
  // strip trailing slashes to avoid "/offer-install-suite//" style paths
  return raw.replace(/\/+$/, "");
}

export default function App() {
  const basename = getBase();

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* handle direct hits to /index.html */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
