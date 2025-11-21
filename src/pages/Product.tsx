// import React, { useEffect, useState } from "react";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const saved = localStorage.getItem("projects");
//     if (saved) setProjects(JSON.parse(saved));
//   }, []);

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Projects</h1>

//       {projects.length === 0 && (
//         <p>No projects added yet. Go to /admin to add some.</p>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((p) => (
//           <div key={p.id} className="bg-white p-4 shadow rounded">
//             <h2 className="text-xl font-bold">{p.title}</h2>
//             <p>{p.description}</p>
//             <a className="text-blue-500" href={p.link}>
//               Visit project →
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
