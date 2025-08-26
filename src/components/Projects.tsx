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
import { Link } from 'react-router-dom';

// Type Definitions
export type DemoMedia = { type: 'image' | 'video'; url: string };
export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: string;
  github: string;
  live?: string;
  demoMedia?: DemoMedia[];
  tools?: string[];
};

const techIcons: Record<string, React.ElementType> = {
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

const toolIcons: Record<string, React.ElementType> = {
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

const renderIcon = (name: string, iconMap: Record<string, React.ElementType>) => {
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent size={14} className="mr-1" /> : null;
};

export const projects: Project[] = [
  {
    title: 'Furrvy App',
    description: 'Flutter-based mobile application launching soon with modern UI/UX and real-time features.',
    image: '/images/furrvy-9.webp',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    status: 'Launching Soon',
    github: 'https://github.com/Ansh98755/furrvy-project.git',
   demoMedia: [
  { type: 'video', url: '/images/furrvy-1.mp4' },
  { type: 'image', url: '/images/furrvy-9.webp' },
  { type: 'image', url: '/images/furrvy-7.webp' },
  { type: 'image', url: '/images/furrvy-8.webp' },
  { type: 'image', url: '/images/furrvy-6.webp' },
  { type: 'image', url: '/images/furrvy-5.webp' },
  { type: 'image', url: '/images/furrvy-4.webp' },
  { type: 'image', url: '/images/furrvy-3.webp' },
  { type: 'image', url: '/images/furrvy-2.webp' },
  ],
  },
  {
    title: 'Niti App',
    description: 'Flutter-based mobile application in testing face with modern UI/UX and real-time features.',
    image: '/images/niti-12.webp',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    status: 'Launching Soon',
    github: 'https://github.com/Ansh98755/niti_frontend.git',
   demoMedia: [
  { type: 'video', url: '/images/niti-11.mp4' },
  { type: 'image', url: '/images/niti-12.webp' },
  { type: 'image', url: '/images/niti-1.webp' },
  { type: 'image', url: '/images/niti-2.webp' },
  { type: 'image', url: '/images/niti-3.webp' },
  { type: 'image', url: '/images/niti-4.webp' },
  { type: 'image', url: '/images/niti-5.webp' },
  { type: 'image', url: '/images/niti-6.webp' },
  { type: 'image', url: '/images/niti-7.webp' },
  { type: 'image', url: '/images/niti-8.webp' },
  { type: 'image', url: '/images/niti-9.webp' },
  { type: 'image', url: '/images/niti-10.webp' },
  ]
  },
  {
    title: 'DoStartup Website',
    description: 'Next.js-based responsive business website featuring performance-optimized components.',
    image: '/images/dostartup-1.webp',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS'],
    status: 'In Development',
    github: 'https://github.com/Ansh98755/tax_website.git',
    live: 'https://dostartup.vercel.app/',
    demoMedia: [
      { type: 'image', url: '/images/dostartup-1.webp' },
      { type: 'image', url: '/images/dostartup-2.webp' },
      { type: 'image', url: '/images/dostartup-3.webp' },
      { type: 'image', url: '/images/dostartup-4.webp' },
      { type: 'image', url: '/images/dostartup-5.webp' },
      { type: 'image', url: '/images/dostartup-6.webp' },
    ]
  },
  {
    title: 'Sahayak',
    description: 'Android app for real-time hospital appointment and bed booking.',
    image: '/images/sahayak-1.webp',
    technologies: ['Kotlin', 'Firebase', 'Real-time Database', 'Jetpack-Compose'],
    status: 'Completed',
    github: 'https://github.com/Ansh98755/Sahayak.git',
    demoMedia: [
      { type: 'video', url: '/images/sahayak-9.mp4' },
      { type: 'image', url: '/images/sahayak-1.webp' },
      { type: 'image', url: '/images/sahayak-2.webp' },
      { type: 'image', url: '/images/sahayak-3.webp' },
      { type: 'image', url: '/images/sahayak-4.webp' },
      { type: 'image', url: '/images/sahayak-5.webp' },
      { type: 'image', url: '/images/sahayak-8.webp' },
      { type: 'image', url: '/images/sahayak-7.webp' },

    ]
  },
  {
    title: 'Coffee Ordering App',
    description: 'Mobile application for coffee ordering with intuitive UI and smooth user experience.',
    image: '/lovable-uploads/coffee-1.webp',
    technologies: ['Flutter', 'Dart', 'UI/UX Design', 'RestAPI', 'AWS', 'Node.js', 'Express.js'],
    status: 'Completed',
    github: 'https://github.com/Ansh98755/coffee_ordering_app.git',
    demoMedia: [
      { type: 'video', url: '/images/coffee-6.mp4' },
      { type: 'image', url: '/lovable-uploads/coffee-1.webp' },
      { type: 'image', url: '/lovable-uploads/coffee-2.webp' },
      { type: 'image', url: '/lovable-uploads/coffee-3.webp' },
      { type: 'image', url: '/lovable-uploads/coffee-4.webp' },
      { type: 'image', url: '/lovable-uploads/coffee-5.webp' },
    ]
  },
  {
    title: 'Puzzle Game App',
    description: 'Best stress buster game to relax mind built mostly to calm the mood.',
    image: '/images/puzzle-2.webp',
    technologies: ['Flutter', 'Dart', 'UI/UX Design', 'RestAPI', 'AWS', 'Node.js', 'Express.js'],
    status: 'Completed',
    github: 'https://github.com/Ansh98755/puzzle_game.git',
    demoMedia: [
      { type: 'video', url: '/images/puzzle-1.mp4' },
      { type: 'image', url: '/images/puzzle-2.webp' },
      { type: 'image', url: '/images/puzzle-3.webp' },
      { type: 'image', url: '/images/puzzle-4.webp' },
      { type: 'image', url: '/images/puzzle-5.webp' },
      { type: 'image', url: '/images/puzzle-6.webp' },
    ]
  },
  {
    title: 'Smart Advisor Tool',
    description: 'Tool to show recomendation of the funds according to the user choice like investment amount, volatility, beta, VaR etc.',
    image: '/images/fund-1.webp',
    technologies: ['Python', 'RestAPI', 'Streamlit'],
    tools: ['Matplotlib', 'Numpy', 'pandas', 'numpy', 'yfinance', 'Visualization Libraries', 'matplotlib', 'seaborn', 'streamlit', 'Web Scraping', 'beautifulsoup4', 'lxml', 'Data Export & File Handling', 'openpyxl'],
    status: 'Completed',
    github: 'https://github.com/Ansh98755/smart_advisor_tool.git',
    demoMedia: [
 { type: 'video', url: '/images/fund-4.mp4' },
      { type: 'image', url: '/images/fund-1.webp' },
      { type: 'image', url: '/images/fund-2.webp' },
      { type: 'image', url: '/images/fund-3.webp' },
      { type: 'image', url: '/images/fund-5.webp' },
      { type: 'image', url: '/images/fund-6.webp' },
      { type: 'image', url: '/images/fund-7.webp' },
      { type: 'image', url: '/images/fund-8.webp' },    
    ]
  },
  {
    title: 'Smart Fund Advisor AI App',
    description: 'App for showing the funds recomendations according to the user preferences, make predictions according to the set parameters as well as using the ai provided data dynamically.',
    image: '/lovable-uploads/advisor-2.webp',
    technologies: ['Flutter', 'Dart', 'UI/UX Design', 'RestAPI', 'AWS', 'Node.js', 'Express.js'],
    status: 'Completed',
    github: 'https://github.com/Ansh98755/smart_fund_advisor_app.git',
    demoMedia: [
      { type: 'video', url: '/images/advisor-1.mp4' },
      { type: 'image', url: '/lovable-uploads/advisor-2.webp' },
      { type: 'image', url: '/lovable-uploads/advisor-3.webp' },
      { type: 'image', url: '/lovable-uploads/advisor-4.webp' },
      { type: 'image', url: '/lovable-uploads/advisor-5.webp' },
      { type: 'image', url: '/lovable-uploads/advisor-6.webp' },
      { type: 'image', url: '/lovable-uploads/advisor-7.webp' }
    ]
  }
];

const Projects: React.FC = () => {
  const [expandedTools, setExpandedTools] = useState<Record<number, boolean>>({});

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
            <Link
              key={index}
              to={`/projects/${index}/demo`}
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
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
                        onClick={(e) => {
                          e.preventDefault(); // Prevents navigation
                          setExpandedTools((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                          }))
                        }}
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
                    onClick={(e) => e.stopPropagation()} // Prevents the parent Link from triggering
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                  {project.demoMedia && (
                    <span className="flex items-center space-x-2 text-blue-500">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;