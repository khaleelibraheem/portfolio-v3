import React from "react";
import { ExternalLink, Github, Star, Download } from "lucide-react";
import { motion } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  liveUrl, 
  githubUrl, 
  imageUrl,
  stars,
  downloads
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="w-full"
    >
      <div className="flex flex-col sm:flex-row space-y-2 gap-4 rounded-md cursor-pointer">
        <div className="relative">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-[190px] h-[80px] object-cover border-2 border-neutral-400 rounded-sm"
            />
          </a>
        </div>
        
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between items-start">
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <h3 className="text-white sm:text-xl font-medium">{title}</h3>
              <ExternalLink className="h-4 w-4 text-white/70" />
            </a>
          </div>
          
          <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-white/80 text-xs px-3 py-1 bg-white/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {(stars || downloads) && (
            <div className="flex items-center gap-4 mt-2">
              {stars && (
                <div className="flex items-center gap-1 text-white/70">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">{stars}</span>
                </div>
              )}
              {downloads && (
                <div className="flex items-center gap-1 text-white/70">
                  <Download className="h-4 w-4" />
                  <span className="text-sm">{downloads}+ Installs</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;