'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';

export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1] as const
      }
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col w-full"
    >
      <motion.div variants={itemVariants}>
        <Hero />
      </motion.div>
      <motion.div variants={itemVariants}>
        <About />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Experience />
      </motion.div>
      <motion.div variants={itemVariants}>
        <FeaturedProjects />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Contact />
      </motion.div>
      
      <div className="text-center font-mono text-[12px] text-[#8892b0] py-6">
        <a href="https://github.com/bchiang7/v4" target="_blank" rel="noreferrer" className="hover:text-[#64ffda]">
          Designed by Brittany Chiang (v4 aesthetic)<br/>
          Adapted by Antigravity
        </a>
      </div>
    </motion.div>
  );
}
