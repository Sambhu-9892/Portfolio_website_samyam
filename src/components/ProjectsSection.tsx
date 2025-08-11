import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
export const ProjectsSection = () => {
  const projects = [{
    title: 'Web Vulnerability Scanner',
    description: 'A tool that scans web applications for common security vulnerabilities such as XSS, SQL injection, and CSRF.',
    tags: ['Python', 'Security', 'Web', 'API'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  }, {
    title: 'IoT Home Security System',
    description: 'An Arduino and ESP32 based home security system with motion detection and mobile notifications.',
    tags: ['IoT', 'Arduino', 'ESP32', 'C++'],
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop'
  }, {
    title: 'Booking Management System',
    description: 'A full-stack web application for managing bookings and reservations with user authentication.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
  }, {
    title: 'Network Simulation Lab',
    description: 'A GNS3 project simulating enterprise network environments with Cisco devices and security implementations.',
    tags: ['Networking', 'GNS3', 'Cisco', 'Security'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop'
  }, {
    title: 'Task Management App',
    description: 'A mobile application for task management with offline capability using SQLite and Flutter.',
    tags: ['Flutter', 'Dart', 'SQLite', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop'
  }, {
    title: 'Security Blog Platform',
    description: 'A blog platform focused on cybersecurity topics with user authentication and markdown support.',
    tags: ['Next.js', 'React', 'MongoDB', 'Markdown'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop'
  }];
  return <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => <span key={idx} className="px-2 py-1 bg-gray-800 text-cyan-400 rounded-full text-xs">
                      {tag}
                    </span>)}
                </div>
              </div>
              <div className="p-6 pt-0 flex justify-between">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  <Github size={16} className="mr-1" />
                  Code
                </a>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  <ExternalLink size={16} className="mr-1" />
                  Demo
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};