import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa'

export default function About() {
  const aboutData = {
    title: 'About Me',
    description: `Creative and detail-oriented Web Designer with years of experience in designing and developing visually appealing and user-friendly websites. Proficient in HTML, CSS, JavaScript, and responsive design principles. Adept at collaborating with clients to understand their needs and translating them into effective design solutions.`,
    
    experience: [
      {
        role: 'WordPress Developer',
        company: 'Cubit Incorporated Pvt. Ltd., Gaushala, Kathmandu',
        period: 'April 2023 – Present',
        details: [
          'Developed complete WordPress websites from scratch (frontend + backend).',
          'Used ACF and custom PHP to create flexible CMS experiences.',
          'Built responsive UIs using Tailwind CSS and optimized SEO performance.',
          'Collaborated with design and content teams to convert mockups into scalable websites.',
        ],
      },
      {
        role: 'UI/UX Developer & Designer',
        company: 'Techart Trekkies Pvt. Ltd., Lazimpat, Kathmandu',
        period: 'Oct 2022 – March 2023',
        details: [
          'Created UI mockups, wireframes, and prototypes illustrating site functionality.',
          'Implemented HTML, CSS, JavaScript, and jQuery in responsive web projects.',
          'Worked closely with backend developers to integrate APIs and ensure seamless performance.',
        ],
      },
      {
        role: 'UI/UX Developer',
        company: 'Grafi OffShore Nepal, Sanepa Height, Lalitpur',
        period: 'Nov 2021 – Sep 2022',
        details: [
          'Implemented websites and landing pages from concept through deployment.',
          'Collaborated with designers and engineers on new features and UX improvements.',
        ],
      },
      {
        role: 'Web Designer',
        company: 'Imagine Technology Pvt. Ltd., Kupondol, Lalitpur',
        period: 'Mar 2018 – Oct 2021',
        details: [
          'Designed and developed corporate and client websites using WordPress.',
          'Managed wireframes, mockups, and UI/UX design workflows.',
          'Optimized cross-browser and multi-platform compatibility.',
        ],
      },
    ],

    education: [
      {
        degree: 'Masters in Computer Application',
        university: 'IGNOU University',
        year: '2024',
      },
      {
        degree: 'B.E. in Computer Engineering',
        university: 'Khwopa Engineering College',
        year: '2016',
      },
      {
        degree: 'High School (Science)',
        university: 'Hill Town Higher Secondary School',
        year: '2010',
      },
      {
        degree: 'SLC',
        university: 'Hill Town Higher Secondary School',
        year: '2008',
      },
    ],

    socials: [
      { icon: <FaFacebookF />, url: 'https://facebook.com/', color: 'hover:text-blue-600' },
      { icon: <FaInstagram />, url: 'https://instagram.com/', color: 'hover:text-pink-500' },
      { icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/ilina-maharjan', color: 'hover:text-blue-700' },
      { icon: <FaDribbble />, url: 'https://dribbble.com/', color: 'hover:text-pink-400' },
    ],
  }

  return (
    <div className="mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-secondary ">{aboutData.title}</h1>

      <p className="text-gray-700 mb-8 leading-relaxed text-justify dark:text-white ">{aboutData.description}</p>

      {/* Social Icons */}
      <div className="flex justify-start gap-6 mb-10 border-b pb-4">
        {aboutData.socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`dark:text-white text-gray-600 ${social.color} transition-colors text-2xl`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Experience Section */}
      <h2 className="text-xl font-semibold mt-8 mb-4 text-secondary">Experience</h2>
      <div className="space-y-6">
        {aboutData.experience.map((exp, index) => (
          <div key={index}>
            <h3 className="dark:text-white font-semibold text-lg">{exp.role}</h3>
            <p className="dark:text-white text-gray-600 italic">{exp.company}</p>
            <p className="dark:text-white text-sm text-gray-500 mb-2">{exp.period}</p>
            <ul className="dark:text-white list-disc ml-5 text-gray-700 space-y-1">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Education</h2>
      <ul className="dark:text-white list-disc ml-5 text-gray-700 space-y-1">
        {aboutData.education.map((edu, index) => (
          <li key={index}>
            <span className="font-medium">{edu.degree}</span> — {edu.university} ({edu.year})
          </li>
        ))}
      </ul>
    </div>
  )
}
