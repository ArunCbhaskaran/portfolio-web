// ============================================================
//  src/App.jsx
//  Root of the app. Sets up React Router with all 4 pages.
//  The Navbar is rendered once here so it appears on every page.
// ============================================================

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar   from "./components/Navbar";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Projects from "./pages/Projects";
import Contact  from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar is outside <Routes> so it stays on every page */}
      <Navbar />

      <Routes>
        {/* Each Route maps a URL path to a page component */}
        <Route path="/"        element={<Home />}     />
        <Route path="/about"   element={<About />}    />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />}  />

        {/* Optional: catch-all 404 — you can add a NotFound page later */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
