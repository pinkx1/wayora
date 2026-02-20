import React from 'react';
import brandLogo from "../../../ChatGPT Image Feb 20, 2026, 07_36_00 PM.png";

export function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-start gap-3">
                <div className="flex items-center justify-center shrink-0">
                  <img src={brandLogo} alt="wayora logo" className="h-16 w-auto md:h-[80px]" />
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-2xl md:text-[30px] tracking-tight lowercase leading-none">wayora</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Experience the magic of the desert with carefully crafted trips designed for adventure, relaxation, and unforgettable memories.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-6">Navigation</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tours</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Destination */}
          <div>
            <h3 className="font-bold mb-6">Destination</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sharaan Nature Reserve</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dadan Valley</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hegra (Madain)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Elephant Rock</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AlUla Old Town</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-6">Social</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Tiktok</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Threads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © 2025 wayora. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



