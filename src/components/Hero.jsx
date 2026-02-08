import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[70vh] flex flex-col justify-center relative pt-20"
    >
      {/* Background Texture to fill empty space */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      {/* 1. Status Badge at Top (Eyebrow) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for Hire in Canada
      </motion.div>

      {/* 2. Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent bg-300% animate-gradient tracking-tighter"
      >
        Zuhaib Mansoor
      </motion.h1>

      {/* 3. Subheadline - More concise spacing */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl"
      >
        <p className="text-xl md:text-2xl text-slate-300 leading-snug">
          Specializing in{" "}
          <span className="text-white font-semibold">Cloud Architecture</span>{" "}
          and{" "}
          <span className="text-blue-400 font-semibold">
            AI-driven automation
          </span>
          .
        </p>
        <p className="text-base text-slate-500 mt-2 font-mono">
          Master's Graduate @ University of Windsor
        </p>
      </motion.div>

      {/* 4. Action Buttons - Moved down for better separation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-slate-700 hover:border-blue-500 text-slate-300 rounded-full transition-all"
        >
          Let's Connect
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
