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
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-blue-100'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
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

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Mücahid Enes Deniz. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400">GitHub</a>
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
