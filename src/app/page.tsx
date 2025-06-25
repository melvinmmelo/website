'use client';

import { Github, Mail, ExternalLink } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import PageLoader from "@/components/PageLoader";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
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
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 animate-spin opacity-75" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-gray-400 to-gray-600"></div>
                  
                  <div className="relative w-full h-full rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 z-10">
                    <span className="text-4xl font-bold text-white">MM</span>
                  </div>
                  

                  <div className="mt-4">
                    <span className={`text-white text-sm block z-20 transition-all duration-300 ${
                      isNavigating ? 'opacity-100 animate-pulse' : 'opacity-0 animate-fadeIn'
                    }`} style={{ animationDelay: isNavigating ? '0s' : '8s', animationFillMode: 'forwards' }}>
                      {isNavigating ? 'Loading...' : 'Click to know more about me.'}
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
