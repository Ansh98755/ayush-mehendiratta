
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-red-500">Hello,</span> I'm Ayush
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-300">
              Flutter & Next.js Developer
            </h2>
            <p className="text-xl text-gray-400 max-w-lg">
              A passionate B.Tech CS student building scalable apps and modern websites. 
              Currently working with Furrvy and DoStartup on real-world projects.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              View Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-gray-600 hover:border-red-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-red-500/10"
            >
              Contact Me
            </button>
          </div>

          <div className="flex space-x-6 pt-4">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-red-500/20 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-gray-700 flex items-center justify-center text-6xl font-bold text-red-500">
                AM
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
