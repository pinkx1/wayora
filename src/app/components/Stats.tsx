import React from 'react';
import statsGlobeImage from "../../../ChatGPT Image Feb 20, 2026, 04_36_40 PM (1).png";

export function Stats() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[32px] relative z-10">
        <div className="text-center mb-12">
          <div className="relative -top-[15px] inline-block bg-white shadow-lg px-6 py-3 rounded-full text-[17px] leading-none font-medium text-gray-600 mb-3">
            Real VistaTrip, real numbers
          </div>

          <div className="relative w-fit mx-auto">
            <h2 className="text-[44px] md:text-[50px] leading-[1.08] font-bold text-[#0f172a] mb-2">
              How people stay<br />consistent over time
            </h2>

            <div
              className="absolute -translate-y-1/2 bg-white shadow-lg px-6 py-3 rounded-full text-[17px] leading-none font-medium text-gray-600 whitespace-nowrap max-[900px]:hidden"
              style={{ top: "calc(50% - 40px)", left: "-360px", rotate: "20deg" }}
            >
              Monthly Records Overview
            </div>
            <div
              className="absolute -translate-y-1/2 bg-white shadow-lg px-6 py-3 rounded-full text-[17px] leading-none font-medium text-gray-600 whitespace-nowrap max-[900px]:hidden"
              style={{ top: "calc(50% - 40px)", right: "-360px", rotate: "-20deg" }}
            >
              Check-ins logged last month
            </div>
          </div>

          <div className="relative w-fit mx-auto mt-4">
            <div className="text-[72px] md:text-[108px] font-extrabold text-blue-500 tracking-tighter">
              22,000+
            </div>

            <div
              className="absolute -translate-y-1/2 bg-white shadow-lg px-6 py-3 rounded-full text-[17px] leading-none font-medium text-gray-600 whitespace-nowrap max-[900px]:hidden"
              style={{ top: "calc(50% + 130px)", left: "-405px", rotate: "-20deg" }}
            >
              Activity Overview - Last Month
            </div>
            <div
              className="absolute -translate-y-1/2 bg-white shadow-lg px-6 py-3 rounded-full text-[17px] leading-none font-medium text-gray-600 whitespace-nowrap max-[900px]:hidden"
              style={{ top: "calc(50% + 130px)", right: "-405px", rotate: "20deg" }}
            >
              Activity Overview - Last Month
            </div>
          </div>
        </div>

        {/* Main Visual */}
        <div className="relative w-full max-w-3xl mx-auto min-h-[420px] mb-12 flex items-center justify-center">
           <img 
             src={statsGlobeImage}
             alt="Travel stats visual"
             className="w-full max-w-[860px] h-auto object-contain"
           />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#0f172a] mb-2">300+</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Natural Destinations</div>
            <p className="text-gray-500 text-sm">
              At VistaTrip, we design travel experiences that feel personal, seamless, and memorable.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-[#0f172a] mb-2">12K+</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Satisfied Explorers</div>
            <p className="text-gray-500 text-sm">
              At VistaTrip, we design travel experiences that feel personal, seamless, and memorable.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow">
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
