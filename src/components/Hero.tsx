
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
              Aspiring Software Developer with a strong foundation in development. I specialize in building modern, responsive apps using Flutter and high-performance websites with Next.js. With a problem-solving mindset and a passion for clean, efficient code, I'm focused on creating seamless digital experiences and growing into a versatile tech professional.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-gray-600 hover:border-red-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-red-500/10"
            >
              Contact Me
            </button>
          </div>

          <div className="flex space-x-6 pt-4">
            <a href="https://github.com/Ansh98755/furrvy_project.git" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ayush-mehendiratta-0687a9256/" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-red-500/20">
              <img 
                src="/lovable-uploads/291d722d-f038-4085-8d7d-d08608156b71.png" 
                alt="Ayush Mehendiratta" 
                className="w-full h-full object-cover object-center scale-110"
              />
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
