'use client';

import React, { useState } from 'react';
import SectionHeading from './SectionHeading';

const JOBS = [
  {
    id: 'kastamonu',
    company: 'Kastamonu Entegre',
    title: 'Software Engineer',
    date: 'Jul 2025 - Present',
    url: '#',
    points: [
      "Patented fiber analysis system: C++/Python machine vision for MDF fibers, running at three plants; management estimates 88% lower CAPEX than the commercial alternative. Migrated it from C++17/Qt 6 to a Dockerized Python stack (ONNX Runtime YOLO segmentation, OpenCV, PostgreSQL, Redis) with PLC-driven lens automation and autofocus.",
      "Parquet defect inspection: a C++17/Qt 6 five-stage pipeline with Basler line-scan acquisition, image stitching and YOLO inference via ONNX Runtime/OpenVINO, bounded queues and OPC UA reject signals, running on a live production line.",
      "Panel geometry inspection (team of three): led production hardening of an MDF squareness system with OpenCV, Basler and Siemens S7 — fail-closed PLC-derived calibration, watchdog, rollback packaging and characterization tests.",
      "Truck load measurement: fused four SICK LiDAR streams with motion compensation for cargo volume estimation, with Flask/PostgreSQL dashboards and weighbridge integration.",
      "Management projected EUR 11.57M combined impact upon planned rollout of these four projects."
    ]
  },
  {
    id: 'talentree',
    company: 'Kastamonu Entegre · TalenTree',
    title: 'Long Term Intern',
    date: 'Jul 2024 - Jun 2025',
    url: '#',
    points: [
      "TalenTree long-term internship at Kastamonu Entegre (Hayat Holding).",
      "Supported industrial AI software development and deployment.",
      "Served as Scrum Master on a Sustainable Supplier Selection project."
    ]
  },
  {
    id: 'harpeon',
    company: 'Harpeon',
    title: 'Mobile Application Development Intern',
    date: 'Jun 2023 - Aug 2023',
    url: '#',
    points: [
      "Built an API-integrated weather app.",
      "Prototyped an office-reservation UI using React Native and Expo."
    ]
  }
];

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState(JOBS[0].id);

  const activeJob = JOBS.find((job) => job.id === activeTabId) || JOBS[0];

  return (
    <section id="experience" className="py-24 max-w-[700px] mx-auto">
      <SectionHeading number="02" title="Where I've Worked" />
      
      <div className="flex flex-col md:flex-row mt-8">
        {/* Tabs List */}
        <div className="flex overflow-x-auto md:overflow-visible md:flex-col relative z-10 w-full md:w-max mb-8 md:mb-0">
          {JOBS.map((job) => {
            const isActive = activeTabId === job.id;
            return (
              <button
                key={job.id}
                onClick={() => setActiveTabId(job.id)}
                className={`flex items-center w-full md:w-full h-10 px-5 border-b-2 md:border-b-0 md:border-l-2 bg-transparent text-left font-mono text-[13px] whitespace-nowrap transition-all duration-200 hover:bg-[#112240] hover:text-[#64ffda] outline-none ${
                  isActive ? 'border-[#64ffda] text-[#64ffda]' : 'border-[#233554] text-[#8892b0]'
                }`}
              >
                {job.company}
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        <div className="w-full md:ml-8 min-h-[320px]">
          <h3 className="text-[#ccd6f6] text-[22px] font-medium leading-tight mb-2">
            <span>{activeJob.title}</span>
            <span className="text-[#64ffda]">
              &nbsp;@&nbsp;
              <a href={activeJob.url} className="inline-block relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#64ffda] after:transition-all after:duration-300">
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
