import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white text-[#0f172a] p-1.5 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight">VistaTrip</span>
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
            © 2025 VistaTrip. All rights reserved.
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
