import React from 'react'
import ProjectCard from '../sections/ProjectCard'

export default function Projects() {
  const items = [
    { title: 'Aukusjobs', desc: 'Website using Wordpress', link: 'https://www.aukusjobs.com/' },
    { title: 'World view Foundation', desc: 'Website using Wordpress (ACF).', link: 'https://www.worldview.org.au/' },
    { title: 'SHTC', desc: 'Website desiging.', link: 'https://www.shtcnepal.com/' },
    { title: 'IKBH', desc: 'E-commerce.', link: 'https://www.ikbhgroup.com.np/' },
    { title: 'Analytics Dashboard', desc: 'Data viz and UI.', link: '#' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map(item => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </div>
  )
}
