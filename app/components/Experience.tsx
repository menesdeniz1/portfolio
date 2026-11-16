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
      "Built three production vision systems (fiber analysis, parquet defect inspection, panel geometry inspection) as the sole developer through their first production release: wrote all of the software, from camera acquisition and model training to backend services, databases and operator interfaces.",
      "Patented fiber analysis: vision software analyzing MDF fibers across three factories, reducing CAPEX by 88% versus the commercial alternative. Named inventor on the patent held by the employer. Basler camera acquisition, YOLO segmentation through ONNX Runtime, Siemens S7 PLC integration, PostgreSQL and Redis.",
      "Parquet defect inspection: a C++17/Qt 6 application with a five-stage acquisition, stitching and inference pipeline. In production on one line since June 2026, matching inspectors' pass/fail decisions on 99.83% of test products; rollout to 18 more lines planned.",
      "Panel geometry inspection: diagonal and squareness measurement to within 5 mm on 8 m panels using dual Basler cameras, OpenCV and PLC derived calibration. In production on one line.",
      "Truck load measurement: contributed to a system that fuses four SICK LiDAR streams with motion compensation for truck cargo volume estimation; in use at five sites.",
      "Management projected EUR 11.57M combined financial impact upon planned rollout of these four projects."
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
    date: 'Jul 2023 - Sep 2023',
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
