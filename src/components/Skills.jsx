import React from "react";
import { motion } from "framer-motion";
import { Cloud, Database, Code2, Terminal, Cpu, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="text-blue-400" />,
    skills: [
      "AWS (Lambda, S3, EC2)",
      "API Gateway",
      "Kinesis",
      "Serverless Architecture",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <Cpu className="text-emerald-400" />,
    skills: ["Python", "LLM Integration", "Predictive Modeling", "TensorFlow"],
  },
  {
    title: "Frontend & Tools",
    icon: <Code2 className="text-purple-400" />,
    skills: ["React 19", "Tailwind CSS", "Vite", "Git/GitHub"],
  },
  {
    title: "Core Engineering",
    icon: <Terminal className="text-orange-400" />,
    skills: ["SQL", "Data Pipelines", "Fiber Optics", "Network Protocols"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-purple-500 pl-4">
          Skills Matrix
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700 hover:border-purple-500/50 transition-all backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="font-bold text-slate-100">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-sm text-slate-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
