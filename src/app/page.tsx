import Image from "next/image";
import { Github, Mail, ExternalLink, Code, Coffee, Heart } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-amber-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-amber-900 font-bold text-xl">Melvin Melo</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-amber-700 hover:text-amber-900 transition-colors">About</a>
              <a href="#projects" className="text-amber-700 hover:text-amber-900 transition-colors">Projects</a>
              <a href="#contact" className="text-amber-700 hover:text-amber-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-amber-400 to-orange-500 p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-4xl font-bold text-amber-900">MM</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">
              Hi 👋, I'm <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Melvin Melo</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto">
              A passionate web developer from Batangas, Philippines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="https://github.com/melvinmmelo" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-amber-300 text-amber-800 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 flex items-center gap-2"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">Web Developer & Software Engineer</h3>
              <p className="text-amber-700 text-lg leading-relaxed mb-6">
                I'm a passionate web developer with expertise in modern web technologies. 
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-700">
                  <Code size={20} className="text-amber-600" />
                  <span>Ask me about Web Development</span>
                </div>
                <div className="flex items-center gap-3 text-amber-700">
                  <Coffee size={20} className="text-amber-600" />
                  <span>I love anime, sports and coffee</span>
                </div>
                <div className="flex items-center gap-3 text-amber-700">
                  <Heart size={20} className="text-amber-600" />
                  <span>Badminton Coach & Sports Enthusiast</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-amber-200 shadow-sm">
                <h4 className="text-amber-900 font-semibold mb-2">Frontend</h4>
                <p className="text-amber-600 text-sm">React, Vue.js, Next.js, TypeScript</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-amber-200 shadow-sm">
                <h4 className="text-amber-900 font-semibold mb-2">Backend</h4>
                <p className="text-amber-600 text-sm">Laravel, PHP, Node.js</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-amber-200 shadow-sm">
                <h4 className="text-amber-900 font-semibold mb-2">Database</h4>
                <p className="text-amber-600 text-sm">MySQL, PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-amber-200 shadow-sm">
                <h4 className="text-amber-900 font-semibold mb-2">Tools</h4>
                <p className="text-amber-600 text-sm">Git, Docker, AWS, Vercel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-amber-200 hover:bg-white/90 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-amber-900">Laravel Social Login</h3>
                <a 
                  href="https://github.com/melvinmmelo/lara_social" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-amber-700 mb-4">
                Laravel application with social media authentication integration for seamless user login experience.
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">PHP</span>
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Laravel</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-amber-200 hover:bg-white/90 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-amber-900">Laravel Vue Login</h3>
                <a 
                  href="https://github.com/melvinmmelo/login_lara_vue" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-amber-700 mb-4">
                Full-stack application combining Laravel backend with Vue.js frontend for modern authentication system.
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">PHP</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Vue.js</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-amber-200 hover:bg-white/90 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-amber-900">React 101</h3>
                <a 
                  href="https://github.com/melvinmmelo/react-101" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-amber-700 mb-4">
                Learning project showcasing React fundamentals and modern JavaScript development practices.
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">JavaScript</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50/50 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-8">Let's Work Together</h2>
          <p className="text-xl text-amber-700 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:melvinmmelo@gmail.com"
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              melvinmmelo@gmail.com
            </a>
            <a 
              href="https://github.com/melvinmmelo"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-amber-300 text-amber-800 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Github size={20} />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-amber-200 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-600">
            2024 Melvin Melo. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
