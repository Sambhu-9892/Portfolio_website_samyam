import React from 'react';
import { ArrowRight, Shield, Terminal, Code } from 'lucide-react';
export const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="text-cyan-500">Samyam Bista</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
              Cybersecurity Enthusiast & Developer
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Specializing in web application security, vulnerability
              assessment, and building secure software solutions. Aspiring Red
              Team specialist.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-300 flex items-center">
                Get in touch
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#projects" className="px-6 py-3 border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 rounded-lg transition-colors duration-300">
                View Projects
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-gray-800 rounded-full p-4 shadow-xl">
                  <Shield size={64} className="text-cyan-500" />
                </div>
              </div>
              <div className="absolute bottom-12 right-0 bg-gray-800 rounded-full p-3 shadow-xl">
                <Terminal size={32} className="text-green-500" />
              </div>
              <div className="absolute top-12 left-0 bg-gray-800 rounded-full p-3 shadow-xl">
                <Code size={32} className="text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};