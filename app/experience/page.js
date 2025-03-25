"use client"

import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";

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
      className="relative max-w-3xl mx-auto flex flex-col gap-3 mb-20"
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="text-white px-2 text-3xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 lg:text-4xl"
        variants={fadeInUp}
        custom={1}
      >
        My professional journey
      </motion.p>

      <motion.div
        className="flex flex-col gap-4 px-2 max-sm:px-4 max-w-2xl"
        variants={fadeInUp}
        custom={2}
      >
        <p className="text-[#94A3B8] tracking-tight text-base">
          A timeline of my career and education showcasing growth, achievements, and the skills I&apos;ve developed along the way.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-8 px-2 max-sm:px-4 mt-6"
        variants={fadeInUp}
        custom={3}
      >
        {/* Work Experience Section */}
        <div className="relative pl-8 border-l border-white/10">
          <div className="absolute -left-3 mt-1.5">
            <div className="bg-white/10 p-1.5 rounded-full backdrop-blur-md">
              <Briefcase className="text-white h-4 w-4" />
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <p className="text-white text-lg sm:text-xl">Freelance Frontend Web Developer</p>
              <p className="text-[#94A3B8] text-xs sm:text-sm bg-white/5 px-2 py-0.5 rounded-full">2022 - Present</p>
            </div>
            <p className="text-white/80 text-sm mb-1">Self-employed</p>
            <p className="text-[#94A3B8] text-sm sm:text-md">
              Designed and developed custom websites for clients in music, e-commerce, and tech, specializing in minimalist, high-performance UI/UX designs.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <p className="text-white text-lg sm:text-xl">HTML & CSS Mastery Instructor</p>
              <p className="text-[#94A3B8] text-xs sm:text-sm bg-white/5 px-2 py-0.5 rounded-full">Sep - Dec 2024</p>
            </div>
            <p className="text-white/80 text-sm mb-1">Tech Together</p>
            <p className="text-[#94A3B8] text-sm sm:text-md">
              Led a structured 3-month training program, teaching fundamental and advanced web development techniques, and guided students in building real-world projects.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="relative pl-8 border-l border-white/10">
          <div className="absolute -left-3 mt-1.5">
            <div className="bg-white/10 p-1.5 rounded-full backdrop-blur-md">
              <GraduationCap className="text-white h-4 w-4" />
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <p className="text-white text-lg sm:text-xl">B.Tech, Computer Science</p>
              <p className="text-[#94A3B8] text-xs sm:text-sm bg-white/5 px-2 py-0.5 rounded-full">2022 - Ongoing</p>
            </div>
            <p className="text-white/80 text-sm mb-1">Rabindranath Tagore University</p>
            <p className="text-[#94A3B8] text-sm sm:text-md">
              Relevant coursework: Database Management Systems, Web Development, Data Structures & Algorithms.
            </p>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="relative pl-8 border-l border-white/10">
          <div className="absolute -left-3 mt-1.5">
            <div className="bg-white/10 p-1.5 rounded-full backdrop-blur-md">
              <Award className="text-white h-4 w-4" />
            </div>
          </div>
          
          <div>
            <p className="text-white text-lg sm:text-xl mb-3">Skills & Technologies</p>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "React", "Next.js", "Tailwind CSS", "shadcn UI", "Framer Motion", "Magic UI", "Node.js", "Git", "Vercel"].map((skill) => (
                <span key={skill} className="text-white/80 text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
