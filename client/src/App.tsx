import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ServiceProviders from './pages/ServiceProviders';
import ServiceSeekers from './pages/ServiceSeekers';
import Login from './pages/Login';
import Register from './pages/Register';
import ChatWidget from './components/ChatWidget';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} darkMode={darkMode} />} />
          <Route path="/providers" element={<ServiceProviders searchQuery={searchQuery} darkMode={darkMode} />} />
          <Route path="/seekers" element={<ServiceSeekers searchQuery={searchQuery} darkMode={darkMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route path="/register" element={<Register darkMode={darkMode} />} />
          <Route path="*" element={
            <div className="text-center py-20 text-gray-500 dark:text-gray-400">
              Page not found. <a href="/" className="text-blue-500 hover:underline">Go Home</a>
            </div>
          } />
        </Routes>
        <footer className="bg-gray-800 dark:bg-gray-950 text-white p-4 text-center mt-20">
          © 2024 ServiceHub. All rights reserved. | <button type="button" className="text-blue-400 hover:underline bg-transparent border-none p-0 m-0 cursor-pointer" aria-label="Privacy Policy" onClick={() => window.alert('Privacy Policy: Your data is secure and not shared with third parties.')}>Privacy Policy</button>
        </footer>
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;