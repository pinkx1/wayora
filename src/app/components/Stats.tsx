import React from 'react';

export function Stats() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-gray-500 mb-2">Real VistaTrip, real numbers</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-2">
            How people stay<br />consistent over time
          </h2>
          <div className="text-6xl md:text-8xl font-black text-blue-500 mt-4 tracking-tighter">
            22,000+
          </div>
        </div>

        {/* Globe Graphic Placeholder */}
        <div className="relative w-full max-w-2xl mx-auto h-[300px] mb-12">
           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-300/20 blur-3xl"></div>
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent z-20"></div>
           {/* Abstract Globe */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-green-400 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
                alt="Earth" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
           </div>

           {/* Floating Labels */}
           <div className="absolute top-0 left-0 md:left-20 bg-white shadow-lg px-4 py-2 rounded-full text-xs font-medium text-gray-600 rotate-[-10deg]">
             Monthly Records Overview
           </div>
           <div className="absolute bottom-10 left-0 bg-white shadow-lg px-4 py-2 rounded-full text-xs font-medium text-gray-600 rotate-[5deg]">
             Activity Overview - Last Month
           </div>
           <div className="absolute top-10 right-0 md:right-20 bg-white shadow-lg px-4 py-2 rounded-full text-xs font-medium text-gray-600 rotate-[10deg]">
             Check-ins logged last month
           </div>
           <div className="absolute bottom-20 right-0 bg-white shadow-lg px-4 py-2 rounded-full text-xs font-medium text-gray-600 rotate-[-5deg]">
             Activity Overview - Last Month
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#0f172a] mb-2">300+</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Natural Destinations</div>
            <p className="text-gray-500 text-sm">
              At VistaTrip, we design travel experiences that feel personal, seamless, and memorable.
            </p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#0f172a] mb-2">12K+</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Satisfied Explorers</div>
            <p className="text-gray-500 text-sm">
              At VistaTrip, we design travel experiences that feel personal, seamless, and memorable.
            </p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#0f172a] mb-2">100%</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Authentic Experiences</div>
            <p className="text-gray-500 text-sm">
              At VistaTrip, we design travel experiences that feel personal, seamless, and memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
