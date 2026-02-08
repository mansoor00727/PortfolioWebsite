import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-[80vh] flex flex-col justify-center relative overflow-hidden">
      {/* Animated Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-7xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent bg-300% animate-gradient"
      >
        Zuhaib Mansoor
      </motion.h1>

      {/* Animated Subheadline */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <p className="text-2xl md:text-3xl text-slate-400 max-w-2xl leading-relaxed">
          Specializing in{" "}
          <span className="text-slate-100 font-semibold">
            Cloud Architecture
          </span>{" "}
          and
          <span className="text-blue-400 font-semibold">
            {" "}
            AI-driven automation
          </span>
          .
        </p>
        <p className="text-lg text-slate-500 mt-4 italic">
          Master's Graduate @ University of Windsor
        </p>
      </motion.div>

      {/* Animated Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 flex gap-4"
      >
        <a
          href="#projects"
          class="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20"
        >
          View Projects
        </a>
        <a
          href="#contact"
          class="px-8 py-3 border border-slate-700 hover:border-blue-500 text-slate-300 rounded-full transition-all"
        >
          Let's Connect
        </a>
      </motion.div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for Hire in Canada
      </div>
    </section>
  );
};

export default Hero;
