import React from 'react'
import ProjectCard from '../sections/ProjectCard'
import ColorPicker from "../components/ColorPicker";
export default function Projects() {
  const items = [
    { title: 'Aukusjobs', desc: 'Website using Wordpress', link: 'https://www.aukusjobs.com/', image: '/images/aukus.png' },
    { title: 'World view Foundation', desc: 'Website using Wordpress (ACF).', link: 'https://www.worldview.org.au/',image: '/images/worldview.png' },
    { title: 'SHTC', desc: 'Website desiging.', link: 'https://www.shtcnepal.com/', image: '/images/shtc.png' },
    { title: 'IKBH', desc: 'E-commerce.', link: 'https://www.ikbhgroup.com.np/', image: '/images/ikbh.png' },
    { title: 'Analytics Dashboard', desc: 'Data viz and UI.', link: '#' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 dark:text-white ">Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map(item => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.desc}
            link={item.link} image={item.image}
          />
        ))}
      </div>
      <div className="flex">  <ColorPicker /></div>
    
    </div>
  )
}
