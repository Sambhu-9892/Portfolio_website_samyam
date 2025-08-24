import React from 'react'
import { Briefcase, Award, Users } from 'lucide-react'
export const ExperienceSection = () => {
  const experiences = [
    {
      type: 'education',
      title: 'Secondary Education Examination',
      organization: 'Kathmandu University High School',
      period: '2016 - 2020',
      description: 'Finished my School days (Class 10)',
      icon: <Award className="text-cyan-500" size={24} />,
    },
    {
      type: 'education',
      title:
        "Bachelor's in Science in Computer Science and Information Technology",
      organization: '',
      period: '2023 - Present',
      description:
        'Focusing on cybersecurity, software development, and networking. Maintaining high academic standing while participating in extracurricular activities.',
      icon: <Award className="text-cyan-500" size={24} />,
    },
    {
      type: 'work',
      title: 'DevOps Intern',
      organization: 'Tech Company',
      period: 'November 2024 - Present',
      description:
        'Assisted in Maintainig the ',
      icon: <Briefcase className="text-cyan-500" size={24} />,
    },
    {
      type: 'leadership',
      title: 'Computer Club President',
      organization: 'University Club',
      period: '2021 - 2022',
      description:
        'Led a team organizing workshops, hackathons, and tech talks. Increased club membership by 40% and established new industry partnerships.',
      icon: <Users className="text-cyan-500" size={24} />,
    },
    {
      type: 'work',
      title: 'Web Developer (Part-time)',
      organization: 'Local Business',
      period: '2021',
      description:
        'Developed and maintained the company website, implemented security best practices, and optimized site performance.',
      icon: <Briefcase className="text-cyan-500" size={24} />,
    },
    {
      type: 'leadership',
      title: 'Model United Nations Delegate',
      organization: 'MUN Conference',
      period: '2020 - Present',
      description:
        'Participated in multiple MUN conferences, representing countries and contributing to resolution drafting on technology policy topics.',
      icon: <Users className="text-cyan-500" size={24} />,
    },
  ]
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-700"></div>
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-gray-800 border-2 border-cyan-500 z-10 flex items-center justify-center">
                    {exp.icon}
                  </div>
                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
                  >
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-semibold mt-1">
                        {exp.title}
                      </h3>
                      <div className="text-gray-400 mb-2">
                        {exp.organization}
                      </div>
                      <div className="text-sm text-cyan-400 mb-4">
                        {exp.period}
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
