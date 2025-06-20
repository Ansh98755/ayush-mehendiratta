
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Flutter', level: 90, category: 'Mobile' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 88, category: 'Language' },
    { name: 'Python', level: 80, category: 'Language' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Database' },
    { name: 'Firebase', level: 85, category: 'Backend' },
    { name: 'Git', level: 90, category: 'Tools' },
  ];

  const categories = ['Mobile', 'Frontend', 'Backend', 'Language', 'Database', 'Tools'];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-red-500 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">{skill.category}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="text-red-500 font-semibold text-sm">{category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
