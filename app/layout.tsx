import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
// lucide-react removed in favor of raw SVGs
import PageTransition from './components/PageTransition';

const inter = Inter({ subsets: ['latin'], variable: '--font-family-sans' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-family-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://menesdeniz.com'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Mücahid Enes Deniz',
    template: '%s | Mücahid Enes Deniz'
  },
  description: 'Software Engineer specializing in computer vision, industrial automation, and machine learning.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceMono.variable}`}>
      <body className="antialiased bg-[#0a192f] text-[#8892b0] min-h-screen selection:bg-[#233554] selection:text-[#ccd6f6]">
        
        {/* Header / Navbar */}
        <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a192f]/85 shadow-sm shadow-[#0a192f]">
          <nav className="flex justify-between items-center w-full px-6 md:px-12 h-24">
            <div className="text-[#64ffda] font-mono text-xl font-bold tracking-tighter">
              <a href="/">M</a>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <ol className="flex justify-between items-center gap-8 m-0 p-0 list-none font-mono text-[13px]">
                <li><a href="#about" className="nav-link"><span className="text-[#64ffda] mr-1">01.</span>About</a></li>
                <li><a href="#experience" className="nav-link"><span className="text-[#64ffda] mr-1">02.</span>Experience</a></li>
                <li><a href="#work" className="nav-link"><span className="text-[#64ffda] mr-1">03.</span>Work</a></li>
                <li><a href="#contact" className="nav-link"><span className="text-[#64ffda] mr-1">04.</span>Contact</a></li>
              </ol>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline ml-4">
                Resume
              </a>
            </div>
          </nav>
        </header>

        {/* Left Sidebar (Socials) */}
        <div className="hidden md:block side-element left-10">
          <ul className="flex flex-col items-center gap-5 m-0 p-0 list-none mb-6">
            <li>
              <a href="https://github.com/menesdeniz1" aria-label="GitHub" target="_blank" rel="noreferrer" className="hover:text-[#64ffda]">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/menesdeniz1" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="hover:text-[#64ffda]">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Right Sidebar (Email) */}
        <div className="hidden md:block side-element right-10">
          <div className="flex flex-col items-center m-0 p-0 mb-6">
            <a href="mailto:mucahidenesdeniz@gmail.com" className="font-mono text-[12px] tracking-[0.1em] hover:text-[#64ffda] transform hover:-translate-y-1 transition-all" style={{ writingMode: 'vertical-rl' }}>
              mucahidenesdeniz@gmail.com
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-between min-h-screen">
          <main className="mx-auto w-full max-w-[1600px] px-6 sm:px-12 md:px-24 lg:px-[150px] pt-24 pb-0">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
