
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Furrvy',
      role: 'Flutter Developer',
      period: 'Ongoing',
      description: 'Working on a live app launching soon. Built using Flutter with modern architecture patterns and real-time features.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      current: true
    },
     {
      company: 'Indrav',
      role: 'Flutter Developer',
      period: 'Ongoing',
      description: 'Working on a live app launching soon. Build using Flutter it\'s the user\'s own app',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      current: true
    },
    {
      company: 'Young Thames (URE Legal Advocates)',
      role: 'Next.js Developer',
      period: 'Completed',
      description: 'Building doStartup - a modern business website using Next.js for a startup, featuring performance-optimized components and dynamic routing.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS'],
      current: false,
      link: 'https://dostartup.vercel.app/'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-red-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Currently working with innovative startups on real-world projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-red-500 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-red-500 font-medium">{exp.company}</h4>
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 text-sm">
                        View Project →
                      </a>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mt-2 md:mt-0">
                    <span className="text-gray-400">{exp.period}</span>
                    {exp.current && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-red-500/20 hover:text-red-400 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {index < experiences.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
