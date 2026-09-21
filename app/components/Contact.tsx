import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-[600px] mx-auto text-center flex flex-col justify-center items-center">
      <p className="font-mono text-[#64ffda] text-[16px] mb-4">04. What's Next?</p>
      <h2 className="text-[#ccd6f6] font-semibold text-4xl md:text-5xl mb-6">
        Get In Touch
      </h2>
      <p className="text-[#8892b0] text-[18px] leading-relaxed mb-12">
        Although I’m currently focused on building industrial automation pipelines, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a href="mailto:mucahidenesdeniz@gmail.com" className="btn-outline px-7 py-4 text-sm tracking-widest">
        Say Hello
      </a>
    </section>
  );
}
