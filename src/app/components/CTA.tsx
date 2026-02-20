import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-sm border border-gray-100">
           
           <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600">
                Start now
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight">
                Plan Your Perfect<br />Desert Escape Today
              </h2>
              <p className="text-gray-500 max-w-md">
                Embark on a journey through stunning dunes, serene oases, and breathtaking landscapes. Your unforgettable desert adventure starts here.
              </p>
              
              <button className="px-8 py-4 rounded-full border border-gray-300 hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] transition-all flex items-center gap-3 font-medium group w-fit">
                Start your trip
                <span className="bg-[#0f172a] text-white rounded-full p-1.5 group-hover:bg-white group-hover:text-[#0f172a] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
           </div>

           <div className="flex-1 w-full relative h-[400px]">
              <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-lg z-10">
                 <img 
                   src="https://images.unsplash.com/photo-1691849233457-837d8e2f9da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0JTIwYWVyaWFsfGVufDF8fHx8MTc3MTQyNTgyMXww&ixlib=rb-4.1.0&q=80&w=600" 
                   alt="Beach" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-lg z-20 border-4 border-white">
                 <img 
                   src="https://images.unsplash.com/photo-1757481904836-0b8bf24cb73e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtlciUyMG1vdW50YWluJTIwcGVhayUyMGxvb2tpbmclMjBvdXR8ZW58MXx8fHwxNzcxNTEwOTU2fDA&ixlib=rb-4.1.0&q=80&w=600" 
                   alt="Mountains" 
                   className="w-full h-full object-cover"
                 />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
