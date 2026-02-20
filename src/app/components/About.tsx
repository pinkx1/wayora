import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 mb-4">
              Explore About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
              Where Every Journey<br />Begins with You
            </h2>
            <p className="text-lg text-gray-900 font-medium mb-4">
              Journey through beautiful routes and scenic locations in AlUla's natural surroundings.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              At VistaTrip, we believe travel should be simple, inspiring, and unforgettable. We create thoughtfully planned journeys that help you discover destinations in the most meaningful way—without the stress. From breathtaking landscapes to unique local experiences, our team focuses on quality, comfort, and authenticity.
            </p>
            
            <button className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-900 hover:bg-white transition-colors flex items-center gap-3 font-medium group">
              Start your trip
              <span className="bg-[#0f172a] text-white rounded-full p-1.5 group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="col-span-2 h-[240px] rounded-3xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1680204412403-73110934f5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBhaXIlMjBiYWxsb29ucyUyMGNhcHBhZG9jaWF8ZW58MXx8fHwxNzcxNTEwOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Hot air balloons" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-xl flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">See real moments from our journeys</span>
                <div className="bg-white rounded-full p-1">
                   <ArrowUpRight className="w-3 h-3 text-black" />
                </div>
              </div>
            </div>
            
            <div className="h-[240px] rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1691849233457-837d8e2f9da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0JTIwYWVyaWFsfGVufDF8fHx8MTc3MTQyNTgyMXww&ixlib=rb-4.1.0&q=80&w=600" 
                alt="Beach aerial" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="h-[240px] rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1663007714483-2fe4742a6a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmclMjB2aWV3JTIwY2xvdWRzfGVufDF8fHx8MTc3MTUxMDk1Nnww&ixlib=rb-4.1.0&q=80&w=600" 
                alt="Airplane view" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
