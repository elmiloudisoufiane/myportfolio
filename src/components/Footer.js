import React from 'react';
import { Mail, Github, Linkedin, Twitter, Heart, ExternalLink } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-300">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-lg">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a 
              href="mailto:elmiloudisofyan@gmail.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-3">
              <li>
                <a href="#Home" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#Projects" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#Contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700">
          <div className="flex gap-4">
            <a 
              href="https://github.com/elmiloudisoufiane" 
              target="_blank"
              title='GitHub'
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/soufiane-elmiloudi-7795b8360/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://x.com/elmilodisofiane" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="mailto:elmiloudisofyan.com" 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          <p className="text-gray-400 text-sm flex items-center gap-2">
            <span>Made with by elmiloudisoufiane © {currentYear}</span>
          </p>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
}

export default Footer;