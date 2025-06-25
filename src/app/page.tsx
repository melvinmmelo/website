'use client';

import { Github, Mail, ExternalLink } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import PageLoader from "@/components/PageLoader";
import TypingAnimation from "@/components/TypingAnimation";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {isLoading && <PageLoader onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <button 
                  onClick={scrollToAbout}
                  className="inline-block w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-gray-400 to-gray-600 p-1 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer relative animate-pulse"
                >
                  {/* Animated rotating border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 animate-spin opacity-75" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-gray-400 to-gray-600"></div>
                  
                  <div className="relative w-full h-full rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 z-10">
                    <span className="text-4xl font-bold text-white">MM</span>
                  </div>
                </button>
              </div>
              
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Hi! I'm Melvin,</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <TypingAnimation
                  text="I&apos;m a full-stack developer from Batangas, Philippines, who thrives at the intersection of proven development practices and emerging technologies. Over the past 10 years, I&apos;ve evolved from traditional web development to incorporating AI and other innovative tools into my solutions, always with one goal: exceeding client expectations. My passion for continuous learning drives me to explore new technologies daily, while my commitment to client collaboration ensures these innovations translate into real-world value. From concept to deployment, I create applications that are not just functional and beautiful, but truly intelligent."
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
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Clients</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:bg-gray-700/90 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">EOLF Food Trading OPC</h3>
                  <a 
                    href="https://eolffoodtradingopc.logiainnov.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">
                  EOLF Food Trading OPC is a Laravel application with social media authentication integration for seamless user login experience.
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
                    href="https://ppsstc.org" 
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
                    href="https://aralonyc.com" 
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
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Let&apos;s Work Together</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and interesting projects. 
              Don&apos;t hesitate to reach out if you&apos;d like to collaborate!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">
              2024 Melvin Melo. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
