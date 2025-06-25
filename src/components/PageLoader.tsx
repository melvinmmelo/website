'use client';

import { useEffect, useState } from 'react';

interface PageLoaderProps {
  onLoadingComplete: () => void;
}

export default function PageLoader({ onLoadingComplete }: PageLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isVisible) {
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
          onLoadingComplete();
        }, 1000);
      }
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
      </div>
    </div>
  );
}
