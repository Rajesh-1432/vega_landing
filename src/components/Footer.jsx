// components/Footer.jsx
import React from 'react';
import logo from '../assets/logo.png';
import { Mail, Phone, MapPin, Search } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#070141] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              The Future is here.
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-md">
              Vega is an AI-powered chatbot that allows users to have conversations with a virtual assistant.
            </p>

            {/* Logo and Brand */}
            <div className="flex items-center space-x-4 text-sm mb-6">
              <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-xl"> Vega AI IT</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400 mb-6">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-sky-400" />
                <span>contact@vegaalit.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-sky-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-sky-400" />
                <span>Global Operation Center</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-500">
              Copyright © 2023. All rights reserved.
            </div>
          </div>

          {/* Search and Links Section */}
          <div className="lg:col-span-2 space-y-12">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent backdrop-blur-sm shadow-lg shadow-sky-500/10 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-500/5 to-blue-600/5 pointer-events-none"></div>
                </div>
                <button className="px-6 py-3 bg-gradient-to-b from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 min-w-fit">
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Company Links */}
              <div className="space-y-3">
                <h4 className="font-semibold mb-4 text-white">COMPANY</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-sky-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-sky-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Help Links */}
              <div className="space-y-3">
                <h4 className="font-semibold mb-4 text-white">HELP</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-sky-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-sky-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      Contact Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Access Links */}
              <div className="space-y-3">
                <h4 className="font-semibold mb-4 text-white">ACCESS</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-sky-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-sky-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      Request Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-sky-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors duration-300">
                Cookie Settings
              </a>
            </div>
          </div>

        </div>


      </div>
    </footer>
  );
};

export default Footer;