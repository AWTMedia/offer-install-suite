// src/App.tsx
import * as React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Lazy-load pages/components for smaller bundle
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const BookACall = React.lazy(() => import("@/components/BookACall"));
const PlaybookLanding = React.lazy(() => import("@/components/PlaybookLanding"));

function Fallback() {
  return (
    <div className="min-h-screen grid place-items-center bg-background text-foreground">
      <div className="text-sm tracking-wide">Loading…</div>
    </div>
  );
}

// Scroll to top on route change (works with HashRouter)
function ScrollToTop() {
  const loc = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname, loc.hash, loc.search]);
  return null;
}

/**
 * HashRouter is used for GitHub Pages reliability.
 * New routes:
 *  - /book-a-call → Book a Call page
 *  - /playbooks and /repo → Playbook Landing page
 */
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <React.Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* New pages */}
          <Route path="/book-a-call" element={<BookACall />} />
          <Route path="/playbooks" element={<PlaybookLanding />} />
          <Route path="/repo" element={<PlaybookLanding />} />

          {/* Handle direct hits to /index.html inside the hash */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
}
