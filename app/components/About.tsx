import React from 'react';
import SectionHeading from './SectionHeading';

export default function About() {
  const skills = ['Python', 'C++', 'C#', 'OpenCV', 'YOLO', 'Siemens S7 PLC'];

  return (
    <section id="about" className="py-24 max-w-[900px] mx-auto">
      <SectionHeading number="01" title="About Me" />
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-10">
        <div className="md:col-span-3 text-[#8892b0] text-[18px] leading-relaxed space-y-4">
          <p>
            Hello! My name is Mücahid Enes Deniz and I enjoy creating things that live on the internet and in the physical world. My interest in software engineering started back in high school and evolved into building robust production systems in computer vision and industrial automation.
          </p>
          <p>
            I have worked at <span className="text-[#64ffda]">Kastamonu Entegre</span> on camera-based quality inspection and software integration for manufacturing environments. My interests include computer vision, backend development and automation.
          </p>
          <p>
            I also recently graduated from <span className="text-[#64ffda]">Bahçeşehir University</span> with a B.Sc. in Computer Engineering on a full scholarship.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 font-mono text-[13px] text-[#8892b0] mt-5 m-0 p-0 list-none">
            {skills.map((skill, i) => (
              <li key={i} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px]">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:col-span-2 relative max-w-[300px] w-full mx-auto md:mx-0">
          <div className="relative rounded bg-[#64ffda] group transition-all duration-300">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#64ffda] rounded z-0 transition-all duration-300 group-hover:top-3 group-hover:left-3"></div>
            <div className="relative z-10 mix-blend-multiply filter grayscale contrast-125 transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal bg-[#112240] rounded overflow-hidden aspect-square flex items-center justify-center">
               <div className="text-[#64ffda] font-mono text-[100px] opacity-20 group-hover:opacity-10 transition-opacity">
                 M
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
