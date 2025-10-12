import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  darkMode: boolean;
}

const Dashboard: React.FC<Props> = ({ darkMode }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Simulate loading user data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const user = {
    name: 'John Doe', // TODO: From auth (e.g., localStorage)
    email: 'john@example.com',
    role: 'Service Provider',
    rating: 4.8,
  };

  const handleLogout = () => {
    // TODO: Real logout (clear token)
    alert('Logged out successfully!');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen pt-24">
        <div className="spinner mx-auto"></div>
      </div>
    );
  }

  return (
    <div className={`pt-24 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 transition-all duration-300 page-transition page-transition-enter ${darkMode ? 'dark' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white animate-fade-in-up">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Welcome back! Manage your services here.
        </p>

        {/* User Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 max-w-md mx-auto transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center text-white font-bold text-lg uppercase">
              JD
            </div>
            <div>
              <h2 className="font-semibold text-xl text-gray-800 dark:text-white">{user.name}</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{user.role}</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Email: {user.email}</p>
          <div className="flex items-center gap-1 mb-4">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{user.rating}/5</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
          >
            Logout
          </button>
        </div>

        {/* Quick Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link to="/" className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">Home Feed</h3>
            <p className="text-gray-600 dark:text-gray-300">Browse users and services</p>
          </Link>
          <Link to="/providers" className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">Providers</h3>
            <p className="text-gray-600 dark:text-gray-300">Hire professionals</p>
          </Link>
          <Link to="/seekers" className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">Seekers</h3>
            <p className="text-gray-600 dark:text-gray-300">Find people needing help</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;