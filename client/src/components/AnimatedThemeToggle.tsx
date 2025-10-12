import React from 'react';

interface Props {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

const AnimatedThemeToggle: React.FC<Props> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all duration-500 ${darkMode ? 'bg-gray-900 text-yellow-300' : 'bg-yellow-300 text-gray-900'}`}
      aria-label="Toggle dark/light mode"
    >
      {darkMode ? '🌙' : '☀️'}
      <span className="font-bold">{darkMode ? 'Dark' : 'Light'} Mode</span>
    </button>
  );
};

export default AnimatedThemeToggle;
