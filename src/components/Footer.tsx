import React from 'react'

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa'



export default function Footer(){
  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', color: 'hover:text-blue-600' },
    { icon: <FaInstagram />, url: 'https://instagram.com', color: 'hover:text-pink-500' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', color: 'hover:text-blue-700' },
    { icon: <FaDribbble />, url: 'https://dribbble.com', color: 'hover:text-pink-400' },
  ];
  return (
<footer className="bg-white mt-16 border-t  dark:bg-gray-800">
  <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
    {/* Left side */}
    <div className="mb-2 md:mb-0 dark:text-white">
      © 2025 Ilina Maharjan — UI/UX Developer
      
    </div>

    {/* Right side */}
    <div className="text-center md:text-left space-y-1">
      <div className="flex items-center justify-left md:justify-start gap-2 dark:text-white">
        <FaMapMarkerAlt className="text-gray-500 dark:text-white" />
        <span>Kirtipur, Kathmandu, Nepal</span>
      </div>
      <div className="flex items-center justify-left md:justify-start gap-2 dark:text-white">
        <FaPhoneAlt className="text-gray-500 dark:text-white" />
        <span>9840092767</span>
      </div>
      <div className="flex items-center justify-left md:justify-start gap-2 dark:text-white">
        <FaEnvelope className="text-gray-500 dark:text-white" />
        <span>ilina.maharjan08@gmail.com</span>
      </div>
           {/* Social media icons */}
     <div className="flex justify-center  gap-4 mt-2 dark:text-white">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-white transition-colors ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
      
    </div>
  </div>
</footer>

  )
}
