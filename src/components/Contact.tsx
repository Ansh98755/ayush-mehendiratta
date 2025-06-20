
import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-300">Let's talk about your project</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm always excited to work on new challenges and collaborate with passionate people. 
                Whether you have a mobile app idea or need a modern website, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-red-500">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300">Email</h4>
                  <p className="text-gray-400">ayushmehendiratta64@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-red-500">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300">Location</h4>
                  <p className="text-gray-400">Dehradun, India</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/Ansh98755/furrvy_project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 hover:bg-red-500 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <Github size={20} className="text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-mehendiratta-0687a9256/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 hover:bg-red-500 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <Linkedin size={20} className="text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 hover:scale-105 transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
