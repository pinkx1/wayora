import React from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Sahara Dawn',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1736358787078-2c9a8eee13f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjByb2NrcyUyMHBhbm9yYW1pY3xlbnwxfHx8fDE3NzE1MTA5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Desert'
  },
  {
    id: 2,
    name: 'Oasis Mirage',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1691849233457-837d8e2f9da3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0JTIwYWVyaWFsfGVufDF8fHx8MTc3MTQyNTgyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Beach'
  },
  {
    id: 3,
    name: 'Crimson Dunes',
    price: '$60',
    image: 'https://images.unsplash.com/photo-1703856973890-9d28ae141595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lbCUyMHJpZGluZyUyMGRlc2VydCUyMHN1bnNldHxlbnwxfHx8fDE3NzE1MTA5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Culture'
  }
];

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 mb-4">
              Our Destination
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] max-w-[780px] leading-tight">
              <span className="block">Your Journey to the Perfect</span>
              <span className="block">Destination Begins Here</span>
            </h2>
          </div>
          
          <div className="mt-8 md:mt-0 flex items-center gap-[4px]">
             <button className="h-14 px-9 rounded-full border border-[#09142f] bg-transparent text-[#0f172a] text-base font-medium tracking-tight hover:bg-[#0f172a]/5 transition-colors">
               See All Destination
             </button>
             <button
               aria-label="See all destination"
               className="h-14 w-14 rounded-full border border-[#cbd5e1] bg-[#0f172a] text-white flex items-center justify-center hover:bg-[#1e293b] transition-colors"
             >
               <ArrowUpRight className="w-5 h-5" />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div key={dest.id} className="group relative h-[470px] rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white grid place-items-center shadow-[0_10px_24px_rgba(9,20,47,0.18)]">
                <ArrowUpRight className="w-5 h-5 text-[#09142f]" />
              </div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                <div className="flex items-center gap-1 text-sm font-medium text-white/80">
                  <span>{dest.price}</span>
                  <span className="text-white/60">/ per person</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-4">
          <button className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center hover:bg-[#e2e8f0] transition-colors">
            <ChevronLeft className="w-5 h-5 text-[#94a3b8]" />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center hover:bg-[#e2e8f0] transition-colors">
            <ChevronRight className="w-5 h-5 text-[#94a3b8]" />
          </button>
        </div>
      </div>
    </section>
  );
}
