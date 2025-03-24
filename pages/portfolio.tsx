import Link from 'next/link';
import { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: '5S Audit App',
      description: 'An auditing app for the Quality Systems team.',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'M&M Detector',
      description: 'An M&M sorting machine using image processing.',
      tech: ['Python', 'OpenCV', 'Microcontroller']
    },
    {
      title: 'Education App for Dyslexia',
      description: 'A mobile app to support children with dyslexia.',
      tech: ['React Native', 'Firebase']
    }
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'Python', 'SQL', 'Git', 'Image Processing'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-gray-800">Mücahid Enes Deniz</span>
            <div className="flex space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeSection === 'home' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-100'
              }`}>
                Home
              </Link>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeSection === 'about' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-100'
              }`}>
                About
              </Link>
              <Link href="/portfolio" className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeSection === 'portfolio' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-100'
              }`}>
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Mücahid Enes Deniz</h1>
          <p className="text-xl text-blue-100 mb-8">Software Engineer</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Download CV
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm a passionate Software Engineer with a strong background in building web and mobile applications.
            I love solving complex problems and constantly improving my skills.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
