import React from 'react';
import { Code, Database, Server, Globe, Shield, Terminal } from 'lucide-react';
export const SkillsSection = () => {
  const skillCategories = [{
    title: 'Programming',
    icon: <Code className="text-blue-500" size={28} />,
    skills: ['Java', 'C', 'JavaScript', 'TypeScript', 'Python']
  }, {
    title: 'Web Development',
    icon: <Globe className="text-green-500" size={28} />,
    skills: ['React', 'Node.js', 'HTML/CSS', 'Tailwind CSS']
  }, {
    title: 'Databases',
    icon: <Database className="text-yellow-500" size={28} />,
    skills: ['MySQL', 'PostgreSQL', 'Database Design']
  }, {
    title: 'Cybersecurity',
    icon: <Shield className="text-red-500" size={28} />,
    skills: ['Web App Security', 'Vulnerability Assessment', 'Security Tools', 'Penetration Testing']
  }, {
    title: 'Networking',
    icon: <Server className="text-purple-500" size={28} />,
    skills: ['Cisco Routers', 'GNS3', 'Network Protocols', 'Network Design']
  }, {
    title: 'System Administration',
    icon: <Terminal className="text-cyan-500" size={28} />,
    skills: ['Linux', 'Apache', 'Docker', 'Cron Jobs', 'Shell Scripting']
  }];
  return <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-700 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};