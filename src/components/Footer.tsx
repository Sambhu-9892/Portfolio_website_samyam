import React from 'react';
import { Github, Linkedin, Twitter} from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Samyam Bista. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        {/* <div className="mt-6 text-center text-gray-500 text-sm flex items-center justify-center">
          <span>Built with</span>
          <Heart size={14} className="mx-1 text-red-500" />
          <span>using React & Tailwind CSS</span>
        </div> */}
      </div>
    </footer>;
};