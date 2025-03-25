"use client"

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Page() {
  return (
    <motion.div
      className="relative max-w-3xl mx-auto flex flex-col gap-3"
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="text-white px-2 text-3xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 lg:text-4xl"
        variants={fadeInUp}
        custom={1}
      >
        Let's connect
      </motion.p>

      <motion.div
        className="flex flex-col gap-4 px-2 max-sm:px-4 max-w-2xl"
        variants={fadeInUp}
        custom={2}
      >
        <p className="text-[#94A3B8] tracking-tight text-base">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-6 px-2 max-sm:px-4 mt-3"
        variants={fadeInUp}
        custom={3}
      >
        <div className="flex items-center gap-4 group">
          <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
            <Mail className="text-white h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-lg">Email</p>
            <a 
              href="mailto:alhajikhaleel@gmail.com" 
              className="text-[#94A3B8] text-[14px] hover:text-white transition-colors"
            >
              alhajikhaleel@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
            <Linkedin className="text-white h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-lg">LinkedIn</p>
            <a 
              href="https://linkedin.com/in/khaleelalhaji" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#94A3B8] text-[14px] hover:text-white transition-colors"
            >
              linkedin.com/in/khaleelalhaji
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
            <Github className="text-white h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-lg">GitHub</p>
            <a 
              href="https://github.com/khaleelibraheem" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#94A3B8] text-[14px] hover:text-white transition-colors"
            >
              github.com/khaleelibraheem
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 group">
          <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
            <Instagram className="text-white h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-lg">Instagram</p>
            <a 
              href="https://www.instagram.com/khaleelalhaji" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#94A3B8] text-[14px] hover:text-white transition-colors"
            >
             instagram.com/khaleelalhaji
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}