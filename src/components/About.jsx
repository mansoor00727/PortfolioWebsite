import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Terminal, Cpu } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap size={20} />,
      text: "MEng Electrical & Computer Engineering",
      sub: "University of Windsor",
    },
    {
      icon: <MapPin size={20} />,
      text: "Based in Bharuch, India",
      sub: "Relocating to Canada 2026",
    },
    {
      icon: <Terminal size={20} />,
      text: "Full-Stack AI Developer",
      sub: "Focusing on LLMs & Automation",
    },
    {
      icon: <Cpu size={20} />,
      text: "Cloud Architect",
      sub: "AWS Certified Practitioner Path",
    },
  ];

  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold border-l-4 border-blue-500 pl-4 text-white">
              About Me
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a specialized Engineer who thrives at the intersection of{" "}
              <span className="text-white font-medium">
                Cloud Infrastructure and AI Innovation
              </span>
              . My journey began with a Master’s from the University of Windsor,
              where I developed a deep fascination for scalable systems.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Today, I focus on building{" "}
              <span className="text-blue-400 italic">
                "AI Wrappers with Substance"
              </span>
              —applications like ShiftMatrix AI and ATS Intelligence that solve
              real-world operational bottlenecks. I don't just write code; I
              architect solutions that live and breathe on AWS.
            </p>

            <div className="pt-4 flex gap-4">
              <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-mono text-blue-400">
                // Persistent & Driven
              </div>
              <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-mono text-emerald-400">
                // Problem Solver
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cards/Stats */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 transition-colors group"
              >
                <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-1">
                  {item.text}
                </h4>
                <p className="text-slate-500 text-xs">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
