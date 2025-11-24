import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue, set } from "firebase/database";
import { FaTrash, FaPlus } from "react-icons/fa";

type Experience = {
  title: string;
  company: string;
  period: string;
  details: string[];
};

type Education = {
  degree: string;
  school: string;
  year: string;
};

export default function AboutSection() {
  // Initial state
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      title: "WordPress Developer",
      company: "Cubit Incorporated Pvt. Ltd., Gaushala, Kathmandu",
      period: "April 2023 – Present",
      details: [
        "Developed complete WordPress websites from scratch (frontend + backend).",
        "Used ACF and custom PHP to create flexible CMS experiences.",
        "Built responsive UIs using Tailwind CSS and optimized SEO performance.",
        "Collaborated with design and content teams to convert mockups into scalable websites."
      ]
    }
  ]);

  const [education, setEducation] = useState<Education[]>([
    { degree: "Masters in Computer Application", school: "IGNOU University", year: "2024" }
  ]);

  // --- Experience handlers ---
  const handleExpChange = (idx: number, field: keyof Experience, value: string) => {
    const newExps = [...experiences];
    if (field === "details") {
      newExps[idx].details = value.split("\n");
    } else {
      newExps[idx][field] = value;
    }
    setExperiences(newExps);
  };

  const addExperience = () => {
    setExperiences([...experiences, { title: "", company: "", period: "", details: [""] }]);
  };

  const removeExperience = (idx: number) => {
    const newExps = experiences.filter((_, i) => i !== idx);
    setExperiences(newExps);
  };

  // --- Education handlers ---
  const handleEduChange = (idx: number, field: keyof Education, value: string) => {
    const newEdu = [...education];
    newEdu[idx][field] = value;
    setEducation(newEdu);
  };

  const addEducation = () => {
    setEducation([...education, { degree: "", school: "", year: "" }]);
  };

  const removeEducation = (idx: number) => {
    const newEdu = education.filter((_, i) => i !== idx);
    setEducation(newEdu);
  };

  const saveAll = () => {
    console.log("Saved About content:", { experiences, education });
    alert("About content saved!");
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">About / Resume</h2>

      {/* Work Experience */}
      <h3 className="text-2xl font-semibold mb-4 flex justify-between items-center">
        Work Experience
        <button onClick={addExperience} className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded">
          <FaPlus /> <span>Add</span>
        </button>
      </h3>

      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow space-y-2 relative">
            <button
              onClick={() => removeExperience(idx)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              title="Remove Experience"
            >
              <FaTrash />
            </button>

            <input
              type="text"
              value={exp.title}
              onChange={(e) => handleExpChange(idx, "title", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Job Title"
            />
            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleExpChange(idx, "company", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Company"
            />
            <input
              type="text"
              value={exp.period}
              onChange={(e) => handleExpChange(idx, "period", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Period"
            />
            <textarea
              value={exp.details.join("\n")}
              onChange={(e) => handleExpChange(idx, "details", e.target.value)}
              className="w-full p-2 border rounded"
              rows={4}
              placeholder="Responsibilities (one per line)"
            />
          </div>
        ))}
      </div>

      {/* Education */}
      <h3 className="text-2xl font-semibold mt-8 mb-4 flex justify-between items-center">
        Education
        <button onClick={addEducation} className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded">
          <FaPlus /> <span>Add</span>
        </button>
      </h3>

      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow flex space-x-2 relative items-center">
            <button
              onClick={() => removeEducation(idx)}
              className="text-red-500 hover:text-red-700"
              title="Remove Education"
            >
              <FaTrash />
            </button>

            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleEduChange(idx, "degree", e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Degree"
            />
            <input
              type="text"
              value={edu.school}
              onChange={(e) => handleEduChange(idx, "school", e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="School"
            />
            <input
              type="text"
              value={edu.year}
              onChange={(e) => handleEduChange(idx, "year", e.target.value)}
              className="w-24 p-2 border rounded"
              placeholder="Year"
            />
          </div>
        ))}
      </div>

      {/* Save Button */}
      <button
        onClick={saveAll}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save All
      </button>
    </div>
  );
}
