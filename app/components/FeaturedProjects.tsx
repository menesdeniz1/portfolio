import React from 'react';
import SectionHeading from './SectionHeading';
// lucide-react removed in favor of raw SVGs

const PROJECTS = [
  {
    title: 'Gendarmerie Field Guide',
    description: 'An unofficial offline form and content-navigation prototype using React Native, Expo and schema validation. Includes local draft storage and PDF generation; intended for synthetic demonstration data, not operational use.',
    tech: ['React Native', 'Expo', 'Zod', 'Local Storage'],
    github: 'https://github.com/menesdeniz1/jebs-mobile',
    external: '#',
    align: 'right', // Text on right, image on left
  },
  {
    title: 'Graph Partitioning Experiments',
    description: 'Educational local-search, spectral-clustering and genetic approaches to graph partitioning, with deterministic tests and explicit limitations on balance and optimality.',
    tech: ['Python', 'NetworkX', 'SciPy', 'Algorithms'],
    github: 'https://github.com/menesdeniz1/graph-partitioning-problem',
    external: '#',
    align: 'left', // Text on left, image on right
  },
  {
    title: 'M&M Chocolate Detector',
    description: 'A university team project exploring YOLO-based M&M detection, threaded camera processing and serial/Bluetooth messages to an Arduino LCD receiver. Hardware throughput and sorting performance are not certified.',
    tech: ['Python', 'OpenCV', 'YOLO', 'Arduino'],
    github: 'https://github.com/menesdeniz1/capstone-project',
    external: '#',
    align: 'right',
  }
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-24 max-w-[1000px] mx-auto">
      <SectionHeading number="03" title="Some Things I've Built" />
      
      <div className="mt-12 space-y-24">
        {PROJECTS.map((project, idx) => {
          const isRightAligned = project.align === 'right';
          
          return (
            <div key={idx} className="relative grid grid-cols-12 items-center gap-2 md:gap-4">
              
              {/* Image Placeholder */}
              <div 
                className={`relative col-span-12 md:col-span-7 h-full min-h-[300px] md:min-h-[350px] rounded bg-[#64ffda] group z-10 
                ${isRightAligned ? 'md:col-start-1 md:col-end-8' : 'md:col-start-6 md:col-end-13'}`}
              >
                <a href={project.external} className="block w-full h-full relative z-10 mix-blend-multiply filter grayscale contrast-125 transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal bg-[#112240] rounded border border-[#233554] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#112240] to-[#233554] opacity-80" />
                  {/* Pseudo code icon to represent no image */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#233554] opacity-30 font-mono text-9xl font-bold">
                    {'</>'}
                  </div>
                </a>
              </div>

              {/* Text Content */}
              <div 
                className={`relative col-span-12 md:col-span-6 z-20 flex flex-col justify-center
                ${isRightAligned ? 'md:col-start-7 md:col-end-13 md:text-right md:items-end' : 'md:col-start-1 md:col-end-7 md:text-left md:items-start'}
                p-6 md:p-0 bg-[#112240] md:bg-transparent rounded md:rounded-none`}
              >
                <p className="font-mono text-[#64ffda] text-[13px] mb-2 font-normal">Featured Project</p>
                <h3 className="text-[#ccd6f6] text-[24px] md:text-[28px] font-semibold mb-6">
                  <a href={project.external} className="hover:text-[#64ffda] transition-colors">{project.title}</a>
                </h3>
                
                <div className={`bg-[#112240] text-[#a8b2d1] text-[15px] md:text-[18px] p-6 rounded shadow-xl mb-6 relative z-30
                  ${isRightAligned ? 'md:-ml-24' : 'md:-mr-24'}`}>
                  <p>{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap text-[#a8b2d1] font-mono text-[13px] mb-6 gap-x-5 gap-y-2 m-0 p-0 list-none z-30
                  ${isRightAligned ? 'justify-end' : 'justify-start'}`}>
                  {project.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
                
                <div className={`flex items-center gap-4 z-30
                  ${isRightAligned ? 'justify-end' : 'justify-start'}`}>
                  <a href={project.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
