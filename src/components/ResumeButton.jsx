import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const ResumeButton = () => {
  return (
    <motion.a
      href="/Zuhaib_Mansoor_Resume.pdf" // Ensure your resume is in the 'public' folder
      download
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-full shadow-2xl shadow-blue-500/20 font-bold transition-colors group"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
        Download Resume
      </span>
      <FileDown size={24} />
    </motion.a>
  );
};

export default ResumeButton;
