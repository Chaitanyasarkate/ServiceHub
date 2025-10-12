import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing ServiceHub...');

  const loadingSteps = [
    { text: 'Initializing ServiceHub...', duration: 1000 },
    { text: 'Loading providers...', duration: 800 },
    { text: 'Connecting to services...', duration: 600 },
    { text: 'Almost ready...', duration: 400 },
    { text: 'Welcome to ServiceHub!', duration: 200 }
  ];

  useEffect(() => {
    let currentStep = 0;
    let currentProgress = 0;

    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep].text);
        
        const stepProgress = 100 / loadingSteps.length;
        const targetProgress = (currentStep + 1) * stepProgress;
        
        const progressInterval = setInterval(() => {
          currentProgress += 2;
          setProgress(Math.min(currentProgress, targetProgress));
          
          if (currentProgress >= targetProgress) {
            clearInterval(progressInterval);
            currentStep++;
          }
        }, 50);
      } else {
        clearInterval(interval);
      }
    }, loadingSteps[currentStep]?.duration || 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full animate-float animate-delay-500" />
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-white/10 rounded-full animate-float animate-delay-1000" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full animate-float animate-delay-1500" />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 animate-bounce-in">
          <div className="h-24 w-24 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
            <span className="text-blue-600 font-bold text-4xl">S</span>
          </div>
          <h1 className="text-4xl font-bold text-white mt-4 text-shadow">ServiceHub</h1>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-white/80 text-sm mt-2">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-lg font-medium animate-pulse">
          {loadingText}
        </div>

        {/* Loading Dots */}
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-white rounded-full animate-bounce animate-delay-200" />
          <div className="w-3 h-3 bg-white rounded-full animate-bounce animate-delay-400" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
