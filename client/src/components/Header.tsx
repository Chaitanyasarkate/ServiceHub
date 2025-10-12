import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-500 dark:text-blue-400">ServiceHub</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/providers" className="hover:text-blue-500 transition">Providers</Link>
          <Link to="/seekers" className="hover:text-blue-500 transition">Seekers</Link>
          <Link to="/login" className="hover:text-blue-500 transition">Login</Link>
          <Link to="/register" className="hover:text-blue-500 transition">Register</Link>
        </nav>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search providers, seekers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white w-64 md:w-80 transition-all"
        />

        {/* Dark Mode Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md pb-4">
          <nav className="px-4 space-y-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-500 transition">Home</Link>
            <Link to="/providers" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-500 transition">Providers</Link>
            <Link to="/seekers" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-500 transition">Seekers</Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-500 transition">Login</Link>
            <Link to="/register" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-500 transition">Register</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;