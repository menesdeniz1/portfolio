'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';
import SectionHeading from './SectionHeading';

interface Job {
  id: string;
  company: string;
  title: string;
  date: string;
  url: string;
  points: string[];
}

const JOBS: readonly Job[] = [
  {
    id: 'kastamonu',
    company: 'Kastamonu Entegre',
    title: 'Software Engineer',
    date: 'Jul 2025 - Present',
    url: 'https://www.keas.com.tr',
    points: [
      "Developed software for camera-based industrial quality inspection and supported installations across factory sites.",
      "Worked on inspection algorithms, camera configuration and software integration with PLC communication provided by the electrical team.",
      "Managed AI Line Inspection with YOLOv11 and high-speed image stitching with Basler cameras.",
      "Implemented Dimensional Control with OpenCV and Weighbridge 3D scanning with SICK LiDAR for volume estimation."
    ]
  },
  {
    id: 'talentree',
    company: 'TalenTree',
    title: 'Intern',
    date: 'Jul 2024 - Jun 2025',
    url: 'https://talentree.com.tr',
    points: [
      "Contributed to the design, implementation, deployment, and maintenance of industrial AI, automation, and computer vision systems.",
      "Served as Scrum Master in a Sustainable Supplier Selection project utilizing Agile methodologies."
    ]
  },
  {
    id: 'harpeon',
    company: 'Harpeon',
    title: 'Intern',
    date: 'Jun 2023 - Aug 2023',
    url: 'https://harpeon.com',
    points: [
      "Developed a Weather app with external API integrations.",
      "Prototyped an office-reservation UI using React Native and Expo."
    ]
  }
];

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState<string>(JOBS[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = JOBS.findIndex((job) => job.id === activeTabId);
  const activeJob = JOBS[activeIndex] ?? JOBS[0];

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % JOBS.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + JOBS.length) % JOBS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = JOBS.length - 1;
    }

    if (nextIndex !== index) {
      const nextJob = JOBS[nextIndex];
      if (nextJob) {
        setActiveTabId(nextJob.id);
        tabRefs.current[nextIndex]?.focus();
      }
    }
  };

  return (
    <section id="experience" className="py-24 max-w-[700px] mx-auto scroll-mt-24">
      <SectionHeading number="02" title="Where I've Worked" />
      
      <div className="flex flex-col md:flex-row mt-8">
        {/* Tabs List */}
        <div 
          role="tablist" 
          aria-label="Job experience tabs"
          className="flex overflow-x-auto md:overflow-visible md:flex-col relative z-10 w-full md:w-max mb-8 md:mb-0"
        >
          {JOBS.map((job, idx) => {
            const isActive = activeTabId === job.id;
            return (
              <button
                key={job.id}
                ref={(el) => { tabRefs.current[idx] = el; }}
                id={`job-tab-${job.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`job-panel-${job.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTabId(job.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`flex items-center w-full md:w-full min-h-[44px] px-5 border-b-2 md:border-b-0 md:border-l-2 bg-transparent text-left font-mono text-[13px] whitespace-nowrap transition-all duration-200 hover:bg-[#112240] hover:text-[#64ffda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#64ffda] ${
                  isActive ? 'border-[#64ffda] text-[#64ffda] bg-[#112240]/40' : 'border-[#233554] text-[#8892b0]'
                }`}
              >
                {job.company}
              </button>
            );
          })}
        </div>

        {/* Tab Panel */}
        <div 
          role="tabpanel"
          id={`job-panel-${activeJob.id}`}
          aria-labelledby={`job-tab-${activeJob.id}`}
          tabIndex={0}
          className="w-full md:ml-8 min-h-[320px] focus:outline-none"
        >
          <h3 className="text-[#ccd6f6] text-[22px] font-medium leading-tight mb-2">
            <span>{activeJob.title}</span>
            <span className="text-[#64ffda]">
              &nbsp;@&nbsp;
              <a 
                href={activeJob.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#64ffda] after:transition-all after:duration-300"
              >
                {activeJob.company}
              </a>
            </span>
          </h3>
          <p className="font-mono text-[13px] text-[#a8b2d1] mb-6">
            {activeJob.date}
          </p>
          
          <ul className="m-0 p-0 list-none text-[18px]">
            {activeJob.points.map((point, idx) => (
              <li key={idx} className="relative pl-7 mb-3 text-[#8892b0] before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-[14px] before:leading-[22px]">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
