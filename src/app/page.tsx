'use client';

import AnimatedBackground from "@/components/AnimatedBackground";
import PageLoader from "@/components/PageLoader";
import { useState, useEffect, Suspense } from "react";
import { Play } from 'lucide-react';
import { useRouter, useSearchParams } from "next/navigation";

function HomeContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if we're coming back from about page or if it's a direct navigation
    const fromAbout = searchParams.get('from') === 'about' || sessionStorage.getItem('skipLoader') === 'true';
    
    if (fromAbout) {
      // Skip loader and show content immediately
      setIsLoading(false);
      setShowContent(true);
      // Clean up the session storage
      sessionStorage.removeItem('skipLoader');
    }
  }, [searchParams]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  const goToAbout = () => {
    setIsNavigating(true);
    // Set session storage to skip loader on return
    sessionStorage.setItem('skipLoader', 'true');
    // Add smooth fade out transition
    setTimeout(() => {
      router.push('/about?from=home');
    }, 300);
  };

  return (
    <>
      {isLoading && <PageLoader onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative transition-all duration-500 ${
        showContent && !isNavigating ? 'opacity-100 scale-100' : isNavigating ? 'opacity-0 scale-95' : 'opacity-0'
      }`}>
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <button 
                  onClick={goToAbout}
                  disabled={isNavigating}
                  className={`inline-block w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-gray-400 to-gray-600 p-1 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer relative animate-pulse ${
                    isNavigating ? 'scale-110 opacity-80' : ''
                  }`}
                >
                  {/* Animated rotating border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white-300 via-white-500 to-white-300 animate-spin opacity-75" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-white-400 to-white-600"></div>
                  
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center group transform transition-all duration-300 z-10 overflow-hidden
                    before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-t before:from-transparent before:to-gray-700/30 before:opacity-0 before:transition-opacity before:duration-300
                    after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-b after:from-gray-900/80 after:to-transparent after:opacity-100 after:transition-opacity after:duration-300
                    hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:before:opacity-100 hover:after:opacity-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <div className="absolute inset-0 blur-sm bg-white/20 rounded-full scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Play
                        className="w-12 h-12 text-white transform transition-transform duration-300
                          [filter:drop-shadow(0_0_8px_rgba(255,255,255,0.3))]
                          group-hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.5))]"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  

                  <div className="mt-4">
                    <span className={`text-white text-sm block z-20 transition-all duration-300 ${
                      isNavigating ? 'opacity-100 animate-pulse' : 'opacity-0 animate-fadeIn'
                    }`} style={{ animationDelay: isNavigating ? '0s' : '8s', animationFillMode: 'forwards' }}>
                      {isNavigating ? 'Loading...' : 'START'}
                    </span>
                  </div>
                </button>
              </div>
              
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />}>
      <HomeContent />
    </Suspense>
  );
}
