
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Logo Image */}
            <img 
              src="/logo.png" 
              alt="Ayush Mehendiratta Logo" 
              className="h-8 w-8 object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Text Logo */}
            <div className="text-xl font-bold text-red-500 hidden">AM</div>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-red-500 transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
