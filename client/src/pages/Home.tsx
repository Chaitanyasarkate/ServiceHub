import React, { useState, useEffect } from 'react';

interface User {
  initials: string;
  name: string;
  role: string;
  description: string;
  rating: number;
  image?: string;
}

interface HomeProps {
  searchQuery: string;
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ searchQuery, darkMode }) => {
  // Back to Top button logic
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const users: User[] = [
    { initials: 'JD', name: 'John Doe', role: 'Web Developer', description: 'Building modern apps with React.', rating: 4.8, image: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { initials: 'JS', name: 'Jane Smith', role: 'Yoga Instructor', description: 'Wellness and mindfulness expert.', rating: 4.9, image: 'https://randomuser.me/api/portraits/women/15.jpg' },
    { initials: 'MJ', name: 'Mike Johnson', role: 'Personal Chef', description: 'Healthy meals tailored to you.', rating: 4.7, image: 'https://randomuser.me/api/portraits/men/16.jpg' },
    { initials: 'AL', name: 'Alice Lee', role: 'Graphic Designer', description: 'Creative visuals for your brand.', rating: 4.6, image: 'https://randomuser.me/api/portraits/women/17.jpg' },
    // Indian users
    { initials: 'RS', name: 'Rahul Sharma', role: 'Mobile App Developer', description: 'Expert in Android and iOS apps.', rating: 4.8, image: 'https://randomuser.me/api/portraits/men/18.jpg' },
    { initials: 'PK', name: 'Priya Kumar', role: 'Digital Marketer', description: 'SEO and social media specialist.', rating: 4.7, image: 'https://randomuser.me/api/portraits/women/19.jpg' },
    { initials: 'AS', name: 'Amit Singh', role: 'Fitness Trainer', description: 'Personalized fitness plans and coaching.', rating: 4.9, image: 'https://randomuser.me/api/portraits/men/20.jpg' },
    { initials: 'SM', name: 'Sneha Mehta', role: 'Content Writer', description: 'Professional blog and article writing.', rating: 4.6, image: 'https://randomuser.me/api/portraits/women/21.jpg' },
    { initials: 'VK', name: 'Vikram Khanna', role: 'Photographer', description: 'Wedding and event photography.', rating: 4.8, image: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { initials: 'ND', name: 'Neha Desai', role: 'Nutritionist', description: 'Diet plans for healthy living.', rating: 4.7, image: 'https://randomuser.me/api/portraits/women/23.jpg' },
    { initials: 'AG', name: 'Ankit Gupta', role: 'Plumber', description: 'Reliable plumbing services.', rating: 4.5, image: 'https://randomuser.me/api/portraits/men/24.jpg' },
    { initials: 'MT', name: 'Meera Tripathi', role: 'Math Tutor', description: 'Math coaching for school and college.', rating: 4.9, image: 'https://randomuser.me/api/portraits/women/25.jpg' },
    { initials: 'SR', name: 'Suresh Reddy', role: 'Electrician', description: 'Home and office electrical solutions.', rating: 4.6, image: 'https://randomuser.me/api/portraits/men/26.jpg' },
    { initials: 'RK', name: 'Ritu Kapoor', role: 'Makeup Artist', description: 'Bridal and party makeup.', rating: 4.8, image: 'https://randomuser.me/api/portraits/women/27.jpg' },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner mx-auto"></div>
      </div>
    );
  }

  return (
  <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white animate-fade-in-up">Welcome to ServiceHub</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Connect with providers and seekers in your area.
      </p>

      {filteredUsers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No users found. Try a different search.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user, index) => (
            <div
              key={index}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 animate-fade-in-up border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 dark:border-blue-600 shadow-md"
                />
                <div>
                  <h2 className="font-semibold text-xl text-gray-800 dark:text-white">{user.name}</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-base">{user.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-base italic">{user.description}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-lg">⭐</span>
                  <span className="text-base text-gray-600 dark:text-gray-400 font-semibold">{user.rating}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Simple Modal for Connect */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-lg shadow-xl max-w-sm mx-auto flex flex-col items-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <img
              src={selectedUser.image}
              alt={selectedUser.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-blue-400 dark:border-blue-600 shadow-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-4">Connect with {selectedUser.name}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">Send a connection request?</p>
            <div className="flex space-x-2">
              <button
                onClick={() => { alert(`Connected with ${selectedUser.name}!`); closeModal(); }}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Send Request
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <div className="max-w-2xl mx-auto mt-16 mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow text-center">
        <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300">About ServiceHub</h2>
        <p className="text-gray-700 dark:text-gray-300">ServiceHub is your one-stop platform to connect with trusted service providers and seekers across India. Whether you need a professional or want to offer your skills, ServiceHub makes it easy, fast, and reliable.</p>
      </div>

      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-all z-50"
          aria-label="Back to Top"
        >
          ↑ Top
        </button>
      )}
    </div>
  </div>
  );
};

export default Home;