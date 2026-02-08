import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "AI ATS Intelligence",
    tag: "AI & LLMs",
    description:
      "Built a sophisticated AI wrapper designed to bridge the gap between recruiters and candidates. The system parses PDF resumes, extracts key entities using LLMs, and scores them against job descriptions with 95% accuracy.",
    features: ["LLM Integration", "PDF Parsing", "Score Visualization"],
    tech: ["React", "Python", "OpenAI API", "Tailwind"],
    image: "/ATS_Dashboard.png",
    githubLink: "https://github.com/mansoor00727/ai-ats-scanner",
    demoLink: null,
  },
  {
    title: "ShiftMatrix AI: Enterprise Workforce Optimization Engine",
    tag: "Predictive Analytics",
    description:
      "Developed a sophisticated resource management tool that leverages predictive modeling to forecast staffing needs. The system optimizes shift distribution by analyzing historical workload data, reducing operational overhead by 20%.",
    features: [
      "Demand Forecasting",
      "Shift Optimization",
      "Data Visualization",
    ],
    tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    image: "/ShiftMatrix_Dashboard.png",
    githubLink: "https://github.com/mansoor00727/AI-Workforce-Optimizer",
    demoLink: "https://bit.ly/ShiftMatrixAI",
  },
];

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold mb-16 border-l-4 border-blue-500 pl-4 text-white">
        Featured Work
      </h2>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-12 items-center`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              {/* Trigger modal on click */}
              <div
                className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 cursor-zoom-in"
                onClick={() => setSelectedImg(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-sm">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  {project.tag}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {project.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-slate-800 text-slate-400 rounded border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 pt-6">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-bold"
                >
                  <Github size={20} /> View Code
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors font-bold"
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal logic stays outside the loop */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-slate-800"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
