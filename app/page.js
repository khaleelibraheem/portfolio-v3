"use client";

import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const dotPatternVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2 },
  },
};

export default function page() {
  return (
    <motion.div
      className="relative flex flex-col gap-3 border-zinc-700 rounded-md border-dashed min-h-[450px]"
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={dotPatternVariants}>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </motion.div>

      <motion.h1
        className="text-white px-1 text-5xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 md:text-7xl lg:text-8xl"
        variants={fadeInUp}
        custom={0}
      >
        Khaleel Alhaji
      </motion.h1>

      <motion.p
        className="text-white px-2 text-xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 lg:text-2xl xl:text-3xl"
        variants={fadeInUp}
        custom={1}
      >
        Front End Engineer
      </motion.p>

      <motion.p
        className="text-[#94A3B8] tracking-tight px-2 max-sm:px-4 text-md"
        variants={fadeInUp}
        custom={2}
      >
        I build technical products with creative, <br /> unconventional design.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        custom={3}
        className="flex space-x-4 mt-2 max-sm:px-4 px-2"
      >
        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border-2 border-white/20 
               text-white rounded-xl bg-transparent 
               hover:border-white/50 hover:bg-white/10 
               transition-all duration-200"
          >
            <span className="font-medium tracking-tight">View Resume</span>
            <ExternalLink className="h-4 w-4 text-white/60" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
