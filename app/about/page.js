"use client";

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

export default function AboutPage() {
  return (
    <motion.div
      className="relative max-w-3xl mx-auto flex flex-col gap-3"
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="text-white px-2 text-3xl lg:text-4xl tracking-tight max-lg:font-medium max-sm:px-4"
        variants={fadeInUp}
        custom={1}
      >
        Passionate about clean code & elegant design
      </motion.p>

      <motion.div
        className="flex flex-col gap-4 px-2 max-sm:px-4 max-w-2xl"
        variants={fadeInUp}
        custom={2}
      >
        <p className="text-[#94A3B8] text-base tracking-tight">
          I&apos;m a front-end engineer dedicated to creating intuitive and
          accessible digital experiences that seamlessly blend aesthetics with
          functionality. My approach combines technical expertise with a
          designer&apos;s eye for detail.
        </p>

        <p className="text-[#94A3B8] text-base tracking-tight">
          When I&apos;m not coding, you can find me exploring new design trends,
          contributing to open-source projects, and continuously learning about
          emerging web technologies.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-3 px-2 max-sm:px-4 mt-4"
        variants={fadeInUp}
        custom={3}
      >
        <p className="text-white text-lg sm:text-xl md:text-2xl tracking-tight">
          What I value:
        </p>
        <ul className="list-none space-y-2 text-[#94A3B8] text-base tracking-tight">
          <li>• Accessible, inclusive design for all users</li>
          <li>• Performant code that prioritizes user experience</li>
          <li>• Clean, maintainable architecture</li>
          <li>• Thoughtful UI/UX that solves real problems</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
