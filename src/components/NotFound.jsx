import React from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <div className="flex justify-center mb-6 text-yellow-500">
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <AlertTriangle size={80} strokeWidth={1.5} />
          </motion.div>
        </div>

        <h1 className="text-9xl font-black text-white tracking-tighter mb-4 relative">
          404
          <span className="absolute top-0 left-0 w-full h-full text-blue-500 opacity-50 animate-pulse -z-10 translate-x-1">
            404
          </span>
          <span className="absolute top-0 left-0 w-full h-full text-red-500 opacity-50 animate-pulse -z-10 -translate-x-1">
            404
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-6 uppercase tracking-widest">
          Route Not Found in Cloud
        </h2>

        <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
          It seems the endpoint you're looking for has been decommissioned or
          moved to a different availability zone.
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold shadow-xl transition-all hover:bg-blue-400 hover:text-white"
        >
          <Home size={20} />
          Return to Reality
        </motion.a>
      </motion.div>

      {/* Floating Code Fragments */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 text-blue-500/20 font-mono text-sm hidden md:block"
      >
        {"Error: 0x404_NULL_POINTER"}
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-40 left-20 text-emerald-500/20 font-mono text-sm hidden md:block"
      >
        {"AWS_GATEWAY_TIMEOUT"}
      </motion.div>
    </div>
  );
};

export default NotFound;
