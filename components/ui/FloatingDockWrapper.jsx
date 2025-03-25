// components/FloatingDockWrapper.js
"use client";

import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconExchange,
  IconHome,
  IconMail,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-300" />,
    href: "/",
  },
  {
    title: "About",
    icon: <IconTerminal2 className="h-full w-full text-neutral-300" />,
    href: "/about",
  },
  {
    title: "Projects",
    icon: <IconNewSection className="h-full w-full text-neutral-300" />,
    href: "/projects",
  },
  {
    title: "Experience",
    icon: <IconExchange className="h-full w-full text-neutral-300" />,
    href: "/experience",
  },
  {
    title: "Contact",
    icon: <IconMail className="h-full w-full text-neutral-300" />,
    href: "/contact",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
  },
};

export default function FloatingDockWrapper() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="flex items-center md:justify-center justify-end fixed bottom-10 left-0 right-0 w-full px-4 md:px-0"
    >
      <p className="text-gray-600 md:hidden font-mono tracking-tighter text-xs mr-1">
        navigate
      </p>
      <FloatingDock items={links} />
    </motion.div>
  );
}
