import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import Skills from "./components/Skills";
import ResumeButton from "./components/ResumeButton";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      {/* The main portfolio page */}
      <Route
        path="/"
        element={
          <div className="relative bg-slate-900 text-slate-100 selection:bg-blue-500/30">
            {/* Background stays global */}
            <ParticlesBackground />
            <Navbar />
            <main className="relative z-10 max-w-6xl mx-auto px-6">
              <Hero />
              <Skills /> {/* Added here */}
              <Projects />
              <Contact />
            </main>
            <ResumeButton /> {/* Always visible */}
            <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-800/50">
              <p>&copy; 2026 Zuhaib Mansoor. Built with React & AWS.</p>
            </footer>
          </div>
        }
      />

      {/* The 404 page for everything else */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
