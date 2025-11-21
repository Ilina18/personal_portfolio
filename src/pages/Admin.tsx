import React, { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  image?: string;
};

export default function Admin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Partial<Project>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const addProject = () => {
    if (!project.title || !project.description || !project.link) return;
    setProjects([...projects, { ...(project as Project), id: Date.now() }]);
    setProject({});
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div>
      {/* Form */}
      <input name="title" value={project.title || ''} onChange={handleChange} />
      <input name="description" value={project.description || ''} onChange={handleChange} />
      <input name="link" value={project.link || ''} onChange={handleChange} />
      <button onClick={addProject}>Add</button>

      {/* List */}
      {projects.map(p => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          <a href={p.link}>{p.link}</a>
          <button onClick={() => deleteProject(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
