import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import confetti from "canvas-confetti";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohammadzuhaib-mansoor-b831a3218",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/mansoor00727",
      color: "hover:bg-slate-700",
    },
    {
      icon: <Mail size={20} />,
      label: "Direct Message",
      href: "#contact-form",
      color: "hover:bg-emerald-600",
      isScroll: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://cgrq6q4tcf.execute-api.ca-central-1.amazonaws.com/default/email_handler",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        setStatus("success");
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#60a5fa", "#34d399", "#ffffff"],
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-800">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-slate-400 mb-12">
          Currently seeking my first tech role in Canada. Reach out via my
          socials or drop a message below.
        </p>

        {/* INTERACTIVE HUB - HORIZONTAL POP */}
        <div
          className="relative inline-flex items-center mb-24"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 flex items-center gap-3 relative z-20"
          >
            <MessageSquare size={22} />
            Connect With Me
          </motion.button>

          <AnimatePresence>
            {isHovered && (
              <div className="absolute left-full ml-4 flex items-center gap-4 z-10">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target={link.isScroll ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: idx * 0.08,
                    }}
                    className={`p-4 rounded-full bg-slate-800 border border-slate-700 text-white shadow-xl transition-colors ${link.color} flex items-center justify-center group relative`}
                  >
                    {link.icon}
                    {/* Tooltip for the label */}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-700 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* FORM ANCHOR */}
        <div id="contact-form" className="scroll-mt-32">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/50"
              >
                <h3 className="text-2xl font-bold text-emerald-400 mb-2 text-center">
                  Message Received!
                </h3>
                <p className="text-slate-300 text-center">
                  I'll get back to you soon at your provided email.
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-emerald-400 underline underline-offset-4"
                  >
                    Send another?
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-4 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all text-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all text-white"
                  />
                </div>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all text-white"
                ></textarea>

                <button
                  disabled={status === "sending"}
                  className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-blue-400 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === "sending"
                    ? "Deploying Message..."
                    : "Send Message"}
                  <Send size={18} />
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center flex items-center justify-center gap-2">
                    <AlertCircle size={16} /> Something went wrong. Please try
                    again.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
