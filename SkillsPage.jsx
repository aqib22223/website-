import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaPython, FaJava, FaGitAlt, FaWordpress, FaPaintBrush, FaFilm, FaCut, FaCanva, FaVideo, FaComments, FaPuzzlePiece, FaUsers, FaEye } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiVercel, SiNetlify, SiPostman, SiFramer, SiCplusplus, SiR, SiVisualstudiocode } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    color: "text-purple-700",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-700" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-indigo-400" /> },
    ],
  },
  {
    title: "Backend Development",
    color: "text-indigo-700",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "Firebase", icon: <SiFirebase className="text-red-500" /> },
    ],
  },
  {
    title: "Programming Languages",
    color: "text-pink-700",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-600" /> },
      { name: "Java", icon: <FaJava className="text-red-700" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-purple-600" /> },
      { name: "R (basic)", icon: <SiR className="text-pink-500" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "text-green-700",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-700" /> },
      { name: "WordPress", icon: <FaWordpress className="text-blue-700" /> },
      { name: "VS Code", icon: <SiVisualstudiocode className="text-gray-800" /> },
      { name: "Netlify & Vercel", icon: <SiNetlify className="text-indigo-500" /> },
      { name: "Postman", icon: <SiPostman className="text-yellow-400" /> },
    ],
  },
  {
    title: "Design & Media",
    color: "text-yellow-700",
    skills: [
      { name: "Adobe Photoshop", icon: <FaPaintBrush className="text-pink-600" /> },
      { name: "Premiere Pro", icon: <FaFilm className="text-red-600" /> },
      { name: "CapCut", icon: <FaCut className="text-green-600" /> },
      { name: "Canva", icon: <FaCanva className="text-indigo-600" /> },
      { name: "Video Editing", icon: <FaVideo className="text-blue-500" /> },
    ],
  },
  {
    title: "Soft Skills",
    color: "text-blue-700",
    skills: [
      { name: "Communication", icon: <FaComments className="text-green-500" /> },
      { name: "Problem Solving", icon: <FaPuzzlePiece className="text-indigo-600" /> },
      { name: "Teamwork", icon: <FaUsers className="text-purple-600" /> },
      { name: "Attention to Detail", icon: <FaEye className="text-pink-400" /> },
    ],
  },
];

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white text-gray-800 pt-24 pb-16 px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-6 text-indigo-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Professional Skills
      </motion.h2>
      <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600 text-lg">
        Here's a breakdown of my technical and creative abilities across different categories.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${category.color}`}>{category.title}</h3>
            <ul className="space-y-3 text-gray-700">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-3 hover:text-indigo-500 transition">
                  <span className="text-xl">{skill.icon}</span> {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
