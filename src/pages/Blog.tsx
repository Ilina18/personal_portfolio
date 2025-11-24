
import React from "react";
import { FiCopy } from "react-icons/fi";


export default function Blog() {
  const commands = [
    {
      title: "Create React App (CRA)",
      command: "npx create-react-app my-app",
    },
    {
      title: "Vite (Recommended)",
      command: "npm create vite@latest my-app -- --template react",
    },
    {
      title: "Next.js",
      command: "npx create-next-app@latest my-app",
    },
  ];

    const command = [
    
    {
      title: "Install package",
      command: "npm install package-name",
    },
     {
      title: "Install dev dependency",
      command: "npm install --save-dev package-name",
    },
     {
      title: "Install specific version",
      command: "npm install package-name@1.2.3",
    },

     {
      title: "Install all dependencies",
      command: "npm install",
    },
    ];
      const a = [
    
    {
      title: "React Router",
      command: "npm install react-router-dom",
    },
     {
      title: "Axios(HTTP client)",
      command: "npm install axios",
    },
     {
      title: "Tailwind css",
      command: "npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
    },

     {
      title: "Redux Toolkit",
      command: "npm install @reduxjs/toolkit react-redux",
    },
     {
      title: "Material-UI",
      command: "npm install @mui/material @emotion/react @emotion/styled",
    },


  ];


  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div className="section-wrapper border p-4 rounded">
      <h1 className="text-3xl font-bold mb-6 text-secondary text-center">React Project Commands</h1>
      <p className="text-2xl font-bold mb-6 text-white text-center">Essential commands for React development</p>

      <div className="card">
        <h2 className="card-heading text-xl text-white p-4">Create New React Project</h2>
<div className="command-list max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
        {commands.map((cmd, idx) => (
          <div key={idx} className="command-box text-white rounded p-4 m-4 bg-[#40265B]">
            <div className="">
              <h3 className="cmd-title">{cmd.title}</h3>
              <code className="cmd-text ">{cmd.command}</code>
            </div>

          </div>
        ))}
</div>
          <div className="card">
        <h2 className="card-heading text-xl text-white p-4">Install Dependencies</h2>
                <div className="command-list max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">

          {command.map((cmd, idx) => (
          <div key={idx} className="command-box text-white rounded p-4 m-4 bg-[#40265B]">
            <div className="">
              <h3 className="cmd-title">{cmd.title}</h3>
              <code className="cmd-text ">{cmd.command}</code>
            </div>

          </div>
        ))}</div>
        </div>

          <div className="card">
        <h2 className="card-heading text-xl text-white p-4">Popular </h2>
        <div className="command-list max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
          {a.map((cmd, idx) => (
          <div key={idx} className="command-box text-white rounded p-4 m-4 bg-[#40265B]">
            <div className="">
              <h3 className="cmd-title">{cmd.title}</h3>
              <code className="cmd-text ">{cmd.command}</code>
            </div>

          </div>
        ))}</div>
        </div>
      </div>
    </div>
  );
}
