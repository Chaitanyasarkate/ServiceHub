// src/components/LinkedInUI.jsx
import React from "react";

export const Header = () => (
  <header className="fixed w-full bg-white shadow-md z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <h1 className="text-primary font-bold text-xl cursor-pointer">ServiceHub</h1>
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  </header>
);

export const Card = ({ avatar, name, role, content }) => (
  <div className="bg-card rounded-lg shadow-card p-4 mb-4 transition-transform transform hover:-translate-y-1 hover:shadow-hover">
    <div className="flex items-center gap-3">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
      <div>
        <h2 className="font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
    <p className="mt-3 text-gray-700">{content}</p>
  </div>
);

export const Sidebar = () => (
  <div className="bg-card rounded-lg shadow-card p-4 mb-4">
    <h3 className="font-semibold text-gray-800 mb-2">Connections</h3>
    <ul className="text-gray-500 text-sm space-y-1">
      <li>John Doe</li>
      <li>Jane Smith</li>
      <li>Robert Brown</li>
    </ul>
  </div>
);
