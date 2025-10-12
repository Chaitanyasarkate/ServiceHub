import React, { useState, useEffect } from 'react';

interface Provider {
  initials: string;
  name: string;
  role: string;
  rating: number;
  description: string;
  image?: string;
}

interface Props {
  searchQuery: string;
  darkMode: boolean;
}

const ServiceProviders: React.FC<Props> = ({ searchQuery, darkMode }) => {
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
  const [providers] = useState<Provider[]>([
    { initials: 'JD', name: 'John Doe', role: 'Web Developer', rating: 4.8, description: 'Expert in React and full-stack development.', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { initials: 'JS', name: 'Jane Smith', role: 'Yoga Instructor', rating: 4.9, description: 'Certified yoga teacher offering sessions.', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { initials: 'MJ', name: 'Mike Johnson', role: 'Personal Chef', rating: 4.7, description: 'Specializing in healthy meals and catering.', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    // Indian service providers
    { initials: 'RS', name: 'Rahul Sharma', role: 'Mobile App Developer', rating: 4.8, description: 'Expert in Android and iOS apps.', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { initials: 'PK', name: 'Priya Kumar', role: 'Digital Marketer', rating: 4.7, description: 'SEO and social media specialist.', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { initials: 'AS', name: 'Amit Singh', role: 'Fitness Trainer', rating: 4.9, description: 'Personalized fitness plans and coaching.', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { initials: 'SM', name: 'Sneha Mehta', role: 'Content Writer', rating: 4.6, description: 'Professional blog and article writing.', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { initials: 'VK', name: 'Vikram Khanna', role: 'Photographer', rating: 4.8, description: 'Wedding and event photography.', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { initials: 'ND', name: 'Neha Desai', role: 'Nutritionist', rating: 4.7, description: 'Diet plans for healthy living.', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { initials: 'AG', name: 'Ankit Gupta', role: 'Plumber', rating: 4.5, description: 'Reliable plumbing services.', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { initials: 'MT', name: 'Meera Tripathi', role: 'Math Tutor', rating: 4.9, description: 'Math coaching for school and college.', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { initials: 'SR', name: 'Suresh Reddy', role: 'Electrician', rating: 4.6, description: 'Home and office electrical solutions.', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { initials: 'RK', name: 'Ritu Kapoor', role: 'Makeup Artist', rating: 4.8, description: 'Bridal and party makeup.', image: 'https://randomuser.me/api/portraits/women/13.jpg' },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredProviders = providers.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleHire = (name: string) => {
    setSuccessMessage(`Successfully hired ${name}! Booking confirmed.`);
    setShowConfetti(true);
    setTimeout(() => setSuccessMessage(null), 2500);
    setTimeout(() => setShowConfetti(false), 1800);
  };
  const openModal = (provider: Provider) => setSelectedProvider(provider);
  const closeModal = () => setSelectedProvider(null);

  // Provider Comparison Tool
  const [compareList, setCompareList] = useState<Provider[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const handleCompareToggle = (provider: Provider) => {
    setCompareList(prev => {
      if (prev.find(p => p.name === provider.name)) {
        return prev.filter(p => p.name !== provider.name);
      }
      if (prev.length < 2) {
        return [...prev, provider];
      }
      return prev;
    });
  };
  useEffect(() => {
    if (compareList.length === 2) setShowCompareModal(true);
    else setShowCompareModal(false);
  }, [compareList]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen pt-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="spinner mx-auto"></div>
      </div>
    );
  }

  // Featured Providers Section
  const featuredProviders = providers.filter(p => p.rating >= 4.9);

  // Animated Testimonials Carousel
  const testimonials = [
    {
      name: 'Amit Singh',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      text: 'ServiceHub helped me find new clients quickly. The platform is easy and reliable!',
      role: 'Fitness Trainer',
    },
    {
      name: 'Priya Kumar',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      text: 'I love the interactive features and how easy it is to connect with seekers.',
      role: 'Digital Marketer',
    },
    {
      name: 'Rahul Sharma',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      text: 'The map and badges make my profile stand out. Highly recommended!',
      role: 'Mobile App Developer',
    },
  ];

  function TestimonialsCarousel() {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
      const timer = setTimeout(() => setCurrent((current + 1) % testimonials.length), 3500);
      return () => clearTimeout(timer);
    }, [current]);
    const testimonial = testimonials[current];
    return (
      <div className="max-w-xl mx-auto mb-12 p-6 bg-blue-50 dark:bg-gray-900 rounded-xl shadow-lg text-center relative animate-fade-in-up">
        <span className="absolute left-4 top-4 text-blue-300 text-2xl">“</span>
        <span className="absolute right-4 bottom-4 text-blue-300 text-2xl">”</span>
        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-blue-400 dark:border-blue-600" />
        <p className="text-lg italic text-gray-700 dark:text-gray-200 mb-2">{testimonial.text}</p>
        <span className="font-bold text-blue-700 dark:text-blue-300">{testimonial.name}</span>
        <span className="block text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</span>
      </div>
    );
  }

  // Live Availability Status
  function getRandomStatus() {
    return Math.random() > 0.5 ? 'Available' : 'Busy';
  }

  // Gamified Badges
  function getBadges(provider: Provider): string[] {
    const badges = [];
    if (provider.rating >= 4.9) badges.push('Top Rated');
    if (provider.role.toLowerCase().includes('developer')) badges.push('Fast Responder');
    if (provider.role.toLowerCase().includes('trainer')) badges.push('100+ Services');
    return badges;
  }

  // Confetti Animation
  function Confetti({ show }: { show: boolean }) {
    if (!show) return null;
    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="confetti w-full h-full"></div>
        <style>{`
          .confetti {
            background-image: url('https://cdn.jsdelivr.net/gh/stevensegallery/confetti/confetti.gif');
            background-size: cover;
            opacity: 0.7;
          }
        `}</style>
      </div>
    );
  }

  // Animated Progress Bar for Provider Ratings
  function RatingBar({ rating }: { rating: number }) {
    const percent = Math.round((rating / 5) * 100);
    return (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-3 mt-2">
        <div
          className="h-3 rounded bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-700"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    );
  }

  // Personalized Recommendations Section
  const recommendedProviders = providers.slice(0, 3); // For demo, just pick first 3

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4 relative">
      {/* Confetti Animation */}
      <Confetti show={showConfetti} />
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
        <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700 dark:text-blue-300 animate-fade-in-up">Service Providers</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-center text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Browse verified professionals from all over India.
        </p>

        {/* Featured Providers */}
        {featuredProviders.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-center text-yellow-600">Featured Providers</h3>
            <div className="flex justify-center gap-4 mt-4">
              {featuredProviders.map((provider, idx) => (
                <div key={idx} className="bg-yellow-100 dark:bg-yellow-900 rounded-lg p-4 shadow flex flex-col items-center">
                  <span className="font-bold text-lg text-yellow-800 dark:text-yellow-200">{provider.name}</span>
                  <span className="ml-2 text-yellow-600">⭐ {provider.rating}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {successMessage && (
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up">
            {successMessage}
          </div>
        )}

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* Personalized Recommendations */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-300">Recommended for You</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendedProviders.map((provider, idx) => (
              <div key={idx} className="bg-green-50 dark:bg-green-900 rounded-lg p-4 shadow flex flex-col items-center">
                <img src={provider.image} alt={provider.name} className="w-14 h-14 rounded-full object-cover border-2 border-green-400 dark:border-green-600 shadow mb-2" />
                <span className="font-bold text-lg text-green-800 dark:text-green-200">{provider.name}</span>
                <span className="text-green-600">⭐ {provider.rating}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{provider.role}</span>
              </div>
            ))}
          </div>
        </div>

        {filteredProviders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No providers found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProviders.map((provider, index) => {
              const status = getRandomStatus();
              const badges = getBadges(provider);
              return (
                <div
                  key={index}
                  onClick={() => openModal(provider)}
                  className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 animate-fade-in-up border border-gray-100 dark:border-gray-700"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 dark:border-blue-600 shadow-md"
                    />
                    <div>
                      <h2 className="font-semibold text-xl text-gray-800 dark:text-white">{provider.name}</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-base">{provider.role}</p>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-bold mt-1 ${status === 'Available' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{status}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-base italic">{provider.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">⭐</span>
                      <span className="text-base text-gray-600 dark:text-gray-400 font-semibold">{provider.rating}/5</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={e => { e.stopPropagation(); handleHire(provider.name); }}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-bold hover:from-green-500 hover:to-green-700 hover:scale-110 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        aria-label={`Hire ${provider.name}`}
                      >
                        Hire Now
                      </button>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={!!compareList.find(p => p.name === provider.name)}
                          onChange={() => handleCompareToggle(provider)}
                          disabled={compareList.length === 2 && !compareList.find(p => p.name === provider.name)}
                        />
                        <span className="text-xs text-gray-500">Compare</span>
                      </label>
                    </div>
                  </div>
                  <RatingBar rating={provider.rating} />
                  {/* Badges */}
                  {badges.length > 0 && (
                    <div className="flex gap-2 mt-3">
                      {badges.map((badge, i) => (
                        <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold border border-blue-300 dark:border-blue-700">{badge}</span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Profile Details Modal */}
        {selectedProvider && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-md w-full shadow-2xl flex flex-col items-center">
              <img
                src={selectedProvider.image}
                alt={selectedProvider.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-400 dark:border-blue-600 shadow-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedProvider.name}</h2>
              <p className="mb-2 font-semibold text-blue-600 dark:text-blue-300">{selectedProvider.role}</p>
              <p className="mb-4 text-gray-700 dark:text-gray-200 text-center">{selectedProvider.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="font-semibold">{selectedProvider.rating}/5</span>
              </div>
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Provider Comparison Modal - FIXED SYNTAX */}
        {showCompareModal && compareList.length === 2 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-2xl w-full shadow-2xl flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300">Provider Comparison</h2>
              <div className="flex gap-8 w-full justify-center">
                {compareList.map((provider, i) => (
                  <div key={i} className="flex flex-col items-center w-1/2">
                    <img src={provider.image} alt={provider.name} className="w-20 h-20 rounded-full object-cover border-2 border-blue-400 dark:border-blue-600 shadow mb-2" />
                    <h3 className="font-bold text-lg mb-1">{provider.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">{provider.role}</p>
                    <span className="text-yellow-500 font-bold">⭐ {provider.rating}/5</span>
                    <p className="text-gray-700 dark:text-gray-300 text-center mt-2">{provider.description}</p>
                    <div className="flex gap-2 mt-2">
                      {getBadges(provider).map((badge, idx) => (
                        <span key={idx} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold border border-blue-300 dark:border-blue-700">{badge}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setCompareList([])} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceProviders;