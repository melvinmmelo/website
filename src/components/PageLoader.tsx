'use client';

import { useEffect, useState } from 'react';

interface PageLoaderProps {
  onLoadingComplete: () => void;
}

export default function PageLoader({ onLoadingComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prevProgress + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="inline-block w-18 h-18 mx-auto rounded-full bg-gradient-to-r from-gray-400 to-gray-600 p-1 shadow-lg relative animate-pulse">
            {/* Animated rotating border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 animate-spin opacity-75" style={{ animationDuration: '2s' }}></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-r from-gray-400 to-gray-600"></div>
            
            <div className="relative w-full h-full rounded-full bg-gray-800 flex items-center justify-center z-10">
              {/* <span className="text-2xl font-bold text-white">MM</span> */}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          {/* <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
          <p className="text-gray-400">Please wait while we prepare everything...</p> */}
        </div>

        {/* Progress Bar */}
        {/* <div className="w-80 mx-auto">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-gray-400 to-gray-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-2 text-gray-400 text-sm">
            {Math.round(progress)}%
          </div>
        </div> */}

        {/* Loading Dots Animation */}
        {/* <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div> */}
      </div>
    </div>
  );
}
