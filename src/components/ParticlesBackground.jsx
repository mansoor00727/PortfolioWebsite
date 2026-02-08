import React, { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    // Ensure the particlesJS library is available globally
    // If you're using the script tag in index.html, it will be on window.
    if (window.particlesJS) {
      window.particlesJS.load(
        "particles-js",
        "/particles-config.json",
        function () {
          console.log("callback - particles.js config loaded");
        },
      );
    }
  }, []);

  return (
    <div
      id="particles-js"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ backgroundColor: "#0f172a" }}
    />
  );
};

export default ParticlesBackground;
