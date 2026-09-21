import React from 'react';

export default function SectionHeading({ 
  number, 
  title 
}: { 
  number: string; 
  title: string 
}) {
  return (
    <div className="flex items-center relative my-10 md:my-16 w-full max-w-[700px] whitespace-nowrap">
      <h2 className="heading-slate flex items-center text-2xl md:text-3xl m-0">
        <span className="mono-text text-xl md:text-2xl font-normal mr-3 bottom-[-2px] relative">
          {number}.
        </span>
        {title}
      </h2>
      <div className="block content-[''] w-full md:w-[300px] lg:w-[100%] h-[1px] bg-[#233554] ml-6 relative top-[5px]"></div>
    </div>
  );
}
