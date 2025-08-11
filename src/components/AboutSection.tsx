import React from 'react';
import { GraduationCap, MapPin, BookOpen, Target } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-6">
                I'm an undergraduate student passionate about cybersecurity and
                software development. My focus is on web application
                vulnerabilities, network security, and building secure,
                efficient software solutions. I enjoy the challenge of
                identifying security flaws and implementing robust defenses.
              </p>
              <p className="text-gray-300">
                Beyond technical work, I actively participate in leadership
                roles in clubs and events, including Model United Nations and
                sports activities. I believe in practical, hands-on learning and
                constantly seek to expand my skills through real-world projects.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-gray-700 p-3 rounded-lg mr-4">
                <MapPin className="text-cyan-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Nepal</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-700 p-3 rounded-lg mr-4">
                <GraduationCap className="text-cyan-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Education</h3>
                <p className="text-gray-400">
                  Undergraduate in Computer Science
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-700 p-3 rounded-lg mr-4">
                <BookOpen className="text-cyan-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Learning Focus</h3>
                <p className="text-gray-400">
                  Cybersecurity, Web Development, Networking, Cloud Computing
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-700 p-3 rounded-lg mr-4">
                <Target className="text-cyan-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Career Goal</h3>
                <p className="text-gray-400">Red Team Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};