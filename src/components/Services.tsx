
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'App Development',
      description: 'Custom Android/iOS apps using Flutter with Firebase or REST APIs integration.',
      features: ['Cross-platform development', 'Real-time features', 'Cloud integration', 'Modern UI/UX'],
      icon: '📱'
    },
    {
      title: 'Web Development',
      description: 'Responsive websites using Next.js, Node.js backend, MongoDB/Firebase database integration.',
      features: ['Responsive design', 'SEO optimization', 'Performance focused', 'Modern frameworks'],
      icon: '💻'
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-red-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-red-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
