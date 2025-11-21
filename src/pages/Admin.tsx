import React, { useState, useEffect } from "react";

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
  });

  // Load saved projects
  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) setProjects(JSON.parse(saved));
  }, []);

  // Save whenever projects change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      ...form,
    };

    setProjects([...projects, newProject]);
    setForm({ title: "", description: "", link: "" });
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Add Project Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 shadow rounded mb-8"
      >
        <input
          type="text"
          placeholder="Project Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <input
          type="text"
          placeholder="Project Link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          className="w-full p-2 border rounded mb-3"
        />
        <div className="mb-3">
  <label className="block mb-1 font-semibold">Project Image</label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files?.[0];
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          alert("Image too large! Max 2MB.");
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          setForm({ ...form, image: reader.result as string });
        };
        reader.readAsDataURL(file);
      }
    }}
    className="w-full p-2 border rounded"
  />
  {form.image && (
    <img
      src={form.image}
      alt="preview"
      className="w-32 h-20 object-cover mt-2 rounded"
    />
  )}
</div>


        <button className="px-4 py-2 bg-black text-white rounded">
          Add Project
        </button>
      </form>

      {/* Project List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Projects</h2>

        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-gray-100 p-4 rounded shadow mb-3 flex justify-between"
          >
            <div>
              <h3 className="font-bold">{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} className="text-blue-500">
                {p.link}
              </a>
            </div>

            <button
              onClick={() => deleteProject(p.id)}
              className="text-red-500 font-bold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
