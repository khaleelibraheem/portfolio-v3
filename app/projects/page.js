"use client"

import ProjectCard from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const projects = [
  {
    title: "Foreign Exchange Web Application",
    description: "A fully functional front-end for a foreign exchange platform with QR scanning for transactions and dummy funding functionality.",
    tags: ["Next.js", "shadcn UI", "Tailwind CSS", "QR Scanning"],
    liveUrl: "https://abujabureaudechange.vercel.app",
    githubUrl: "https://github.com/khaleelibraheem",
    imageUrl: "/images/abujabureaudechange.png",
  },
  {
    title: "Essential Musik Website",
    description: "A modern, responsive website for a music label with an artist showcase carousel, integrated e-commerce store, and FAQ page.",
    tags: ["Next.js", "Tailwind CSS", "shadcn UI", "Framer Motion"],
    liveUrl: "https://essential-musik.vercel.app",
    githubUrl: "https://github.com/khaleelibraheem",
    imageUrl: "/images/essentialmusik.png",
  },
  {
    title: "Task Flow - Task Management Application",
    description: "A task management tool with priority-based sorting and user authentication for personalized task organization.",
    tags: ["Next.js", "React", "Tailwind CSS", "Authentication"],
    liveUrl: "https://taskkflow.vercel.app",
    githubUrl: "https://github.com/khaleelibraheem",
    imageUrl: "/images/taskflow.png",
  }
];

export default function page() {
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
        Featured projects
      </motion.p>

      <motion.div
        className="flex flex-col gap-4 px-2 max-sm:px-4 max-w-2xl"
        variants={fadeInUp}
        custom={2}
      >
        <p className="text-[#94A3B8] tracking-tight text-base">
          A collection of projects that showcase my skills, problem-solving approach, and attention to detail.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-10 px-2 max-sm:px-4 mt-6 mb-20"
        variants={fadeInUp}
        custom={3}
      >
      {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            imageUrl={project.imageUrl}
            stars={project.stars}
            downloads={project.downloads}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
