// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function computeBasename() {
  // Vite sets BASE_URL to "/offer-install-suite/" in prod and "/" in dev.
  const raw = (import.meta as any).env?.BASE_URL ?? "/";
  // Ensure it starts with a slash
  let base = raw.startsWith("/") ? raw : `/${raw}`;
  // Remove trailing slashes except for the root "/"
  if (base !== "/") base = base.replace(/\/+$/, "");
  // Final guard: BrowserRouter expects a leading slash
  if (!base || !base.startsWith("/")) base = "/";
  return base;
}

export default function App() {
  const basename = computeBasename();

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Direct hits to /index.html should land on home */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
