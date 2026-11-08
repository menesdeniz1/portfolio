import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-center items-start min-h-[100vh] p-0 m-0 w-full max-w-[1000px]">
      <div className="mono-text mb-7 ml-1">
        Hi, my name is
      </div>
      
      <h1 className="text-[#ccd6f6] font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-2">
        Mücahid Enes Deniz.
      </h1>
      
      <h2 className="text-[#8892b0] font-semibold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8">
        I build robust systems for industry & web.
      </h2>
      
      <p className="max-w-[540px] text-[#8892b0] text-lg md:text-xl leading-relaxed mb-12">
        I’m a software engineer building industrial machine-vision systems in C++ and Python — from cameras, lenses and PLCs to model inference and operator UIs. My fiber analysis software runs at three plants and my parquet inspection pipeline runs on a live production line.
      </p>
      
      <a href="#work" className="btn-outline">
        Check out my work!
      </a>
    </section>
  );
}
