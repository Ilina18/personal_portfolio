import React from 'react'

type ProjectCardProps = {
  title: string
  description?: string
  link?: string
  image?: string // <-- add optional image prop
}

export default function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  return (
    <article className="bg-white rounded-lg shadow p-4">
      <div className="h-36 bg-gray-100 rounded mb-3 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400">Image</span>
        )}
      </div>

      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>

      <div className="mt-3">
        <a
          className="text-sm underline text-blue-600"
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>
    </article>
  )
}
