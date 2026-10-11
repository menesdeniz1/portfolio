import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Contact />
      
      <footer className="text-center font-mono text-[12px] text-[#8892b0] py-8">
        <a 
          href="https://github.com/bchiang7/v4" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#64ffda] transition-colors"
        >
          Designed by Brittany Chiang · Built by Mücahid Enes Deniz
        </a>
      </footer>
    </div>
  );
}
