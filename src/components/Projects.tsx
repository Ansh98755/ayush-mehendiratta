import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Flame,
  Globe,
  LayoutDashboard,
  Monitor,
  Terminal,
  Wand2,
  Cpu,
  BarChart,
  Activity,
  BookOpen,
  PieChart,
  LineChart,
  FlaskConical,
  FileText,
  NotebookPen,
  Layers,
  Code,
  Cloud,
  Database
} from 'lucide-react';

const Projects = () => {
  const [expandedTools, setExpandedTools] = useState({});

  const techIcons = {
    Flutter: Wand2,
    Dart: Terminal,
    Firebase: Flame,
    'REST APIs': Globe,
    'Next.js': LayoutDashboard,
    React: Monitor,
    TypeScript: Code,
    'Tailwind CSS': Layers,
    AWS: Cloud,
    Kotlin: Terminal,
    'Real-time Database': Database,
    'Jetpack-Compose': LayoutDashboard,
    'UI/UX Design': LayoutDashboard,
    Python: Cpu,
    RestAPI: Globe,
    Streamlit: Monitor
  };

  const toolIcons = {
    Matplotlib: BarChart,
    Numpy: Activity,
    pandas: BookOpen,
    yfinance: PieChart,
    'Visualization Libraries': BarChart,
    seaborn: LineChart,
    streamlit: Monitor,
    'Web Scraping': Globe,
    beautifulsoup4: FlaskConical,
    lxml: FileText,
    'Data Export & File Handling': FileText,
    openpyxl: NotebookPen
  };

  const renderIcon = (name, iconMap) => {
    const IconComponent = iconMap[name];
    return IconComponent ? <IconComponent size={14} className="mr-1" /> : null;
  };

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
      description: 'Android app for real-time hospital appointment and bed booking.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      technologies: ['Kotlin', 'Firebase', 'Real-time Database', 'Jetpack-Compose'],
      status: 'Completed',
      github: 'https://github.com/Ansh98755/Sahayak.git'
    },
    {
      title: 'Coffee Ordering App',
      description: 'Mobile application for coffee ordering with intuitive UI and smooth user experience.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop',
      technologies: ['Flutter', 'Dart', 'UI/UX Design','RestAPI', 'AWS', 'Node.js', 'Express.js'],
      status: 'Completed',
      github: 'https://github.com/Ansh98755/coffee_ordering_app.git'
    },
    {
      title: 'Notification App',
      description: 'Dummy Notification and Calling app for realtime push notifcation and dummy calling.',
      image: 'https://plus.unsplash.com/premium_photo-1718648398342-ebf4c2a8bf9a?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Flutter', 'Dart', 'UI/UX Design','RestAPI', 'AWS', 'Node.js', 'Express.js'],
      status: 'Completed',
      github: 'https://github.com/Ansh98755/WhatsApp_Clone.git'
    },
    {
      title: 'Smart Advisor Tool',
      description: 'Tool to show recomendation of the funds according to the user choice like investment amount, volatility, beta, VaR etc.',
      image: 'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Python', 'RestAPI', 'Streamlit'],
      tools: ['Matplotlib', 'Numpy', 'pandas', 'numpy', 'yfinance', 'Visualization Libraries', 'matplotlib', 'seaborn', 'streamlit', 'Web Scraping', 'beautifulsoup4', 'lxml', 'Data Export & File Handling', 'openpyxl'],
      status: 'Completed',
      github: 'https://github.com/Ansh98755/smart_advisor_tool.git'
    },
    {
      title: 'Smart Fund Advisor AI App',
      description: 'App for showing the funds recomendations according to the user preferences, make predictions according to the set parameters as well as using the ai provided data dynamically .',
      image: 'https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Flutter', 'Dart', 'UI/UX Design', 'RestAPI', 'AWS', 'Node.js', 'Express.js'],
      status: 'Completed',
      github: 'https://github.com/Ansh98755/smart_fund_advisor_app.git'
    },
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
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm flex items-center"
                    >
                      {renderIcon(tech, techIcons)}
                      {tech}
                    </span>
                  ))}
                </div>

                {project.tools && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {(expandedTools[index] ? project.tools : project.tools.slice(0, 5)).map((tool) => (
                        <span
                          key={tool}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm flex items-center"
                        >
                          {renderIcon(tool, toolIcons)}
                          {tool}
                        </span>
                      ))}
                    </div>
                    {project.tools.length > 5 && (
                      <button
                        onClick={() =>
                          setExpandedTools((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                          }))
                        }
                        className="mt-2 text-sm text-blue-400 hover:underline focus:outline-none"
                      >
                        {expandedTools[index] ? 'View Less' : 'View More'}
                      </button>
                    )}
                  </div>
                )}

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