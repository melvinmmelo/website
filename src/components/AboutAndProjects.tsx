'use client';

import { Github, Mail, ExternalLink, ArrowLeft } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import TypingAnimation from "@/components/TypingAnimation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const goToHome = () => {
    setIsNavigating(true);
    
    // Set flag to skip loader on home page
    sessionStorage.setItem('skipLoader', 'true');
    
    // Add smooth fade out transition
    setTimeout(() => {
      router.push('/?from=about');
    }, 300);
  };

  return (
    <>
      
      <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative transition-all duration-700 ${
        isVisible && !isNavigating ? 'opacity-100 scale-100' : isNavigating ? 'opacity-0 scale-95' : 'opacity-0 scale-95'
      }`}>
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Navigation Header */}
        <nav className={`fixed top-0 left-0 right-0 z-50 p-6 transition-all duration-500 delay-100 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          <div className="max-w-7xl mx-auto">
            <button 
              onClick={goToHome}
              disabled={isNavigating}
              className={`nav-button bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700/90 transition-all duration-300 flex items-center gap-2 ${
                isNavigating ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ArrowLeft size={20} />
              {isNavigating ? 'Loading...' : 'Back to Home'}
            </button>
          </div>
        </nav>

        {/* About Section */}
        <section id="about" className={`h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 relative z-10 transition-all duration-500 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl font-bold text-white text-center mb-16 transition-all duration-500 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>Hi! I&apos;m Melvs,</h2>
            <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-500 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div>
                <TypingAnimation
                  text="I&apos;m a full-stack developer from Batangas, Philippines, who thrives at the intersection of proven development practices and emerging technologies. Over the past 10 years, I&apos;ve evolved from traditional web development to incorporating AI and other innovative tools into my solutions, always with one goal: exceeding client expectations. My passion for continuous learning drives me to explore new technologies daily, while my commitment to client collaboration ensures these innovations translate into real-world value. From concept to deployment, I create applications that are not just functional and beautiful, but truly intelligent. Scroll down to see my projects!"
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 border border-gray-600 shadow-sm">
                  <h4 className="text-white font-semibold mb-2">Frontend</h4>
                  <p className="text-gray-400 text-sm">React, Vue.js, Next.js, TypeScript</p>
                </div>
                <div className="bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 border border-gray-600 shadow-sm">
                  <h4 className="text-white font-semibold mb-2">Backend</h4>
                  <p className="text-gray-400 text-sm">Laravel, PHP, Node.js</p>
                </div>
                <div className="bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 border border-gray-600 shadow-sm">
                  <h4 className="text-white font-semibold mb-2">Database</h4>
                  <p className="text-gray-400 text-sm">MySQL, PostgreSQL, MongoDB</p>
                </div>
                <div className="bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 border border-gray-600 shadow-sm">
                  <h4 className="text-white font-semibold mb-2">Tools</h4>
                  <p className="text-gray-400 text-sm">Git, Docker, AWS, Vercel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-500 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl font-bold text-white text-center mb-16 transition-all duration-500 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>Clients</h2>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              {/* Project 1 */}
              <div className="bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:bg-gray-700/90 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">EOLF Food Trading OPC</h3>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">
                  Full-stack application combining Laravel backend with Vue.js frontend for modern authentication system.
                </p>
                <div className="flex items-center gap-2">
                <span className="bg-yellow-900/50 text-white-300 px-2 py-1 rounded text-sm">PHP</span>
                <span className="bg-blue-900/50 text-dark-300 px-2 py-1 rounded text-sm">Laravel</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:bg-gray-700/90 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Philippine Pediatric Society - STC</h3>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">
                  Full-stack application combining Laravel backend with Vue.js frontend for modern authentication system.
                </p>
                <div className="flex items-center gap-2">
                <span className="bg-yellow-900/50 text-white-300 px-2 py-1 rounded text-sm">PHP</span>
                <span className="bg-blue-900/50 text-dark-300 px-2 py-1 rounded text-sm">Laravel</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:bg-gray-700/90 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">AralOnline New York</h3>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">
                  Full-stack application combining Laravel backend with Vue.js frontend for modern authentication system.
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-900/50 text-white-300 px-2 py-1 rounded text-sm">PHP</span>
                  <span className="bg-blue-900/50 text-dark-300 px-2 py-1 rounded text-sm">Laravel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 relative z-10 transition-all duration-500 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`text-4xl font-bold text-white mb-8 transition-all duration-500 delay-900 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>Let&apos;s Work Together!</h2>
            <p className={`text-xl text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-500 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              I&apos;m always open to discussing new opportunities and interesting projects. 
              Don&apos;t hesitate to reach out if you&apos;d like to collaborate!
            </p>
            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-500 delay-1100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <a 
                href="mailto:melvinmmelo@gmail.com"
                className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                melvinmmelo@gmail.com
              </a>
              <a 
                href="https://github.com/melvinmmelo"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github size={20} />
                GitHub Profile
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700 relative z-10 transition-all duration-500 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-7xl mx-auto text-center">
            <p className={`text-gray-400 transition-all duration-500 delay-1300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              2024 Melvin Melo. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
