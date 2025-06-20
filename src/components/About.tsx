
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-300">
              I'm Ayush, A passionate developer based in India
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm currently pursuing B.Tech in Computer Science from Graphic Era Deemed to be University. 
              I love building innovative mobile and web experiences using Flutter and Next.js. 
              I'm also actively working on real-world products with startups.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in technology has been dedicated to finding the perfect balance between 
              performance and user experience. I'm always excited to work on challenging projects 
              that push the boundaries of what's possible.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">2</div>
                <div className="text-gray-400">Active Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-500/20 to-blue-500/20 p-8 rounded-2xl">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 text-red-500">Education</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">B.Tech Computer Science</h5>
                    <p className="text-gray-400 text-sm">Graphic Era Deemed to be University</p>
                    <p className="text-gray-500 text-sm">2022 - 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
