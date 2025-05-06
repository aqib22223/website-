import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Aqib Ali</h1>
        <nav className="space-x-5 text-gray-700 font-medium hidden md:flex">
          <Link to="/" className="hover:text-indigo-500 transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-500 transition">About Me</Link>
          <Link to="/services" className="hover:text-indigo-500 transition">My Services</Link>
          <Link to="/skills" className="hover:text-indigo-500 transition">My Skills</Link>
          <Link to="/contact" className="hover:text-indigo-500 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
