import React, { useState } from 'react';
import AboutSection from "../pages/AboutSection";

import { onAuthStateChanged, signOut, User } from "firebase/auth";

import { auth } from "../firebase"; 
import { FaTachometerAlt, FaProjectDiagram, FaInfoCircle, FaServicestack, FaBars, FaSignOutAlt } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export default function Admin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Partial<Project>>({});
  const [activeSection, setActiveSection] = useState<'dashboard' | 'projects' | 'about' | 'services'>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
   const [user, setUser] = useState<User | null>(null);

  // Optional: loading state for auth check
  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
  try {
    await signOut(auth);
    window.location.href = "/login";
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

const [aboutData, setAboutData] = useState({
  title: '',
  description: '',
  experience: [],
  education: [],
  socials: []
});

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
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white flex flex-col transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex items-center justify-between p-4">
          {sidebarOpen && <h1 className="text-2xl font-bold">Admin Panel</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars />
          </button>
        </div>
        <nav className="flex flex-col p-2 space-y-2">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`flex items-center space-x-2 px-2 py-2 rounded hover:bg-gray-700 ${activeSection === 'dashboard' ? 'bg-gray-700' : ''}`}
          >
            <FaTachometerAlt />
            {sidebarOpen && <span>Dashboard</span>}
          </button>
          <button
            onClick={() => setActiveSection('projects')}
            className={`flex items-center space-x-2 px-2 py-2 rounded hover:bg-gray-700 ${activeSection === 'projects' ? 'bg-gray-700' : ''}`}
          >
            <FaProjectDiagram />
            {sidebarOpen && <span>Projects</span>}
          </button>
          <button
  onClick={() => setActiveSection('about')} // only the section name
  className={`flex items-center space-x-2 px-2 py-2 rounded hover:bg-gray-700 ${activeSection === 'about' ? 'bg-gray-700' : ''}`}
>
  <FaInfoCircle />
  {sidebarOpen && <span>About</span>}
</button>

          <button
            onClick={() => setActiveSection('services')}
            className={`flex items-center space-x-2 px-2 py-2 rounded hover:bg-gray-700 ${activeSection === 'services' ? 'bg-gray-700' : ''}`}
          >
            <FaServicestack />
            {sidebarOpen && <span>Services</span>}
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="bg-white flex items-center justify-between p-4 shadow">
          <h2 className="text-xl font-bold capitalize">{activeSection}</h2>
       <div className="flex items-center space-x-4">
  <span>{user?.email ? user.email : "Admin"}</span>
  <button onClick={handleLogout} className="flex items-center space-x-1 text-red-500">
    <FaSignOutAlt />
    <span>Logout</span>
  </button>
</div>

        </div>

        {/* Content */}
        <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {activeSection === 'dashboard' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
              <p>Total Projects: {projects.length}</p>
            </div>
          )}

          {activeSection === 'projects' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Projects</h2>
              {/* Form */}
              <div className="mb-4 flex flex-col space-y-2">
                <input placeholder="Title" name="title" value={project.title || ''} onChange={handleChange} className="p-2 border rounded" />
                <input placeholder="Description" name="description" value={project.description || ''} onChange={handleChange} className="p-2 border rounded" />
                <input placeholder="Link" name="link" value={project.link || ''} onChange={handleChange} className="p-2 border rounded" />
                <button onClick={addProject} className="bg-blue-600 text-white px-4 py-2 rounded w-32">Add Project</button>
              </div>

              {/* List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map(p => (
                  <div key={p.id} className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">{p.title}</h3>
                    <p>{p.description}</p>
                    <a href={p.link} className="text-blue-500">{p.link}</a>
                    <button onClick={() => deleteProject(p.id)} className="mt-2 bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

         {activeSection === 'about' && <AboutSection />}

          {activeSection === 'services' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Services</h2>
              <p>Manage your Services content here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
