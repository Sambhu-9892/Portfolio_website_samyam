import React from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
export const ContactSection = () => {
  return <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Mail className="text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:samyam.bista@example.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    samyam.bista@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <MapPin className="text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-400">Nepal</p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 p-3 rounded-lg text-cyan-500 hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300">
                    <Github size={24} />
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-lg text-cyan-500 hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-lg text-cyan-500 hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-cyan-500" placeholder="Your name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-cyan-500" placeholder="Your email" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-400 mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-cyan-500" placeholder="Subject" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-cyan-500" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-300 flex items-center">
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};