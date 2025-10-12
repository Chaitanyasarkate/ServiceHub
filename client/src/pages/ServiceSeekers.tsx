import React, { useState, useEffect } from 'react';

interface Seeker {
  initials: string;
  name: string;
  requirement: string;
  budget: string;
  description: string;
  image?: string;
}

interface Props {
  searchQuery: string;
  darkMode: boolean;
}

const ServiceSeekers: React.FC<Props> = ({ searchQuery, darkMode }) => {
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
  const [seekers] = useState<Seeker[]>([
    { initials: 'DL', name: 'David Lee', requirement: 'React Developer', budget: '$50/hr', description: 'Need help building a web app.', image: 'https://randomuser.me/api/portraits/men/28.jpg' },
    { initials: 'SM', name: 'Sarah Miller', requirement: 'Yoga Classes', budget: '$30/session', description: 'Looking for beginner yoga lessons.', image: 'https://randomuser.me/api/portraits/women/29.jpg' },
    { initials: 'TB', name: 'Tom Brown', requirement: 'Personal Chef', budget: '$100/meal', description: 'Weekly healthy meal prep.', image: 'https://randomuser.me/api/portraits/men/30.jpg' },
    // Indian service seekers
    { initials: 'AK', name: 'Anjali Kapoor', requirement: 'Math Tutor', budget: '₹800/hr', description: 'Need help with CBSE Class 10 Math.', image: 'https://randomuser.me/api/portraits/women/31.jpg' },
    { initials: 'RS', name: 'Rohit Singh', requirement: 'Electrician', budget: '₹500/visit', description: 'Home wiring and repairs needed.', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { initials: 'PM', name: 'Pooja Mehra', requirement: 'Yoga Instructor', budget: '₹400/session', description: 'Looking for morning yoga classes.', image: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { initials: 'SK', name: 'Sandeep Kumar', requirement: 'Plumber', budget: '₹600/visit', description: 'Fix leaking kitchen tap.', image: 'https://randomuser.me/api/portraits/men/34.jpg' },
    { initials: 'NS', name: 'Neha Sharma', requirement: 'Makeup Artist', budget: '₹2000/event', description: 'Bridal makeup for wedding.', image: 'https://randomuser.me/api/portraits/women/35.jpg' },
    { initials: 'VG', name: 'Vikas Gupta', requirement: 'Mobile App Developer', budget: '₹1000/hr', description: 'Build an Android app for my business.', image: 'https://randomuser.me/api/portraits/men/36.jpg' },
    { initials: 'MT', name: 'Meena Tiwari', requirement: 'Nutritionist', budget: '₹700/consult', description: 'Diet plan for weight loss.', image: 'https://randomuser.me/api/portraits/women/37.jpg' },
    { initials: 'SR', name: 'Sunil Reddy', requirement: 'Photographer', budget: '₹5000/event', description: 'Event photography for birthday party.', image: 'https://randomuser.me/api/portraits/men/38.jpg' },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredSeekers = seekers.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.requirement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContact = (name: string) => {
    console.log(`Contacted ${name}`);
    alert(`Contacting ${name}! Message sent.`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen pt-24">
        <div className="spinner mx-auto"></div>
      </div>
    );
  }

  return (
  <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 relative">
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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white animate-fade-in-up">Service Seekers</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Find people looking for services like yours.
        </p>

        {filteredSeekers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No seekers found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSeekers.map((seeker, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 animate-fade-in-up border border-gray-100 dark:border-gray-700"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={seeker.image}
                      alt={seeker.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 dark:border-blue-600 shadow-md"
                    />
                    <div>
                      <h2 className="font-semibold text-xl text-gray-800 dark:text-white">{seeker.name}</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-base">{seeker.requirement}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-base italic">{seeker.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">⭐</span>
                      <span className="text-base text-gray-600 dark:text-gray-400 font-semibold">{seeker.budget}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSeekers;