import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa'
import ProjectCard from "../sections/ProjectCard";

export default function Home() {
  // Dynamic data
  const profile = {
    name: "Ilina",
    greeting: "Hi — I'm Ilina 👋",
    imageURL: "/images/ili copy.jpeg",
    post:"UI/UX Developer",
    bio: `A passionate and detail-oriented Web Developer with a strong background in UI/UX design, bringing together creativity and technical expertise to craft engaging, user-centered digital experiences. With years of experience designing intuitive interfaces and developing responsive websites, I excel at transforming ideas into functional, visually appealing, and high-performing solutions. Skilled in front-end technologies, design systems, and modern frameworks, I focus on delivering seamless user journeys that align with both aesthetic and business goals. Adept at collaborating with cross-functional teams, managing projects from concept to deployment, and maintaining a strong commitment to quality, innovation, and usability.`,
    buttons: [
      { label: "See my work", link: "/projects", type: "primary" },
      { label: "Contact me", link: "/contact", type: "outline" },
    ],
  };

  const projects = [
    {
      title: "Web Development",
      description: "Landing page redesign for a fintech startup,Landing page redesign for a fintech startup.",
    },
    {
      title: "WEB / Mobile App UI/UX",
      description: "End-to-end flows for a social app,Landing page redesign for a fintech startup.",
    },
    {
      title: "Website Desining from scratch",
      description: "End-to-end flows for a social app,Landing page redesign for a fintech startup.",
    },
    {
      title: "Dashboard UI",
      description: "Analytics dashboard with component library,Landing page redesign for a fintech startup.",
    },
  ];
  

  const skills = [
    "Figma",
    "Prototyping",
    "User Research",
    "Interaction Design",
    "HTML/CSS/Bootstrap",
    "React",
    "Wordpress",
    "Tailwind CSS",
    "Styled Components"    
  ];

  

  return (
    <div>
      
      {/* About Section */}
      <section className=" mb-8 ">
        <div className="grid md:grid-cols-2 gap-6 items-center">
           
          <div>
            <h1 className="text-2xl font-bold mb-4 dark:text-white  text-secondary">{profile.greeting}</h1>
            <p className="text-4xl font-bold dark:text-white  mb-8">{profile.post}</p>
            <p className="text-gray-600 mt-4 dark:text-white  mb-8">{profile.bio}</p>
           

            <div className="space-x-3">
  {profile.buttons.map((btn, index) => (
    <Link
      key={index}
      to={btn.link}   // <-- Use 'to' instead of 'href'
      className={`inline-block px-5 py-3 dark:text-white rounded-lg ${
        btn.type === "primary"
          ? "bg-secondary text-white"
          : "border text-gray-700"
      }`}
    >
      {btn.label}
    </Link>
  ))}
</div>

          </div>

          <div className="flex justify-center">
            <div className="flex items-center justify-center text-white text-xl">
               <img
    src="/images/ili copy.jpeg"
    alt="Ilina Maharjan "
    className="w-100 h-100 object-cover"
  />
            </div>
            
          </div>
        </div>
      </section>

       {/* Skills Section */}
      <section className="bg-white rounded-2xl shadow p-8 mt-16">
        <h3 className="text-xl font-semibold mb-3 text-secondary">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-8 mb-8">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full border text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
         <section id="projects" className="mt-16 mb-8">
      <h2 className="text-2xl font-semibold mb-4 mt-8 text-secondary">
       Service
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 }, // for tablets
          1024: { slidesPerView: 3 }, // for desktops
        }}
        className="mt-8"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

     
    </div>
  );
}
