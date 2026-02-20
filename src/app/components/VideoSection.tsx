import React from 'react';
import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 mb-4">
              Video Tour
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a]">
              Experience the<br />desert in motion
            </h2>
          </div>
          <div className="mt-6 md:mt-0 text-gray-500 max-w-xs text-sm text-right">
            A short look at what you'll see and feel during our guided tours.
          </div>
        </div>

        <div className="relative w-full h-[600px] rounded-[3rem] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1766946580189-bab407807044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWlsYm9hdCUyMHR1cnF1b2lzZSUyMHdhdGVyJTIwYWVyaWFsfGVufDF8fHx8MTc3MTQxNDM2NXww&ixlib=rb-4.1.0&q=80&w=1920" 
            alt="Video Preview" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group-hover:bg-white/30">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1">
                 <Play className="w-6 h-6 text-[#0f172a] fill-[#0f172a]" />
               </div>
            </button>
          </div>

          <div className="absolute top-10 right-10 max-w-xs text-white text-right">
            <div className="text-[56px] leading-none font-bold mb-2">95%</div>
            <div className="text-[22px] leading-[1.35] font-medium">
              Guests say they felt truly connected to nature.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
