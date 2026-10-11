'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
      hasScrolled ? 'bg-[#0a192f]/90 shadow-lg shadow-[#0a192f]/50 h-20' : 'bg-[#0a192f]/80 h-24'
    }`}>
      <nav className="flex justify-between items-center w-full px-6 md:px-12 h-full max-w-[1600px] mx-auto">
        {/* Brand Logo */}
        <div className="text-[#64ffda] font-mono text-xl font-bold tracking-tighter">
          <a 
            href="/" 
            aria-label="Mücahid Enes Deniz - Home"
            className="flex items-center justify-center w-11 h-11 border-2 border-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#64ffda]"
          >
            M
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ol className="flex justify-between items-center gap-8 m-0 p-0 list-none font-mono text-[13px]">
            <li><a href="#about" className="nav-link"><span className="text-[#64ffda] mr-1">01.</span>About</a></li>
            <li><a href="#experience" className="nav-link"><span className="text-[#64ffda] mr-1">02.</span>Experience</a></li>
            <li><a href="#work" className="nav-link"><span className="text-[#64ffda] mr-1">03.</span>Work</a></li>
            <li><a href="#contact" className="nav-link"><span className="text-[#64ffda] mr-1">04.</span>Contact</a></li>
          </ol>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline ml-4"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 relative z-50 text-[#64ffda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#64ffda] rounded"
        >
          <span className={`block w-6 h-[2px] bg-[#64ffda] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : 'mb-1.5'}`} />
          <span className={`block w-6 h-[2px] bg-[#64ffda] transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1.5'}`} />
          <span className={`block w-6 h-[2px] bg-[#64ffda] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#0a192f]/70 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 bottom-0 w-[min(75vw,350px)] h-screen bg-[#112240] shadow-2xl z-40 flex flex-col justify-center items-center p-8 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none invisible'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="w-full text-center">
          <ol className="flex flex-col gap-6 m-0 p-0 list-none font-mono text-[16px] mb-8">
            <li>
              <a href="#about" onClick={closeMenu} className="block py-2 text-[#ccd6f6] hover:text-[#64ffda]">
                <span className="block text-[#64ffda] text-[13px] mb-1">01.</span>About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu} className="block py-2 text-[#ccd6f6] hover:text-[#64ffda]">
                <span className="block text-[#64ffda] text-[13px] mb-1">02.</span>Experience
              </a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu} className="block py-2 text-[#ccd6f6] hover:text-[#64ffda]">
                <span className="block text-[#64ffda] text-[13px] mb-1">03.</span>Work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu} className="block py-2 text-[#ccd6f6] hover:text-[#64ffda]">
                <span className="block text-[#64ffda] text-[13px] mb-1">04.</span>Contact
              </a>
            </li>
          </ol>

          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={closeMenu}
            className="btn-outline inline-block px-8 py-3 text-sm mb-12"
          >
            Resume
          </a>

          {/* Mobile Social Links & Email */}
          <div className="flex items-center justify-center gap-6 pt-6 border-t border-[#233554] text-[#a8b2d1]">
            <a 
              href="https://github.com/menesdeniz1" 
              aria-label="GitHub Profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:text-[#64ffda] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a 
              href="https://linkedin.com/in/menesdeniz1" 
              aria-label="LinkedIn Profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:text-[#64ffda] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a 
              href="mailto:mucahidenesdeniz@gmail.com" 
              aria-label="Email Mücahid Enes Deniz" 
              className="p-2 hover:text-[#64ffda] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
