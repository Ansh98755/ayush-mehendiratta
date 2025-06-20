
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Furrvy App',
      description: 'Flutter-based mobile application launching soon with modern UI/UX and real-time features.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&h=300&fit=crop',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      status: 'Launching Soon',
      github: 'https://github.com/Ansh98755/furrvy_project.git'
    },
    {
      title: 'DoStartup Website',
      description: 'Next.js-based responsive business website featuring performance-optimized components.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS'],
      status: 'In Development',
      github: 'https://github.com/Ansh98755/dostartup.git',
      live: 'https://dostartup.vercel.app/'
    },
    {
      title: 'Sahayak',
      description: 'A cross-platform app for real-time hospital appointment and bed booking.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      technologies: ['Flutter', 'Firebase', 'Real-time Database'],
      status: 'Completed',
      github: 'https://github.com/Ansh98755/Sahayak.git'
    },
    {
      title: 'Coffee Ordering App',
      description: 'Mobile application for coffee ordering with intuitive UI and smooth user experience.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop',
      technologies: ['Flutter', 'Dart', 'UI/UX Design'],
      status: 'Completed',
      github: 'https://github.com/Ansh98755/coffee_ordering_app.git'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-red-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
